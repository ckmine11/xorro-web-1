import { memo, type ReactElement } from 'react'

import { type TComment } from '~/types/entities/comment'

// Dummy
function Comment({ content }: { content: string }): ReactElement {
  return <li>{content}</li>
}

type TPostProps = {
  content: string
  id: string
  onButtonClick?: (id: string) => void
  onIconClick?: (id: string) => void
  recentComments: TComment[]
  title: string
}

export const Post = memo(
  ({
    id,
    title,
    content,
    recentComments,
    onButtonClick,
    onIconClick,
  }: TPostProps): ReactElement => {
    return (
      <>
        <h3>
          {id} | {title}
        </h3>
        <p>{content}</p>
        <a
          onClick={() => {
            return onButtonClick?.(id)
          }}
          className="cursor-pointer text-blue-500 underline"
        >
          Update
        </a>
        <a
          onClick={() => {
            return onIconClick?.(id)
          }}
          className="cursor-pointer text-red-500 underline"
        >
          Remove
        </a>
        <ul>
          {recentComments.map((comment) => {
            return <Comment key={comment.id} content={comment.content} />
          })}
        </ul>
      </>
    )
  },
)
