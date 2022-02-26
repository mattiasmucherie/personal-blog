import groq from 'groq'
import client from '../../client'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { ParsedUrlQuery } from 'querystring'
import { PostType } from '../../types/postType'
import BlogPost from '../../components/BlogPost/BlogPost'

interface Params extends ParsedUrlQuery {
  slug: string
}

type PostProps = {
  post: PostType
}
const Post: NextPage<PostProps> = ({ post }) => {
  return <BlogPost post={post} />
}

const query = groq`*[_type == "post" && slug.current == $slug][0]{
  title,
  "name": author->name,
  "categories": categories[]->title,
  "authorImage": author->image,
  body,
  mainImage,
  publishedAt
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
