export interface IMarketplaceSeller {
  _id: string;
  name: string;
  dp?: string;
  responsive?: boolean;
  joinedYear?: number;
}

export interface IMarketplaceListing {
  _id: string;
  price: number;
  isFree?: boolean;
  title: string;
  location: string;
  image: string;
  images?: string[];
  category: string;
  condition?: string;
  description?: string;
  listedAgo?: string;
  seller?: IMarketplaceSeller;
}
