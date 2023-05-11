export interface IProduct {
  id: number;
  category?: string;
  image?: string;
  price?: string;
  title?: string;
  rating?: { count?: number; rate: number };
}
