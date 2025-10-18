import Link from "next/link";
import HeroStone from '@/app/assets/hero-stone.jpg'

export default function Hero() {
  return (
    <section className="relative overflow-hidden" data-oid="yv5kr43">

      <div
        className="container-safe py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center"
        data-oid=":a-htcy">

        <div data-oid="rzcjlwv">
          <div className="text-5xl font-bold mb-4">
            Гравюрная мастерская <br/> "Вечная память"
          </div>
          <span className="badge" data-oid="s4hc6b5">
            Ульяновск
          </span>
          <h1
            className="mt-4 text-3xl md:text-5xl font-semibold tracking-tight"
            data-oid="kjl0aju">
            Памятники из мрамора гранита
            <span
              className="block text-zinc-600 text-xl md:text-2xl mt-3"
              data-oid="26uh1hr">

              изготовление, гравировка и монтаж
            </span>
          </h1>
          <p
            className="mt-5 text-zinc-700 text-base md:text-lg max-w-prose"
            data-oid="jcpqxkw">

            Изготавливаем памятники любой сложности. Помощь в проектировании,
            выборе материала, гравировке и установке. Собственное производство.
          </p>
          <div className="mt-6 flex flex-wrap gap-3" data-oid="_5l8t3a">
            <Link
              href="/catalog"
              className="btn btn-primary"
              data-oid="4z.nxk_">

              Каталог
            </Link>
            <a
              href="tel:+79278051100"
              className="btn btn-outline"
              data-oid="m9npgh3">

              Позвонить
            </a>
          </div>
          <ul
            className="mt-6 grid md:grid-cols-2 gap-2 text-sm text-zinc-700"
            data-oid="sctz9p9">

            <li data-oid="3jl-rhg">• Индивидуальные проекты</li>
            <li data-oid="xh9:dmh">• Монтаж под ключ</li>
            <li data-oid="_bxxy21">• Гарантия на работы</li>
            <li data-oid="3c146rs">• Скидки</li>
          </ul>
        </div>
        <div className="relative" data-oid="z27ke.i">
          <div
            className="aspect-[4/5] rounded-2xl bg-[url('/hero-stone.jpg')] bg-cover bg-center ring-1 ring-zinc-200 shadow-sm"
            data-oid="xu:ymki" />
        </div>
      </div>
    </section>);

}
