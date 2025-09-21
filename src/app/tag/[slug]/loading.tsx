export default function Loading() {
  return (
    <div className="container-safe py-12 md:py-16" data-oid="6h0mmdf">
      <div className="animate-pulse" data-oid="pm04v_5">
        {/* Category Header Skeleton */}
        <div className="mb-8" data-oid="ymmeb.d">
          <div
            className="flex flex-col lg:flex-row gap-8 items-start"
            data-oid="tx9hied">

            <div
              className="w-full lg:w-80 aspect-[4/3] bg-gray-200 rounded-lg"
              data-oid="6e3a::m">
            </div>
            <div className="flex-1" data-oid="5.f8f5.">
              <div
                className="h-8 bg-gray-200 rounded w-64 mb-4"
                data-oid="cdsuza2">
              </div>
              <div
                className="h-5 bg-gray-200 rounded w-full mb-2"
                data-oid="_:irc:w">
              </div>
              <div
                className="h-5 bg-gray-200 rounded w-3/4"
                data-oid=":n1mf1y">
              </div>
            </div>
          </div>
        </div>

        {/* Products Grid Skeleton */}
        <div className="mb-8" data-oid="pv8l62w">
          <div
            className="h-7 bg-gray-200 rounded w-48 mb-6"
            data-oid="3ud37xy">
          </div>

          <div
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
            data-oid="hzq4tjx">

            {[...Array(8)].map((_, i) =>
            <div key={i} className="card overflow-hidden" data-oid="36_.rn6">
                <div
                className="aspect-[4/3] bg-gray-200"
                data-oid=":df:c.v">
              </div>
                <div className="p-4" data-oid="566x4:w">
                  <div
                  className="h-5 bg-gray-200 rounded w-3/4 mb-2"
                  data-oid="az.a27k">
                </div>
                  <div
                  className="h-4 bg-gray-200 rounded w-full mb-1"
                  data-oid="e26mur3">
                </div>
                  <div
                  className="h-4 bg-gray-200 rounded w-2/3"
                  data-oid="mugj1ax">
                </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>);

}