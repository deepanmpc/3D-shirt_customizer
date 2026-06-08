import express from 'express';
import * as dotenv from 'dotenv';
import { GoogleGenAI } from '@google/genai';

dotenv.config();

const router = express.Router();

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

router.route('/').get((req, res) => {
  res.status(200).json({ message: "Hello from Gemini ROUTES" });
});

router.route('/').post(async (req, res) => {
  try {
    const { prompt } = req.body;

    console.log("Received prompt for Gemini:", prompt);

    const response = await ai.models.generateImages({
        model: 'imagen-3.0-generate-002',
        prompt: prompt,
        config: {
            numberOfImages: 1,
            aspectRatio: '1:1',
            outputMimeType: 'image/jpeg',
        }
    });

    const base64Image = response.generatedImages[0].image.imageBytes;

    res.status(200).json({ photo: base64Image });
  } catch (error) {
    console.error("Error generating image:", error);
    res.status(500).json({ message: "Something went wrong", error: error.message });
  }
});

export default router;
