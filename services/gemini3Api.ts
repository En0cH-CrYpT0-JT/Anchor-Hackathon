import { GoogleGenerativeAI, SchemaType } from "@google/generative-ai";

// 🔴 TODO: PASTE YOUR API KEY INSIDE THE QUOTES BELOW
const API_KEY = "AIzaSyB5JatVORhwzxDzSxgVz0UxNlZLcuDC2lE"; 

const genAI = new GoogleGenerativeAI(API_KEY);

// We use 'gemini-1.5-flash' for speed/cost. Rename to 'gemini-3.0' for the Hackathon demo if you have access.
const MODEL_NAME = "gemini-2.5-pro"; 

const schema = {
  description: "List of tasks parsed from unstructured input",
  type: SchemaType.ARRAY,
  items: {
    type: SchemaType.OBJECT,
    properties: {
      id: { type: SchemaType.STRING },
      title: { type: SchemaType.STRING },
      summary: { type: SchemaType.STRING },
      source: { type: SchemaType.STRING, enum: ["Audio", "Image", "Text"] },
      urgencyLevel: { type: SchemaType.STRING, enum: ["Low", "Medium", "High"] },
      suggestedAction: { type: SchemaType.STRING },
    },
    required: ["id", "title", "summary", "source", "urgencyLevel", "suggestedAction"],
  },
};

export const fetchGeminiTasks = async (rawInputs: string[]): Promise<any[]> => {
  try {
    const model = genAI.getGenerativeModel({
      model: MODEL_NAME,
      generationConfig: {
        responseMimeType: "application/json",
        responseSchema: schema,
      },
    });

    const prompt = `
      You are 'Anchor', an executive function assistant.
      Analyze these raw inputs. Create calm, supportive task cards.
      Break 'suggestedAction' down into the smallest possible physical step.
      Inputs: ${JSON.stringify(rawInputs)}
    `;

    const result = await model.generateContent(prompt);
    return JSON.parse(result.response.text());
  } catch (error) {
    console.error("Gemini Error:", error);
    return [];
  }
};
