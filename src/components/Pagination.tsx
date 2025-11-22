type PaginationProps = {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
}

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) {
  if (totalPages <= 1) return null

  const goToPage = (page: number) => {
    if (page < 1 || page > totalPages) return
    onPageChange(page)
  }

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1)

  return (
    <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
      <button
        onClick={() => goToPage(currentPage - 1)}
        disabled={currentPage === 1}
        className={`px-3 py-1 text-sm font-bold rounded-full border ${
          currentPage === 1
            ? "cursor-not-allowed border-foreground/20 text-foreground/40"
            : "border-foreground hover:bg-foreground hover:text-background"
        }`}
      >
        Prev
      </button>

      <div className="flex items-center gap-1 text-sm">
        {pages.map((p) => (
          <button
            key={p}
            onClick={() => goToPage(p)}
            className={`h-8 w-8 rounded-full text-sm ${
              p === currentPage
                ? "bg-foreground text-background hover:border"
                : "text-foreground hover:bg-foreground hover:text-background"
            }`}
          >
            {p}
          </button>
        ))}
      </div>

      <button
        onClick={() => goToPage(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`px-3 py-1 text-sm font-bold rounded-full border ${
          currentPage === totalPages
            ? "cursor-not-allowed border-foreground/20 text-foreground/40"
            : "border-foreground hover:bg-foreground hover:text-background"
        }`}
      >
        Next
      </button>
    </div>
  )
}
