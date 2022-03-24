export interface GeneralPost {
  _id: string
  categories: string[]
  miniBody: string
  publishedAt: string
  slug: Slug
  title: string
}

export interface Slug {
  _type: string
  current: string
}
