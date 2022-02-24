import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import imageUrlBuilder from '@sanity/image-url'
import client from '../../client'
import { AuthorImage, PostType } from '../../types/postType'
import { VFC } from 'react'
import readingTime from 'reading-time'
import Image from 'next/image'
import styles from './BlogPost.module.scss'

function urlFor(source: AuthorImage) {
  return imageUrlBuilder(client).image(source)
}
type BlogPostProps = {
  post: PostType
}
const BlogPost: VFC<BlogPostProps> = ({ post }) => {
  const { title, name, categories, authorImage, body } = post
  return (
    <article className={styles.article}>
      <h1>{title}</h1>
      <time>{new Date(post.publishedAt).toDateString()}</time>
      {' - '}
      <span>{readingTime(body).text}</span>
      {categories && (
        <ul className={styles.categories}>
          {categories.map((category) => (
            <li key={category} className={styles.category}>
              {category}
            </li>
          ))}
        </ul>
      )}
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{body}</ReactMarkdown>
      <br />
      <br />
      <span className={styles.author}>
        {authorImage && (
          <div>
            <Image
              className={styles.image}
              src={urlFor(authorImage).width(50).url()}
              alt={`${name}'s picture`}
              width={50}
              height={50}
            />
          </div>
        )}
        <span>{name}</span>
      </span>
    </article>
  )
}

export default BlogPost