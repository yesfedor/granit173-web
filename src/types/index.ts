export interface User {
  id: number;
  telegramId: number;
  role: string;
}

export interface Category {
  id: number;
  slug: string;
  name: string;
  description: string;
  imageUrl: string;
}

export interface Product {
  id: number;
  slug: string;
  name: string;
  description: string;
  imageUrl: string;
  categoryId: number;
}

export interface ApiResponse<T> {
  success: boolean;
  data: T;
}

export interface CategoriesResponse {
  success: boolean;
  data: Category[];
}

export interface CategoryResponse {
  success: boolean;
  data: Category;
}

export interface CategoryProductsResponse {
  success: boolean;
  data: {
    category: {
      id: number;
      name: string;
      imageUrl: string;
    };
    products: Product[];
  };
}

export interface ProductResponse {
  success: boolean;
  data: Product;
}