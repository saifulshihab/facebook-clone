export type TGameCategory =
  | 'Board'
  | 'Card'
  | 'Sport'
  | 'Simulation'
  | 'Arcade'
  | 'Merge'
  | 'Battle'
  | 'Builder'
  | 'Action'
  | 'Adventure'
  | 'Casino'
  | 'Match'
  | 'Puzzle'
  | 'Racing'
  | 'Strategy'
  | 'Word';

export interface IGame {
  _id: string;
  title: string;
  image: string;
  category: TGameCategory;
  players?: { _id: string; dp: string }[];
}

export interface IGameEvent {
  _id: string;
  gameTitle: string;
  gameIcon: string;
  eventImage: string;
  title: string;
  description: string;
  endsInDays: number;
}
