type CreateUserInput = {
  username: string
  email: string
  confirmEmail: string
  password: string
  confirmPassword: string
}

type LogInUserInput = { email: string; password: string }

type CreateMovieInput = {
  title: string
  overview: string
  youtubeLinkUrl: string
  genre: string
}

export type { CreateMovieInput, CreateUserInput, LogInUserInput }
