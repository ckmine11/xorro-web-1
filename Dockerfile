FROM oven/bun:1.1.34 AS builder
# Set the working directory
WORKDIR /app
# Set NODE_ENV to production
ENV NODE_ENV=production
# Copy lockfile and package.json
COPY bun.lockb package.json ./
# Install dependencies
RUN bun install --frozen-lockfile --ignore-scripts
# Copy the rest of the application code
COPY . .

#set env variables for staging
ARG NEXT_PUBLIC_HOST
ENV NEXT_PUBLIC_HOST=$NEXT_PUBLIC_HOST

ARG NEXT_PUBLIC_API_URL
ENV NEXT_PUBLIC_API_URL=$NEXT_PUBLIC_API_URL

ARG NEXT_PUBLIC_AUTH0_DOMAIN
ENV NEXT_PUBLIC_AUTH0_DOMAIN=$NEXT_PUBLIC_AUTH0_DOMAIN

ARG NEXT_PUBLIC_AUTH0_CLIENT_ID
ENV NEXT_PUBLIC_AUTH0_CLIENT_ID=$NEXT_PUBLIC_AUTH0_CLIENT_ID

# Build the application
RUN bun run build
# Final stage
FROM oven/bun:1.1.34
# Set the working directory
WORKDIR /app
# Set NODE_ENV to production
ENV NODE_ENV=production
# Copy built application from the builder stage
COPY --from=builder /app ./
# Expose the application port
EXPOSE 3000
# Command to run the application
CMD ["bun", "start"]
