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
      <h1>My blog filled with random posts and my training schedule</h1>
      <BlogPosts posts={posts} />
    </main>
  )
}

export const getStaticProps = async () => {
  const posts = await client.fetch<GeneralPost[]>(groq`
      *[_type == "post" && publishedAt < now()]|order(publishedAt desc)|{
      title,
      _id,
      slug,
      publishedAt,
      miniBody,
      "categories": categories[]->title
      }
    `)
  return {
    props: {
      posts,
    },
  }
}

export default Index
