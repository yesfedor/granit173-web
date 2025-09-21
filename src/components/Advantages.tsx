const items = [
{
  title: "Собственное производство",
  desc: "Контроль качества на всех этапах — от выбора камня до монтажа"
},
{ title: "Точные сроки", desc: "Согласуем сроки и соблюдаем их" },
{ title: "Скидки", desc: "Выгодные предложения" },
];


export default function Advantages() {
  return (
    <section className="py-12 md:py-16" data-oid="lu1no8.">
      <div className="container-safe" data-oid="be:k_ty">
        <div className="grid gap-4 md:grid-cols-3" data-oid="tcax0tj">
          {items.map((i) =>
          <div key={i.title} className="card p-5" data-oid="vp17vmo">
              <div className="font-medium" data-oid="hx8hjck">
                {i.title}
              </div>
              <div className="mt-1 text-sm text-zinc-600" data-oid="e4httc4">
                {i.desc}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>);

}
