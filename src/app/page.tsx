import ProductCard from "@/components/ProductCard"

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full flex justify-center">
        <ProductCard
          title="Product"
          description="A short description of the product"
          imageUrl="https://placehold.co/600x400"
        />
      </div>
    </main>
  )
}
