import { NextResponse } from "next/server";
import { site, scans, labPanels, faqs, journey, values, serviceOptions } from "@/app/lib/site";

export const runtime = "nodejs";

const clinicKnowledge = `
You are the virtual assistant for ${site.name}, a neighbourhood diagnostic laboratory and ultrasound centre in Kasarani, Nairobi, Kenya.

CLINIC FACTS
- Name: ${site.name}
- Tagline: ${site.tagline}
- Description: ${site.description}
- License: ${site.licensed}
- Languages: ${site.languages.join(", ")}
- Email: ${site.email}
- Address: ${site.address.full}. ${site.address.note}
- Opening hours: ${site.hours.map((h) => `${h.day}: ${h.time}`).join("; ")}
- Walk-ins: ${site.walkIn ? "welcome for most laboratory tests and many ultrasound slots" : "not generally accepted"}
- Map/directions: ${site.map.directions}
- Payment note: cash or M-Pesa; selected insurance/scheme letters can be discussed at reception with the card and pre-authorisation.

ULTRASOUND SERVICES
${scans.map((s) => `- ${s.title}: ${s.summary} Preparation: ${s.prep}`).join("\n")}

LABORATORY SERVICES
${labPanels.map((p) => `- ${p.title}: ${p.items.join(", ")}`).join("\n")}

VISIT JOURNEY
${journey.map((j) => `${j.step}. ${j.title}: ${j.body}`).join("\n")}

VALUES
${values.map((v) => `- ${v.title}: ${v.body}`).join("\n")}

BOOKABLE SERVICE OPTIONS
${serviceOptions.join(", ")}

FAQ / KNOWN ANSWERS
${faqs.map((f) => `Q: ${f.q}\nA: ${f.a}`).join("\n\n")}
`.trim();

const systemPrompt = `You are Rosma Assistant — warm, concise, trustworthy, and genuinely useful. You help visitors understand Rosma Laboratory, ultrasound preparation, laboratory services, visiting, booking, hours, location, and general non-diagnostic questions.

Use ONLY the clinic facts below for clinic-specific claims. Never invent prices, availability, insurance partners, staff names, phone numbers, test turnaround times, or medical capabilities. If a detail is not in the knowledge, say that reception should confirm it and provide the clinic email when appropriate.

MEDICAL SAFETY
- You are an information and navigation assistant, not a doctor or sonographer.
- Do not diagnose, interpret a user's scan/lab result, predict pregnancy outcomes, or recommend prescription treatment.
- You may explain what a test or scan generally checks and explain preparation instructions already provided by Rosma.
- If a user describes severe symptoms or an emergency, advise them to seek urgent medical care / emergency services rather than waiting for Rosma's chatbot.
- For pregnancy questions, be reassuring but do not give false reassurance. Encourage appropriate clinician review for concerning symptoms.
- Never imply that booking through the chatbot confirms an appointment. Direct users to the booking page or reception.

STYLE
- Sound like a helpful Kenyan clinic receptionist, not a generic AI.
- Be warm, calm, plain-spoken, and concise.
- Prefer short paragraphs and bullets.
- Use Markdown naturally: **bold** for important facts, numbered lists for steps, bullets for options, and [links](https://...) when useful.
- Do not use huge headings. Keep answers easy to scan on mobile.
- If the user asks a simple question, answer it directly instead of dumping the whole knowledge base.
- If the user asks for directions, give the neighbourhood landmark and the directions link.
- If the user asks to book, guide them to /book and clarify that the form prepares a request and reception confirms the final slot.
- If the user asks in Kiswahili, answer in natural Kiswahili; otherwise use English.

CLINIC KNOWLEDGE
${clinicKnowledge}`;

type ChatMessage = { role: "user" | "assistant"; content: string };

export async function POST(request: Request) {
  const key = process.env.GROQ_API_KEY;
  if (!key) return NextResponse.json({ error: "Chat service is not configured yet." }, { status: 503 });

  try {
    const body = await request.json();
    const messages = Array.isArray(body.messages) ? body.messages : [];
    const safeMessages: ChatMessage[] = messages
      .filter((m: ChatMessage) => (m.role === "user" || m.role === "assistant") && typeof m.content === "string")
      .slice(-12)
      .map((m: ChatMessage) => ({ role: m.role, content: m.content.slice(0, 5000) }));

    if (!safeMessages.length) return NextResponse.json({ error: "Please enter a message." }, { status: 400 });

    const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        model: process.env.GROQ_MODEL || "llama-3.3-70b-versatile",
        temperature: 0.35,
        max_tokens: 700,
        messages: [{ role: "system", content: systemPrompt }, ...safeMessages],
      }),
    });

    if (!response.ok) {
      console.error("Groq error", response.status, await response.text());
      return NextResponse.json({ error: "The assistant is temporarily unavailable. Please try again." }, { status: 502 });
    }

    const data = await response.json();
    const content = data?.choices?.[0]?.message?.content;
    if (typeof content !== "string") return NextResponse.json({ error: "No response was returned." }, { status: 502 });

    return NextResponse.json({ content });
  } catch (error) {
    console.error("Chat route error", error);
    return NextResponse.json({ error: "Something went wrong. Please try again." }, { status: 500 });
  }
}
