import groq from 'groq'
import client from '../client'
import { GeneralPost } from '../types/generalPost'
import { NextPage } from 'next'
import BlogPosts from '../components/BlogPosts/BlogPosts'
import Head from 'next/head'

type IndexProps = {
  posts: GeneralPost[]
}
const Index: NextPage<IndexProps> = ({ posts }) => {
  return (
    <>
      <Head>
        <title>Mattias Blog</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Mattias Mucherie blog" />
      </Head>
      <main>
        <h2>My thought and tips and tricks</h2>
        <BlogPosts posts={posts} />
      </main>
    </>
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
