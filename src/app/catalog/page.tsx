import Image from "next/image";

const categories = [
{
  title: "Одинарные памятники",
  desc: "Классические варианты для одного захоронения",
  img: "/catalog/single.jpg"
},
{
  title: "Двойные памятники",
  desc: "Комплексы для семейных захоронений",
  img: "/catalog/double.jpg"
},
{
  title: "Эксклюзивные",
  desc: "Индивидуальные формы и дизайн",
  img: "/catalog/exclusive.jpg"
},
{
  title: "Комплексные решения",
  desc: "Плитка, ограды, столики и благоустройство",
  img: "/catalog/complex.jpg"
}];


export const metadata = {
  title: "Каталог памятников — Granit173"
};

export default function CatalogPage() {
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

        {categories.map((c) =>
        <div
          key={c.title}
          className="card overflow-hidden"
          data-oid="-zy9ho2">

            <div className="relative aspect-[4/3]" data-oid="1mdvvn_">
              <Image
              src={c.img}
              alt={c.title}
              fill
              className="object-cover"
              data-oid="r25v1ep" />

            </div>
            <div className="p-4" data-oid="mcq.b1.">
              <div className="font-medium" data-oid="vpke0_v">
                {c.title}
              </div>
              <div className="mt-1 text-sm text-zinc-600" data-oid="i:u-12i">
                {c.desc}
              </div>
            </div>
          </div>
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