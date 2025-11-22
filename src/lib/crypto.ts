// lib/crypto.ts
import crypto from "crypto"

const algorithm = "aes-256-gcm"

const key = Buffer.from(process.env.ENCRYPTION_KEY || "", "utf-8")

if (key.length !== 32) {
  throw new Error("ENCRYPTION_KEY must be 32 characters long")
}

export type EncryptedPayload = {
  encryptedData: string
  iv: string
  tag: string
}

export function encrypt(data: unknown): EncryptedPayload {
  const iv = crypto.randomBytes(12)
  const cipher = crypto.createCipheriv(algorithm, key, iv)

  let encrypted = cipher.update(JSON.stringify(data), "utf8", "base64")
  encrypted += cipher.final("base64")

  const tag = cipher.getAuthTag()

  return {
    encryptedData: encrypted,
    iv: iv.toString("base64"),
    tag: tag.toString("base64"),
  }
}

export function decrypt(payload: EncryptedPayload) {
  const { encryptedData, iv, tag } = payload

  const decipher = crypto.createDecipheriv(
    algorithm,
    key,
    Buffer.from(iv, "base64")
  )

  decipher.setAuthTag(Buffer.from(tag, "base64"))

  let decrypted = decipher.update(encryptedData, "base64", "utf8")
  decrypted += decipher.final("utf8")

  return JSON.parse(decrypted)
}
