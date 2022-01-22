type Genre =
  | 'アクション映画'
  | 'ホラー映画'
  | 'ファンタジー映画'
  | 'アドベンチャー映画'
  | 'ミステリー映画'
  | '恋愛映画'
  | 'その他';

type Movie = {
  id: number;
  userId: string;
  title: string;
  overview: string;
  genre: Genre;
  youtubeTitleId: string;
  grinningScore: number;
  userName: string;
  createdAt: string;
};

export type { Movie, Genre };
