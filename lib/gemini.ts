import { GoogleGenerativeAI } from '@google/generative-ai';

const apiKey = process.env.GEMINI_API_KEY as string;
const genAI = new GoogleGenerativeAI(apiKey);

export const geminiModel = genAI.getGenerativeModel({ model: 'gemini-pro' });

export async function getFinancialInsights(expenses: any[]) {
  try {
    const prompt = `
      Analyze the following expense data and provide financial insights and savings recommendations:
      ${JSON.stringify(expenses)}
      
      Please provide:
      1. Spending patterns and trends
      2. Categories where the user might be overspending
      3. Specific recommendations for saving money
      4. Potential investment opportunities based on savings potential
    `;
    
    const result = await geminiModel.generateContent(prompt);
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error('Error getting financial insights:', error);
    return 'Unable to generate insights at this time.';
  }
}