const API_BASE_URL = "http://localhost:3001";
const REMOVE_ME = "https://box.granit173.ru";

export function getFullImageUrl(imageUrl: string): string {
  if (imageUrl.startsWith("http")) {
    return imageUrl;
  }
  return `${REMOVE_ME}${imageUrl}`;
}

export async function fetchCategories() {
  const response = await fetch(`${API_BASE_URL}/api/categories`);
  if (!response.ok) {
    throw new Error("Failed to fetch categories");
  }
  return response.json();
}

export async function fetchCategory(slug: string) {
  const response = await fetch(`${API_BASE_URL}/api/categories/${slug}`);
  if (!response.ok) {
    throw new Error("Failed to fetch category");
  }
  return response.json();
}

export async function fetchCategoryProducts(slug: string) {
  const response = await fetch(
    `${API_BASE_URL}/api/categories/${slug}/products`
  );
  if (!response.ok) {
    throw new Error("Failed to fetch category products");
  }
  return response.json();
}

export async function fetchProduct(slug: string) {
  const response = await fetch(`${API_BASE_URL}/api/products/${slug}`);
  if (!response.ok) {
    throw new Error("Failed to fetch product");
  }
  return response.json();
}