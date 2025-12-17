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

    // Prepare complete payload
    const payload = {
      name,
      email,
      phone,
      address,
      city,
      timestamp,
      product: "Gift Pass - $499",
      price: 499,
      type: "gift_pass",
      source: "landing_page",
    }

    // Send data to n8n webhook
    const N8N_WEBHOOK_URL = "https://abhixchawla.app.n8n.cloud/webhook/snowsignup"

    try {
      const response = await fetch(N8N_WEBHOOK_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      })

      if (!response.ok) {
        console.error("Failed to send to n8n webhook:", response.statusText)
        // Still return success to not block user from proceeding to payment
      }
    } catch (error) {
      console.error("Error sending to n8n webhook:", error)
      // Don't block the user even if webhook fails
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

