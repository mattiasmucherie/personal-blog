import groq from 'groq'
import client from '../../client'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { ParsedUrlQuery } from 'querystring'
import { PostType } from '../../types/postType'
import BlogPost from '../../components/BlogPost/BlogPost'
import Head from 'next/head'

interface Params extends ParsedUrlQuery {
  slug: string
}

type PostProps = {
  post: PostType
}
const Post: NextPage<PostProps> = ({ post }) => {
  return (
    <>
      <Head>
        <title>{post.title}</title>
        <meta charSet="utf-8" />
        <meta name="description" content={post.miniBody} />
      </Head>
      <BlogPost post={post} />
    </>
  )
}

const query = groq`*[_type == "post" && slug.current == $slug][0]{
  title,
  "name": author->name,
  "categories": categories[]->title,
  "authorImage": author->image,
  body,
  mainImage,
  publishedAt,
  miniBody
}`

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  const paths = await client.fetch<string[]>(
    groq`*[_type == "post" && defined(slug.current)][].slug.current`
  )
  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: 'blocking',
  }
}

export const getStaticProps: GetStaticProps<PostProps, Params> = async (
  context
) => {
  const { slug = '' } = context.params!
  const post = await client.fetch(query, { slug })
  return {
    props: {
      post,
    },
    revalidate: 10,
  }
}

export default Post
