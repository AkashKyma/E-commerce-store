export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  stock: number;
  featured: boolean;
};

export type CartLine = {
  productId: string;
  quantity: number;
};

export type CartProduct = Product & {
  quantity: number;
};

export type SortOption = 'newest' | 'price-asc' | 'price-desc';
