"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const nav = [
{ href: "/", label: "Главная" },
{ href: "/catalog", label: "Каталог" },
];


export default function Navbar() {
  const pathname = usePathname();

  return (
    <header
      className="sticky top-0 z-40 w-full bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-zinc-200"
      data-oid="cg0n_83">

      <div
        className="container-safe flex h-16 items-center justify-between"
        data-oid="-xhjkqk">

        <Link
          href="/"
          className="flex items-center gap-2 font-semibold tracking-tight"
          data-oid="oq3e1dg">

          <div
            className="h-7 w-7 rounded-sm bg-zinc-900 text-white grid place-items-center text-xs"
            data-oid="z9ikeyu">

            G
          </div>
          <span data-oid="pjcrrun">Вечная память</span>
        </Link>

        <nav
          className="hidden md:flex items-center gap-6 text-sm"
          data-oid="ytzl008">

          {nav.map((i) =>
          <Link
            key={i.href}
            href={i.href}
            className={`hover:text-zinc-900 transition-colors ${pathname === i.href ? "text-zinc-900" : "text-zinc-600"}`}
            data-oid="49htrob">

              {i.label}
            </Link>
          )}
        </nav>

        <div className="flex items-center gap-3" data-oid="i2n6ufp">
          <a
            href="tel:+79278051100"
            className="hidden sm:inline text-sm text-zinc-700 hover:text-zinc-900"
            data-oid="ajv_4py">

            8 927 805-11-00
          </a>
          <a
            href="tel:+79279897000"
            className="hidden lg:inline text-sm text-zinc-700 hover:text-zinc-900"
            data-oid="_ya:07.">

            8 927 989-70-00
          </a>
          <Link
            href="/catalog"
            className="btn btn-primary text-sm"
            data-oid="yzc:o5s">

            Каталог
          </Link>
        </div>
      </div>
    </header>);

}
