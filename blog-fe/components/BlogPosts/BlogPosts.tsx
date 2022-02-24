import { GeneralPost } from '../../types/generalPost'
import { VFC } from 'react'
import remarkGfm from 'remark-gfm'
import ReactMarkdown from 'react-markdown'
import styles from './BlogPosts.module.scss'
import Link from 'next/link'

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
              <time dateTime={new Date(post.publishedAt).toDateString()}>
                {new Date(post.publishedAt).toDateString()}
              </time>
            </div>
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
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
