type Genre =
  | 'アクション映画'
  | 'ホラー映画'
  | 'ファンタジー映画'
  | 'アドベンチャー映画'
  | 'ミステリー映画'
  | '恋愛映画'
  | 'その他';

type Movie = {
  movieId: string;
  userId: string;
  title: string;
  overview: string;
  genre: Genre;
  grinningScore: number;
  username: string;
  createdAt: string;
};

export type { Movie, Genre };
