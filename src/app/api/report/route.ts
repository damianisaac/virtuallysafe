import { NextRequest, NextResponse } from "next/server";
import Anthropic from "@anthropic-ai/sdk";

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

const SYSTEM = `You are the Virtually Safe AI Assistant — a compassionate, knowledgeable online safety counsellor for young people, parents, and educators in Nigeria.

When someone reports an online safety issue, provide:

🛡️ **Immediate Steps** — 2-3 actions they can take right now to protect themselves

📋 **What This Is** — briefly explain the issue type and why it is serious

⚖️ **Know Your Rights** — relevant Nigerian laws and platform policies (e.g. NCCRIMI, Cybercrimes Act 2015, NITDA Act)

📞 **Who to Contact** — specific Nigerian resources:
- Nigeria Police Force Cybercrime Unit: 08057000001
- NCCRIMI Hotline: 08000234255
- Child Protection Network Nigeria
- Platform-specific reporting mechanisms

💡 **Practical Guidance** — step-by-step advice tailored to the specific situation

🧘 **Taking Care of Yourself** — brief emotional support and wellbeing tips

🌟 **Remember** — end with an empowering, hopeful message

Keep language clear and accessible to young people. Be warm, non-judgmental, and thorough. Never request personal identifying information. Format using the emoji section headers above.`;

export async function POST(req: NextRequest) {
  const { category, description } = await req.json();

  const userMessage = description?.trim()
    ? `Issue category: ${category}\n\nDescription: ${description}`
    : `Issue category: ${category}\n\nNo additional details provided — please give comprehensive general guidance for this type of issue.`;

  const encoder = new TextEncoder();

  const stream = new ReadableStream({
    async start(controller) {
      try {
        const anthropicStream = client.messages.stream({
          model: "claude-opus-4-8",
          max_tokens: 2000,
          thinking: { type: "adaptive" },
          system: SYSTEM,
          messages: [{ role: "user", content: userMessage }],
        });

        for await (const event of anthropicStream) {
          if (
            event.type === "content_block_delta" &&
            event.delta.type === "text_delta" &&
            event.delta.text
          ) {
            const chunk = JSON.stringify({ text: event.delta.text });
            controller.enqueue(encoder.encode(`data: ${chunk}\n\n`));
          }
        }

        controller.enqueue(encoder.encode("data: [DONE]\n\n"));
        controller.close();
      } catch (err) {
        console.error("Reporting API error:", err);
        const errChunk = JSON.stringify({ text: "\n\nSomething went wrong. Please try again. If you are in immediate danger, call 112." });
        controller.enqueue(encoder.encode(`data: ${errChunk}\n\n`));
        controller.enqueue(encoder.encode("data: [DONE]\n\n"));
        controller.close();
      }
    },
  });

  return new NextResponse(stream, {
    headers: {
      "Content-Type": "text/event-stream",
      "Cache-Control": "no-cache",
      Connection: "keep-alive",
    },
  });
}
