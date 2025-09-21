import Image from "next/image";
import Link from "next/link";
import { fetchCategories } from "../../utils/api";
import { getFullImageUrl } from "../../utils/api";
import { CategoriesResponse } from "../../types";

export const metadata = {
  title: "Каталог памятников — Granit173"
};

export default async function CatalogPage() {
  const categoriesResponse: CategoriesResponse = await fetchCategories();
  const categories = categoriesResponse.data;
  return (
    <div className="container-safe py-12 md:py-16" data-oid="pykt5su">
      <h1 className="text-3xl font-semibold tracking-tight" data-oid="6pv5vwm">
        Каталог
      </h1>
      <p className="mt-2 text-zinc-700" data-oid="ba3w3pn">
        Выберите категорию, чтобы посмотреть примеры моделей и варианты
        исполнения.
      </p>

      <div
        className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        data-oid="c--pm6t">

        {categories.map((category) =>
        <Link
          key={category.id}
          href={`/tag/${category.slug}`}
          className="card overflow-hidden hover:shadow-md transition-shadow"
          data-oid="-zy9ho2">

            <div className="relative aspect-[4/3]" data-oid="1mdvvn_">
              <img
              src={getFullImageUrl(category.imageUrl)}
              alt={category.name}
              fill
              className="object-cover"
              data-oid="r25v1ep" />

            </div>
            <div className="p-4" data-oid="mcq.b1.">
              <div className="font-medium" data-oid="vpke0_v">
                {category.name}
              </div>
              <div className="mt-1 text-sm text-zinc-600" data-oid="i:u-12i">
                {category.description}
              </div>
            </div>
          </Link>
        )}
      </div>

      <div className="mt-10 text-sm text-zinc-600" data-oid=":lmzg4l">
        Не нашли нужную модель? Позвоните нам:{" "}
        <a
          className="font-medium hover:text-zinc-900"
          href="tel:+79278051100"
          data-oid="qhn2ldx">

          8 927 805-11-00
        </a>
      </div>
    </div>);

}
