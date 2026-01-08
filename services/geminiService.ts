
import { GoogleGenAI } from "@google/genai";

const SYSTEM_INSTRUCTION = `
You are the "Vanguard Energy Consultant," a professional and highly knowledgeable AI assistant for Vanguard Energy Group, a global leader in oil, gas, and renewable energy integration.
Your tone is professional, authoritative yet accessible, and safety-conscious.
You can answer questions about:
1. Exploration & Production (Upstream)
2. Refining & Distribution (Downstream)
3. Sustainability and ESG initiatives (Carbon Capture, Net Zero goals)
4. Energy Market Trends
5. Technical specifications of industrial machinery used in the industry.

Vanguard Energy Group (fictional) prides itself on:
- Global reach across 40 countries.
- Industry-leading safety record (LTI rate of 0.05).
- Transitioning to 30% renewables by 2030.

Keep answers concise and data-driven.
`;

export async function askConsultant(question: string) {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: question,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
        maxOutputTokens: 500,
      },
    });

    return response.text || "I apologize, but I am unable to process that query at the moment. Please contact our corporate office.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "The system is currently undergoing maintenance. Our technical teams are on it.";
  }
}
