import { headers } from "next/headers"
import CardList, { Product } from "@/components/CardList"
import { decrypt, type EncryptedPayload } from "@/lib/crypto"
import Toggle from "@/components/Toggle"

async function getRecords(): Promise<Product[]> {
  const h = await headers()
  const host = h.get("host") ?? "localhost:3000"
  const protocol = process.env.NODE_ENV === "development" ? "http" : "https"

  const res = await fetch(`${protocol}://${host}/api/records`, {
    cache: "no-store",
  })

  if (!res.ok) {
    throw new Error("Failed to fetch encrypted records")
  }

  const payload = (await res.json()) as EncryptedPayload
  const decrypted = decrypt(payload) as Product[]

  return decrypted
}

export default async function Home() {
  const records = await getRecords()

  return (
    <main className="min-h-screen px-4 py-8 bg-background text-foreground">
      <h1 className="text-3xl font-bold text-center mb-2">
        CipherCards – Secure Records
      </h1>
      <p className="text-center text-foreground/80 mb-8">
        Encrypted on API • Decrypted on server • Rendered as responsive cards
      </p>
      <Toggle />
      <CardList records={records} />
    </main>
  )
}
