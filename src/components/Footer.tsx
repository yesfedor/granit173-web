export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-white" data-oid="tc-k0j1">
      <div
        className="container-safe py-8 grid gap-6 md:grid-cols-[1fr_1fr_230px]"
        data-oid="l-uhjyt">

        <div data-oid="9yn_3q5">
          <div className="font-semibold" data-oid="to1:c:b">
            Гравюрная мастерская "Вечная Память"
          </div>
          <p className="mt-2 text-sm text-zinc-600" data-oid="407ck14">
            Памятники из мрамора и гранита в Ульяновске. Изготовление, установка,
            гравировка.
          </p>
          <p className="mt-2 text-sm font-semibold text-zinc-600" data-oid="407ck14">
            ИП Грехов В.И
          </p>
        </div>
        <div className="text-sm" data-oid="klyrc.c">
          <div className="font-medium mb-2" data-oid="rrcj492">
            Контакты
          </div>
          <ul className="space-y-1 text-zinc-700" data-oid="s3h.ltr">
            <li data-oid="77deyqh">
              Тел.:{" "}
              <a
                className="hover:text-zinc-900"
                href="tel:+79278051100"
                data-oid="p7gzqfy">
                8 927 805-11-00
              </a>
              <span className="ms-2">
                Ул. Осиновая 2 (9:00-16:00)
              </span>
            </li>
            <li data-oid="2f1nidm">
              Тел.:{" "}
              <a
                className="hover:text-zinc-900"
                href="tel:+79279897000"
                data-oid="zgjqsj2">

                8 927 989-70-00
              </a>
              <span className="ms-2">
                Пр-кт Ульяновский 10 (10:00-18:00)
              </span>
            </li>
          </ul>
        </div>
        <div className="text-xs text-zinc-500 md:text-right" data-oid="2dz.ob:">
          © {new Date().getFullYear()} Granit173. Все права защищены.
        </div>
      </div>
    </footer>);

}
