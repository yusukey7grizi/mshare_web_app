type CreateUserInput = { username?: string; email?: string }

type CreateMovieInput = {
  id?: string
  title?: string
  img?: string
  description?: string
  username?: string
  youtubeUrl?: string
}

export type { CreateMovieInput, CreateUserInput }
