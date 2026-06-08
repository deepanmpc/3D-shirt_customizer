import * as dotenv from 'dotenv';
import { GoogleGenAI } from '@google/genai';

dotenv.config();

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

async function run() {
  try {
    console.log("Generating image with gemini-3.1-flash-image...");
    const response = await ai.models.generateContent({
        model: 'gemini-3.1-flash-image',
        contents: 'a white t-shirt'
    });

    // Check for inline data
    const part = response.candidates[0].content.parts[0];
    if (part.inlineData) {
       console.log("Success! Base64 size:", part.inlineData.data.length);
       console.log("MimeType:", part.inlineData.mimeType);
    } else {
       console.log("No inline data found:", JSON.stringify(part));
    }
  } catch (error) {
    console.error("Detailed Error:");
    console.error(error);
  }
}

run();
