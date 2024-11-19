import { Exome } from 'exome'

import { type TComment } from '~/types/entities/comment'
import { type TPost } from '~/types/entities/post'
import { type Optional } from '~/types/utilities'

export class PostStore extends Exome {
  public id: string
  public title: string
  public content: string
  public comments: TComment[] = []

  constructor(props: Optional<TPost, 'id'>) {
    super()
    this.id = props.id || Math.random().toString(36).substring(2, 9)
    this.title = props.title
    this.content = props.content
  }

  public update(props: Partial<TPost>): void {
    this.title = props.title || this.title
    this.content = props.content || this.content
  }

  public addComment(comment: TComment): void {
    this.comments.push(comment)
  }

  public get recentComments(): TComment[] {
    return this.comments.slice(0, 5)
  }
}
