import Image from "next/image";
import Link from "next/link";
import {
  fetchCategory,
  fetchCategoryProducts,
  getFullImageUrl } from
"../../../utils/api";
import { CategoryResponse, CategoryProductsResponse } from "../../../types";

export const dynamic = 'force-dynamic'

export async function generateMetadata({
  params


}: {params: {slug: string;};}) {
  try {
    const categoryResponse: CategoryResponse = await fetchCategory(params.slug);
    const category = categoryResponse.data;

    return {
      title: `${category.name} — Granit173`,
      description: category.description
    };
  } catch (error) {
    return {
      title: "Категория не найдена — Granit173"
    };
  }
}

export default async function CategoryPage({
  params


}: {params: {slug: string;};}) {
  try {
    const [categoryResponse, productsResponse]: [
      CategoryResponse,
      CategoryProductsResponse] =
    await Promise.all([
    fetchCategory(params.slug),
    fetchCategoryProducts(params.slug)]
    );

    const category = categoryResponse.data;
    const { products } = productsResponse.data;

    return (
      <div className="container-safe py-12 md:py-16" data-oid="category-page">
        {/* Category Header */}
        <div className="mb-8" data-oid="category-header">
          <div
            className="flex flex-col lg:flex-row gap-8 items-start"
            data-oid="bqttr7h">

            <div
              className="relative w-full lg:w-80 aspect-[4/3] rounded-lg overflow-hidden"
              data-oid="vnzit4e">

              <img
                src={getFullImageUrl(category.imageUrl)}
                alt={category.name}
                fill
                className="object-cover"
                priority
                data-oid="eshfuo0" />

            </div>
            <div className="flex-1" data-oid="uxac12.">
              <h1
                className="text-3xl font-semibold tracking-tight mb-4"
                data-oid="ow608l_">

                {category.name}
              </h1>
              <p
                className="text-zinc-700 text-lg leading-relaxed"
                data-oid="kmp8_t5">

                {category.description}
              </p>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="mb-8" data-oid="4j5o7n0">
          <h2 className="text-2xl font-semibold mb-6" data-oid="8ij-i1p">
            Товары в категории
          </h2>

          {products.length > 0 ?
          <div
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
            data-oid="101bx.g">

              {products.map((product) =>
            <Link
              key={product.id}
              href={`/product/${product.slug}`}
              className="card overflow-hidden hover:shadow-md transition-shadow"
              data-oid=".zlaa-l">

                  <div className="relative aspect-[4/3]" data-oid="udaviak">
                    <img
                  src={getFullImageUrl(product.imageUrl)}
                  alt={product.name}
                  className="object-cover"
                  data-oid="hh2r-tz" />

                  </div>
                  <div className="p-4" data-oid="ad:_7iv">
                    <h3 className="font-medium mb-2" data-oid="hq7vv6m">
                      {product.name}
                    </h3>
                    <p className="text-sm text-zinc-600" data-oid="punvc_t">
                      {product.description.length > 100 ?
                  `${product.description.substring(0, 100)}...` :
                  product.description}
                    </p>
                  </div>
                </Link>
            )}
            </div> :

          <div className="text-center py-12" data-oid="7eneq0k">
              <p className="text-zinc-600 text-lg" data-oid=":y08-e9">
                В этой категории пока нет товаров
              </p>
            </div>
          }
        </div>

        {/* Contact Info */}
        <div className="mt-12 text-sm text-zinc-600" data-oid="q_zd-vn">
          Не нашли нужную модель? Позвоните нам:{" "}
          <a
            className="font-medium hover:text-zinc-900"
            href="tel:+79278287000"
            data-oid="4p71qdj">

            8 927 828-70-00
          </a>
        </div>
      </div>);

  } catch (error) {
    return (
      <div className="container-safe py-12 md:py-16" data-oid="category-error">
        <div className="text-center" data-oid="ffe_psv">
          <h1
            className="text-3xl font-semibold tracking-tight mb-4"
            data-oid="r4oo3-9">

            Категория не найдена
          </h1>
          <p className="text-zinc-700 mb-8" data-oid="s_bcod9">
            Запрашиваемая категория не существует или временно недоступна.
          </p>
          <Link
            href="/catalog"
            className="inline-block bg-zinc-900 text-white px-6 py-3 rounded-lg hover:bg-zinc-800 transition-colors"
            data-oid="wkatfag">

            Вернуться в каталог
          </Link>
        </div>
      </div>);

  }
}
