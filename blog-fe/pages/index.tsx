import groq from 'groq'
import client from '../client'
import { GeneralPost } from '../types/generalPost'
import { NextPage } from 'next'
import BlogPosts from '../components/BlogPosts/BlogPosts'

type IndexProps = {
  posts: GeneralPost[]
}
const Index: NextPage<IndexProps> = ({ posts }) => {
  return (
    <main>
      <h2>My thought and tips and tricks</h2>
      <BlogPosts posts={posts} />
    </main>
  )
}

export const getStaticProps = async () => {
  const posts = await client.fetch<GeneralPost[]>(groq`
  *[_type == "post" && publishedAt < now() && !('sports' in categories[]->title)]|order(publishedAt desc)|{
      title,
      _id,
      slug,
      publishedAt,
      miniBody,
      "categories": categories[]->title,
      }
    `)
  return {
    props: {
      posts,
    },
    revalidate: 10,
  }
}

export default Index
