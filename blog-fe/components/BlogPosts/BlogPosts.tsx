import { GeneralPost } from '../../types/generalPost'
import { MouseEventHandler, useState, VFC } from 'react'
import styles from './BlogPosts.module.scss'
import Link from 'next/link'
import { formatDate } from '../../utils/formatDate'
import {
  Timeline,
  Text,
  Badge,
  Anchor,
  Space,
  Container,
  Group,
} from '@mantine/core'

type BlogPostsProps = {
  posts: GeneralPost[]
}
const BlogPosts: VFC<BlogPostsProps> = ({ posts }) => {
  const categories = Array.from(new Set(posts.map((p) => p.categories).flat()))
  const [selectedCategory, setSelectedCategory] = useState('')

  const handleCategoryClick: MouseEventHandler<HTMLDivElement> = (event) => {
    if (event.currentTarget.textContent) {
      if (event.currentTarget.textContent === selectedCategory) {
        setSelectedCategory('')
      } else {
        setSelectedCategory(event.currentTarget.textContent)
      }
    }
  }
  const color = selectedCategory ? 'blue' : 'teal'
  return (
    <>
      <Container>
        <Group>
          {categories.sort().map((c) => (
            <Badge
              key={c}
              color={color}
              variant={c !== selectedCategory ? 'outline' : 'gradient'}
              onClick={handleCategoryClick}
              gradient={{ from: 'teal', to: 'blue', deg: 60 }}
            >
              {c}
            </Badge>
          ))}
        </Group>
      </Container>
      <Space h="xl" />

      <Timeline color="teal" active={!selectedCategory ? posts.length : -1}>
        {posts.map((post) => (
          <Timeline.Item
            active={post.categories.includes(selectedCategory)}
            key={post._id}
            title={
              <Link
                href="/post/[slug]"
                as={`/post/${post.slug.current}`}
                passHref
              >
                <Anchor color={color} className={styles.title}>
                  {post.title}
                </Anchor>
              </Link>
            }
            lineActive={true}
            color={color}
          >
            <Text color="dimmed">{post.miniBody}</Text>
            <Text size="xs" mt={4}>
              {formatDate(post.publishedAt)}
            </Text>
          </Timeline.Item>
        ))}
      </Timeline>
    </>
  )
}

export default BlogPosts
