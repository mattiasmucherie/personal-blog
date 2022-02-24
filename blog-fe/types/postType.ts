export interface PostType {
  authorImage: AuthorImage
  body: string
  categories: string[]
  mainImage: MainImagePost
  name: string
  title: string
  publishedAt: Date
}

export interface AuthorImage {
  _type: string
  asset: Asset
  crop: Crop
  hotspot: Hotspot
}

export interface Asset {
  _ref: string
  _type: string
}

export interface Crop {
  _type: string
  bottom: number
  left: number
  right: number
  top: number
}

export interface Hotspot {
  _type: string
  height: number
  width: number
  x: number
  y: number
}

export interface MainImagePost {
  _type: string
  asset: Asset
}
