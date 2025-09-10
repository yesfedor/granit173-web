import Image from "next/image";

const works = [
{ img: "/works/1.jpg", title: "Памятник из гранита G603" },
{ img: "/works/2.jpg", title: "Двойной комплекс" },
{ img: "/works/3.jpg", title: "Индивидуальный заказ" },
{ img: "/works/4.jpg", title: "Классический вариант" },
{ img: "/works/5.jpg", title: "Полный комплекс с оградой" },
{ img: "/works/6.jpg", title: "Портретная гравировка" }];


export const metadata = {
  title: "Наши работы — Granit173"
};

export default function WorksPage() {
  return (
    <div className="container-safe py-12 md:py-16" data-oid="3ynvv9d">
      <h1 className="text-3xl font-semibold tracking-tight" data-oid="_fjmk31">
        Наши работы
      </h1>
      <p className="mt-2 text-zinc-700" data-oid="427y4m4">
        Фотографии выполненных проектов. Больше примеров покажем при встрече.
      </p>

      <div
        className="mt-8 grid gap-4 sm:grid-cols-2 md:grid-cols-3"
        data-oid="l1tmw4.">

        {works.map((w, idx) =>
        <figure key={idx} className="card overflow-hidden" data-oid="_710fyy">
            <div className="relative aspect-[4/5]" data-oid="h:uj_uu">
              <Image
              src={w.img}
              alt={w.title}
              fill
              className="object-cover"
              data-oid=":22qlmn" />

            </div>
            <figcaption
            className="p-3 text-sm text-zinc-700"
            data-oid="6tpuvil">

              {w.title}
            </figcaption>
          </figure>
        )}
      </div>
    </div>);

}