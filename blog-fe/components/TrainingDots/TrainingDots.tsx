import { VFC } from 'react'
import parseISO from 'date-fns/parseISO'
import differenceInCalendarWeeks from 'date-fns/differenceInCalendarWeeks'
import { GeneralPost } from '../../types/generalPost'

interface TrainingDotsProps {
  posts: GeneralPost[]
}

const TrainingDots: VFC<TrainingDotsProps> = ({ posts }) => {
  const firstPost = posts[posts.length - 1]
  const lastPost = posts[0]
  const weekSpan =
    differenceInCalendarWeeks(
      parseISO(lastPost.publishedAt),
      parseISO(firstPost.publishedAt),
      { weekStartsOn: 1 }
    ) + 1
  return null
}

export default TrainingDots
