import Image from "next/image";
import Link from "next/link";
import { fetchProduct, getFullImageUrl } from "../../../utils/api";
import { ProductResponse } from "../../../types";

export const dynamic = 'force-dynamic'

export async function generateMetadata({
  params


}: {params: {slug: string;};}) {
  try {
    const productResponse: ProductResponse = await fetchProduct(params.slug);
    const product = productResponse.data;

    return {
      title: `${product.name} — Granit173`,
      description: product.description
    };
  } catch (error) {
    return {
      title: "Товар не найден — Granit173"
    };
  }
}

const formatter = new Intl.NumberFormat('en-US', {
  style: 'decimal',
});

export default async function ProductPage({
  params


}: {params: {slug: string;};}) {
  try {
    const productResponse: ProductResponse = await fetchProduct(params.slug);
    const product = productResponse.data;

    return (
      <div className="container-safe py-12 md:py-16" data-oid="product-page">
        {/* Breadcrumb */}
        <nav className="mb-8" data-oid="breadcrumb">
          <div
            className="flex items-center space-x-2 text-sm text-zinc-600"
            data-oid="rip9wcr">

            <Link
              href="/catalog"
              className="hover:text-zinc-900"
              data-oid="f3fksfs">

              Каталог
            </Link>
            <span data-oid="6n:rf:s">→</span>
            <span className="text-zinc-900" data-oid="c8tlkl5">
              {product.name}
            </span>
          </div>
        </nav>

        {/* Product Details */}
        <div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12"
          data-oid="product-details">

          {/* Product Image */}
          <div
            className="relative aspect-square rounded-lg overflow-hidden"
            data-oid="qa6mc2d">

            <img
              src={getFullImageUrl(product.imageUrl)}
              alt={product.name}
              fill
              className="object-cover"
              priority
              data-oid="_..9f2f" />

          </div>

          {/* Product Info */}
          <div className="flex flex-col justify-center" data-oid="bkk61ke">
            <h1
              className="text-3xl font-semibold tracking-tight mb-6"
              data-oid="1p5txet">

              {product.name}
            </h1>
            {
              product.size &&
              <span className="text-2xl font-semibold tracking-tight mb-6">
                Размер: {product.size}
              </span>
            }


            <div
              className="prose prose-zinc max-w-none mb-8"
              data-oid="zmkd1v5">

              <p
                className="text-lg leading-relaxed text-zinc-700"
                data-oid="qxg9tzv">

                {product.description}
              </p>
              {
                product.price &&
                  <div
                      className="text-lg font-semibold leading-relaxed text-zinc-800"
                      data-oid="qxg9tzv">

                    {formatter.format(product.price)}  ₽
                  </div>
              }

            </div>

            {/* Contact Section */}
            <div className="bg-zinc-100 rounded-lg p-6" data-oid="ue5x3cz">
              <h3 className="font-semibold mb-4" data-oid="madl7ct">
                Заказать консультацию
              </h3>
              <p className="text-sm text-zinc-600 mb-4" data-oid="w4v35-8">
                Свяжитесь с нами для уточнения деталей, размеров и стоимости
                изделия.
              </p>

              <div className="space-y-3" data-oid=":sa98.l">
                <a
                  href="tel:+79278051100"
                  className="flex items-center justify-center w-full bg-zinc-900 text-white px-6 py-3 rounded-lg hover:bg-zinc-800 transition-colors"
                  data-oid="h:o-7ju">

                  Позвонить: 8 927 805-11-00
                </a>

                <a
                  href="tel:+79279897000"
                  className="flex items-center justify-center w-full border border-zinc-300 px-6 py-3 rounded-lg hover:bg-zinc-50 transition-colors"
                  data-oid="_f:mkrl">

                  Альтернативный: 8 927 989-70-00
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Information */}
        <div
          className="mt-16 bg-zinc-50 rounded-lg p-8"
          data-oid="product-info">

          <h3 className="text-xl font-semibold mb-6" data-oid="swuqb98">
            Дополнительная информация
          </h3>

          <div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            data-oid="xppr:y-">

            <div data-oid="4u.:.o2">
              <h4 className="font-medium mb-3" data-oid="ag:n6:8">
                Услуги
              </h4>
              <ul
                className="space-y-2 text-sm text-zinc-600"
                data-oid="x5f8cu_">

                <li data-oid="ksbs5t9">
                  • Изготовление по индивидуальным размерам
                </li>
                <li data-oid="i39l-fx">• Гравировка портретов и надписей</li>
                <li data-oid="fli6o.y">• Доставка и установка</li>
                <li data-oid="j65tarw">• Благоустройство места захоронения</li>
              </ul>
            </div>

          </div>
        </div>
      </div>);

  } catch (error) {
    return (
      <div className="container-safe py-12 md:py-16" data-oid="product-error">
        <div className="text-center" data-oid="kwl1:ac">
          <h1
            className="text-3xl font-semibold tracking-tight mb-4"
            data-oid="q5-q:fj">

            Товар не найден
          </h1>
          <p className="text-zinc-700 mb-8" data-oid="6xt1r7:">
            Запрашиваемый товар не существует или временно недоступен.
          </p>
          <Link
            href="/catalog"
            className="inline-block bg-zinc-900 text-white px-6 py-3 rounded-lg hover:bg-zinc-800 transition-colors"
            data-oid="c2pc:ri">

            Вернуться в каталог
          </Link>
        </div>
      </div>);

  }
}
