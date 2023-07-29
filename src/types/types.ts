export interface jokeType {
  id?: number
  title?: string
  body?: string
  author?: string
  views?: number | string
  createdAt?: number | string
}

export interface JokeToRender extends jokeType {
  viewsColor?: string
}
