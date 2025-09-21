export default function Loading() {
  return (
    <div className="container-safe py-12 md:py-16" data-oid="gw0mm3w">
      <div className="animate-pulse" data-oid="6ify20g">
        <div
          className="h-8 bg-gray-200 rounded w-48 mb-2"
          data-oid="h-arlph">
        </div>
        <div
          className="h-5 bg-gray-200 rounded w-96 mb-8"
          data-oid="emnhf_q">
        </div>

        <div
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          data-oid="e36bx-h">

          {[...Array(6)].map((_, i) =>
          <div key={i} className="card overflow-hidden" data-oid="ay9fwzz">
              <div
              className="aspect-[4/3] bg-gray-200"
              data-oid="mxu3bco">
            </div>
              <div className="p-4" data-oid="x.l9c62">
                <div
                className="h-5 bg-gray-200 rounded w-3/4 mb-2"
                data-oid="p-khsra">
              </div>
                <div
                className="h-4 bg-gray-200 rounded w-full"
                data-oid="zd-wk5f">
              </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>);

}