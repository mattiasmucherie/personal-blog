import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import imageUrlBuilder from '@sanity/image-url'
import client from '../../client'
import { PostType } from '../../types/postType'
import { VFC } from 'react'
import readingTime from 'reading-time'

function urlFor(source: any) {
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
    body,
  } = post
  return (
    <article>
      <h1>{title}</h1>
      <span>By {name}</span>
      <p>{readingTime(body).text}</p>
      {categories && (
        <ul>
          Posted in
          {categories.map((category) => (
            <li key={category}>{category}</li>
          ))}
        </ul>
      )}
      {authorImage && (
        <div>
          <img
            src={urlFor(authorImage).width(50).url()}
            alt={`${name}'s picture`}
          />
        </div>
      )}
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{body}</ReactMarkdown>
    </article>
  )
}

export default BlogPost
