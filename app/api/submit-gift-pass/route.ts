import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, phone, address, city, timestamp } = body

    // Validate required fields
    if (!name || !email || !phone || !address || !city) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      )
    }

    // Get Google Sheets credentials from environment variables
    const GOOGLE_SHEETS_URL = process.env.GOOGLE_SHEETS_WEBHOOK_URL

    if (!GOOGLE_SHEETS_URL) {
      console.error("Google Sheets webhook URL not configured")
      // Still return success to not block user from proceeding to payment
      return NextResponse.json({ success: true })
    }

    // Send data to Google Sheets via webhook
    try {
      const response = await fetch(GOOGLE_SHEETS_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          phone,
          address,
          city,
          timestamp,
          product: "Gift Pass - $499",
        }),
      })

      if (!response.ok) {
        console.error("Failed to send to Google Sheets:", response.statusText)
      }
    } catch (error) {
      console.error("Error sending to Google Sheets:", error)
      // Don't block the user even if Google Sheets fails
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Error processing request:", error)
    return NextResponse.json(
      { error: "Failed to process request" },
      { status: 500 }
    )
  }
}

