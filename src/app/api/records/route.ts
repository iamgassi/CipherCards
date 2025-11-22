// app/api/records/route.ts
import { NextResponse } from "next/server"
import { encrypt } from "@/lib/crypto"

export const runtime = "nodejs"

type DummyProduct = {
  id: number
  title: string
  description: string
  price: number
  brand: string
  category: string
  thumbnail: string
  images: string[]        
}

type DummyResponse = {
  products: DummyProduct[]
  total: number
  skip: number
  limit: number
}

export async function GET() {
  const externalRes = await fetch("https://dummyjson.com/products?limit=120")
  if (!externalRes.ok) {
    return NextResponse.json(
      { error: "Failed to fetch products from DummyJSON" },
      { status: 500 }
    )
  }

  const data = (await externalRes.json()) as DummyResponse

  const now = new Date().toISOString()

  const records = data.products.map((p) => ({
    id: p.id,
    title: p.title,
    snippet: p.description,
    price: p.price,
    brand: p.brand,
    category: p.category,
    imageUrl: p.images[0] ?? p.thumbnail,
  }))

  const encryptedPayload = encrypt(records)
  return NextResponse.json(encryptedPayload)
}
