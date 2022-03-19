import { GeneralPost } from '../../types/generalPost'
import { MouseEventHandler, useState, VFC } from 'react'
import remarkGfm from 'remark-gfm'
import ReactMarkdown from 'react-markdown'
import styles from './BlogPosts.module.scss'
import Link from 'next/link'
import { formatDate } from '../../utils/formatDate'

type BlogPostsProps = {
  posts: GeneralPost[]
}
const BlogPosts: VFC<BlogPostsProps> = ({ posts }) => {
  const categories = Array.from(new Set(posts.map((p) => p.categories).flat()))
  const [selectedCategory, setSelectedCategory] = useState('')

  const handleCategoryClick: MouseEventHandler<HTMLButtonElement> = (event) => {
    if (event.currentTarget.textContent) {
      if (event.currentTarget.textContent === selectedCategory) {
        setSelectedCategory('')
      } else {
        setSelectedCategory(event.currentTarget.textContent)
      }
    }
  }
  const filteredPosts = posts.filter((p) =>
    selectedCategory ? p.categories.includes(selectedCategory) : true
  )

  return (
    <>
      <div className={styles.categoryWrapper}>
        {categories.map((c) => (
          <button
            key={c}
            className={`${styles.category} ${
              c === selectedCategory && styles.highlight
            }`}
            onClick={handleCategoryClick}
          >
            {c}
          </button>
        ))}
      </div>
      <br />

      <ul className={styles.posts}>
        {filteredPosts.map((post) => {
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
                  {formatDate(post.publishedAt)}
                </time>
              </div>
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                className={styles.miniBody}
              >
                {post.miniBody}
              </ReactMarkdown>
              <div className={styles.categoryWrapper}>
                {post.categories.map((category) => (
                  <button
                    key={category}
                    className={`${styles.category} ${
                      category === selectedCategory && styles.highlight
                    }`}
                    onClick={handleCategoryClick}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default BlogPosts
