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
      <h2>Mostly training logs but more will come</h2>
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
    revalidate: 10,
  }
}

export default Index
