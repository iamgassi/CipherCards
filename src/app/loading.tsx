// app/loading.tsx
export default function Loading() {
  return (
    <main className="min-h-screen from-slate-100 via-slate-50 to-slate-200 px-4 py-10">
      <div className="mx-auto max-w-6xl">
        {/* Page header */}
        <header className="mb-6 text-center">
          <div className="mx-auto mb-2 h-6 w-48 animate-pulse rounded-full bg-gray-300" />
          <div className="mx-auto h-4 w-72 animate-pulse rounded-full bg-gray-200" />
        </header>

        <div className="mx-auto flex max-w-6xl flex-col gap-4">
          {/* Sticky header skeleton */}
          <div className="sticky top-0 z-10 bg-slate-50/90 pb-3 pt-2 backdrop-blur">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div className="h-6 w-32 animate-pulse rounded-full bg-gray-200" />
              <div className="h-9 w-full animate-pulse rounded-full bg-gray-200 sm:w-72" />
            </div>
          </div>

          {/* Grid skeleton */}
          <div className="grid flex-1 grid-cols-1 gap-6 pb-4 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="flex justify-center"
              >
                <div className="w-full max-w-xs rounded-2xl border border-gray-200 bg-white shadow-sm">
                  <div className="h-56 w-full animate-pulse bg-gray-200" />

                  <div className="space-y-2 px-4 py-3">
                    <div className="h-4 w-3/4 animate-pulse rounded-full bg-gray-200" />
                    <div className="flex items-center gap-2">
                      <div className="h-4 w-16 animate-pulse rounded-full bg-gray-200" />
                      <div className="h-4 w-10 animate-pulse rounded-full bg-gray-200" />
                      <div className="h-4 w-12 animate-pulse rounded-full bg-gray-200" />
                    </div>
                    <div className="h-3 w-full animate-pulse rounded-full bg-gray-200" />
                    <div className="h-3 w-5/6 animate-pulse rounded-full bg-gray-200" />
                    <div className="mt-3 h-8 w-full animate-pulse rounded-full bg-gray-200" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="sticky bottom-0 z-10 bg-slate-50/90 pb-3 pt-2 backdrop-blur">
            <div className="flex items-center justify-center gap-3">
              <div className="h-8 w-16 animate-pulse rounded-full bg-gray-200" />
              <div className="flex gap-2">
                {Array.from({ length: 3 }).map((_, i) => (
                  <div
                    key={i}
                    className="h-8 w-8 animate-pulse rounded-full bg-gray-200"
                  />
                ))}
              </div>
              <div className="h-8 w-16 animate-pulse rounded-full bg-gray-200" />
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
