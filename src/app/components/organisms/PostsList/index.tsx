import { useStore } from 'exome/react'
import { type ReactElement, useCallback } from 'react'

import { postsStore } from '~/stores'

import { PostListItem } from './PostListItem'

export function PostsList(): ReactElement {
  const { posts, removePostById } = useStore(postsStore)

  const removePost = useCallback(
    (_id: string) => {
      removePostById(_id)
    },
    [removePostById],
  )

  return (
    <ul className="divide-y divide-solid divide-gray-200">
      {posts.map((post) => {
        console.log({ id: post.id })

        return (
          <li key={post.id} className="py-2">
            <PostListItem post={post} onRemove={removePost} />
          </li>
        )
      })}
    </ul>
  )
}
