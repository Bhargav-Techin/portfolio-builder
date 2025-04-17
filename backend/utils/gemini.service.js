import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

export const generatePromptWithGemini = async (portfolio) => {
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });

  const input = `
Generate a friendly, informative summary prompt to help an AI assistant introduce and explain the portfolio below. Focus on the person's skills, experience, and highlights:

Name: ${portfolio.name}
Bio: ${portfolio.bio}
Skills: ${portfolio.skills?.join(', ')}

Projects:
${portfolio.projects?.map(p => `- ${p.title}: ${p.description}`).join('\n')}

Education:
${portfolio.education?.map(e => `- ${e.degree} from ${e.institution} (${e.startYear || "N/A"} - ${e.endYear || "Present"})`).join('\n')}

Experience:
${portfolio.experience?.map(exp => `- ${exp.position} at ${exp.company} (${exp.startDate} - ${exp.endDate || "Present"}): ${exp.description}`).join('\n')}

Output only the prompt text. No bullet points or metadata.
`;

  const result = await model.generateContent(input);
  const response = await result.response;
  return response.text();
};
