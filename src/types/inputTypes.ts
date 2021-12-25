type CreateUserInput = {
  username?: string;
  email?: string;
  confirmEmail?: string;
  password?: string;
  confirmPassword?: string;
};

type LogInUserInput = { email?: string; password?: string };

type CreateMovieInput = {
  id?: string;
  title?: string;
  img?: string;
  description?: string;
  username?: string;
  youtubeUrl?: string;
  genre?: string;
};

export type { CreateMovieInput, CreateUserInput, LogInUserInput };
