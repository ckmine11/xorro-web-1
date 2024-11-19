```markdown
# Xorro Backend Services Setup

This document outlines the steps to set up the backend services for the Xorro project using Docker Compose.

## Prerequisites

- Docker
- Docker Compose
- AWS CLI (configured for your account)

## Steps to Set Up Backend Services

### 1. Clone the Xorro Repository

If you haven't already, clone the Xorro repository to your local machine:

```bash
git clone https://github.com/newsocialtheory/xorro-web.git
cd xorro-web
```

### 2. Navigate to the `xorro-web/docker` Directory

The `docker-compose.yml` file and relevant configurations are located in the `xorro-web/docker` directory. Change to this directory:

```bash
cd xorro-web/docker
```

### 3. Log in to the AWS ECR Repository

Before pulling Docker images from AWS ECR, you need to authenticate to the repository. Run the following commands to log in:

```bash
# Unset any existing AWS_VAULT session if active
unset AWS_VAULT

# Use AWS Vault to execute the necessary AWS CLI commands
aws-vault exec nst-build

# Get Docker login credentials for AWS ECR and authenticate
aws ecr get-login-password --region ap-southeast-1 | docker login --username AWS --password-stdin 024848447392.dkr.ecr.ap-southeast-1.amazonaws.com
```

This will authenticate your Docker client to AWS ECR, allowing you to pull the necessary images.

### 4. Build and Start Backend Services

To set up and run the backend services, execute the following command:

```bash
docker-compose up -d --build $(<services/services.txt)
```

- `docker-compose up -d`: Starts the containers in detached mode (in the background).
- `--build`: Forces Docker Compose to rebuild the images before starting the services.
- `$(<services/services.txt)`: Specifies the services to be started by reading the list of services from the `services.txt` file.

> **Note:** The `services.txt` file can be modified to specify which backend services you want to install and run. This file should contain a list of services to include, such as `auth-service`, `db`, etc.

### 5. Verify Running Containers

After running the `docker-compose` command, you can verify that the containers are up and running by executing:

```bash
docker ps
```

This will display the currently running containers along with their ports and statuses.

### 6. Accessing the Auth Service

Once the services are running, you can access the following backend services:

- **Campaign Service**: Accessible at [http://localhost:8083/swagger-ui1] 
  The Campaign Service is running on port 8081.

 - **Peeps user Service**: Accessible at [http://localhost:8093/swagger-ui/] 
  The Campaign Service is running on port 8093.

- **Auth Service**: Accessible at [http://localhost:8084/swagger-ui/]
  The Auth Service is running on port 8084.


## Troubleshooting

- **Container not starting:** Run `docker-compose logs <service-name>` to check the logs for any errors related to a specific service.
- **Database migration issues:** If Flyway encounters issues, try running `docker run flyway flyway repair` to fix any migration checksum mismatches.
  
## Useful Docker Commands

- **Stop all services:**
  ```bash
  docker-compose down
  ```
  
- **View logs for a specific service:**
  ```bash
  docker-compose logs <service-name>
  ```

- **View logs for all services:**
  ```bash
  docker-compose logs
  ```

## Conclusion

By following the above steps, you should be able to successfully set up and run the backend services for the Xorro project using Docker Compose. If you encounter any issues, refer to the troubleshooting section or check the logs for more details.
```