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
import { formatDate } from '../../utils/formatDate'
import SyntaxHighlight from '../SyntaxHighlight'
import { Badge, Button, Group, Text, Title } from '@mantine/core'

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
  const pathToGoBackTo = categories.includes('sports') ? '/training-log' : '/'
  return (
    <article>
      <Title order={1} my={16}>
        {title}
      </Title>
      <Group>
        <time
          dateTime={formatDate(post.publishedAt)}
          title={formatDate(post.publishedAt)}
        >
          {formatDate(post.publishedAt)}
        </time>
        <Text>{readingTime(body).text}</Text>
        {categories.map((category) => (
          <Badge
            key={category}
            variant={'gradient'}
            gradient={{ from: 'teal', to: 'blue', deg: 60 }}
          >
            {category}
          </Badge>
        ))}
      </Group>
      <ReactMarkdown components={SyntaxHighlight} remarkPlugins={[remarkGfm]}>
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
      <Link href={pathToGoBackTo} passHref>
        <Button
          component="a"
          my={16}
          variant="gradient"
          gradient={{ from: 'teal', to: 'blue', deg: 60 }}
        >
          &#8592; Back to posts
        </Button>
      </Link>
    </article>
  )
}

export default BlogPost
