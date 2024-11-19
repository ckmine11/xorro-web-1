import { useStore } from 'exome/react'
import { memo, type ReactElement, useCallback } from 'react'

import { Post } from '~/components/molecules/Post'
import { type PostStore } from '~/stores/postStore'

export const PostListItem = memo(
  ({
    post,
    onRemove,
  }: {
    onRemove: (id: string) => void
    post: PostStore
  }): ReactElement => {
    const { title, content, id, recentComments, update } = useStore(post)

    console.log('rendering: ', { id, title })

    const formattedTitle = `${title} @ ${new Date().getMilliseconds().toString()}`

    const updatePost = useCallback(
      (newTitle: string) => {
        update({ title: newTitle })
      },
      [update],
    )

    return (
      <Post
        id={id}
        title={formattedTitle}
        content={content}
        recentComments={recentComments}
        onButtonClick={updatePost}
        onIconClick={onRemove}
      />
    )
  },
)
