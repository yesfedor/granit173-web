"use client";

import Hero from "../components/Hero";
import Advantages from "../components/Advantages";
import Contacts from "../components/Contacts";

export default function Page() {
  return (
    <div className="w-full min-h-screen bg-white" data-oid="8qu3081">
      <Hero data-oid="i1rxy0n" />
      <Advantages data-oid="k4txw8x" />
      <section className="py-12 md:py-16" data-oid="t23ftkt">
        <div
          className="container-safe grid md:grid-cols-3 gap-6 items-start"
          data-oid="d89u2e6">

          <div className="md:col-span-2" data-oid="x5abhb7">
            <h2
              className="text-2xl font-semibold tracking-tight"
              data-oid="-bgu3ne">

              Услуги
            </h2>
            <ul className="mt-4 grid gap-3" data-oid=":-t_evw">
              <li className="card p-4" data-oid=":kn6pjh">
                Изготовление памятников по каталогу и индивидуальным проектам
              </li>
              <li className="card p-4" data-oid="u7ftnbo">
                Изготовление оград
              </li>
              <li className="card p-4" data-oid="u7ftnbo">
                Гравировка и художественные портреты
              </li>
              <li className="card p-4" data-oid="3:y19._">
                Монтаж, реконструкция, благоустройство
              </li>
            </ul>
          </div>
          <div className="card p-5" data-oid="m-as9._">
            <div className="font-medium" data-oid=".2_h0yc">
              Быстрый контакт
            </div>
            <div className="mt-2 text-sm text-zinc-600" data-oid="zj.j4cn">
              Задайте вопрос специалисту
            </div>
            <a
              href="tel:+79278287000"
              className="btn btn-primary mt-4 w-full"
              data-oid="h1u0849">

              Позвонить
            </a>
            <a
              href="mailto:granit.173@mail.ru"
              className="btn btn-outline mt-2 w-full"
              data-oid="rz02ur5">

              Написать на Email
            </a>
          </div>
        </div>
      </section>
      <Contacts data-oid="sxn1:qm" />
    </div>);

}