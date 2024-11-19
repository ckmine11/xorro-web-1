import { Exome } from 'exome'

import { PostStore } from '~/stores/postStore'
import { type TPost } from '~/types/entities/post'
import { type Optional } from '~/types/utilities'

export class PostsStore extends Exome {
  public posts: PostStore[] = []

  // Actions for mutating the state
  public addPost(props: Optional<TPost, 'id'>): void {
    this.posts.push(new PostStore(props))
  }

  public removePostById(id: string): void {
    this.posts = this.posts.filter((post) => {
      return post.id !== id
    })
  }

  // Getter properties (won't trigger re-rendering)
  public get postsCount(): number {
    return this.posts.length
  }

  // Getter functions with arguments (won't trigger re-rendering)
  public getPostById = (id: string): PostStore | undefined => {
    return this.posts.find((post) => {
      return post.id === id
    })
  }
}
