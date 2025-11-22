import { NextResponse } from "next/server"
import { encrypt } from "@/lib/crypto"

const records = [
  {
    id: 1,
    title: "Patient A - Visit",
    timestamp: "2025-11-21T10:00:00Z",
    snippet: "Blood pressure slightly elevated, follow-up in 1 week.",
  },
  {
    id: 2,
    title: "Survey B - Onboarding",
    timestamp: "2025-11-21T11:30:00Z",
    snippet: "User completed initial onboarding survey successfully.",
  },
  {
    id: 3,
    title: "Patient C - New Symptoms",
    timestamp: "2025-11-21T14:15:00Z",
    snippet: "Reported mild chest discomfort, recommended ECG.",
  },
]

export async function GET() {
  const encryptedData = encrypt(records)
  return NextResponse.json(encryptedData)
}
