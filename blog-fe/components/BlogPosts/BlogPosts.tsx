import { GeneralPost } from '../../types/generalPost'
import { VFC } from 'react'
import remarkGfm from 'remark-gfm'
import ReactMarkdown from 'react-markdown'
import styles from './BlogPosts.module.scss'
import Link from 'next/link'
import formatDistance from 'date-fns/formatDistance'
import differenceInDays from 'date-fns/differenceInDays'
import { formatDate } from './formatDate'

type BlogPostsProps = {
  posts: GeneralPost[]
}
const BlogPosts: VFC<BlogPostsProps> = ({ posts }) => {
  return (
    <ul className={styles.posts}>
      {posts.map((post) => {
        return (
          <li key={post._id} className={styles.listItem}>
            <div className={styles.heading}>
              <Link href="/post/[slug]" as={`/post/${post.slug.current}`}>
                <a>{post.title}</a>
              </Link>
              <time
                dateTime={formatDate(post.publishedAt)}
                title={formatDate(post.publishedAt)}
              >
                {formatDate(post.publishedAt, true)}
              </time>
            </div>
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              className={styles.miniBody}
            >
              {post.miniBody}
            </ReactMarkdown>
            <div>
              {post.categories.map((category) => (
                <span key={category} className={styles.category}>
                  {category}
                </span>
              ))}
            </div>
          </li>
        )
      })}
    </ul>
  )
}

export default BlogPosts
