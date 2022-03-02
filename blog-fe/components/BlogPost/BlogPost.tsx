import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import imageUrlBuilder from '@sanity/image-url'
import client from '../../client'
import { AuthorImage, PostType } from '../../types/postType'
import { VFC } from 'react'
import readingTime from 'reading-time'
import Image from 'next/image'
import styles from './BlogPost.module.scss'
import Link from 'next/link'
import { formatDate } from '../BlogPosts/formatDate'

function urlFor(source: AuthorImage) {
  return imageUrlBuilder(client).image(source)
}
type BlogPostProps = {
  post: PostType
}
const BlogPost: VFC<BlogPostProps> = ({ post }) => {
  const {
    title = 'Missing title',
    name = 'Missing name',
    categories,
    authorImage,
    body = 'Missing Body',
  } = post
  return (
    <article className={styles.article}>
      <h1>{title}</h1>
      <time
        dateTime={formatDate(post.publishedAt)}
        title={formatDate(post.publishedAt)}
      >
        {formatDate(post.publishedAt, true)}
      </time>
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
      <ReactMarkdown remarkPlugins={[remarkGfm]} className={styles.markdown}>
        {body}
      </ReactMarkdown>
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
      <div className={styles.backToPost}>
        <Link href={'/'}>&#8592; Back to posts</Link>
      </div>
    </article>
  )
}

export default BlogPost
