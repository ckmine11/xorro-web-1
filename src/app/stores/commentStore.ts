import { Exome } from 'exome'

import { type TComment } from '~/types/entities/comment'
import { type Optional } from '~/types/utilities'

export class CommentStore extends Exome {
  public id: string
  public author: string
  public content: string

  constructor(props: Optional<TComment, 'id'>) {
    super()
    this.id = props.id || Math.random().toString(36).substring(2, 9)
    this.author = props.author
    this.content = props.content
  }
}
