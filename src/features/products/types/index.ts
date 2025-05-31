export type ProductType = {
  id: string;
  image: string;
  name: string;
  price: number;
  stock_status: 'In Stock' | 'Out of Stock' | string;
  rating: number;
  description: string;
  category: string;
};

export type ProductsType = ProductType[];
