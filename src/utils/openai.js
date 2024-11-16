import OpenAI from "openai"

const OPENROUTER_BASE_URL = import.meta.env.VITE_BASE_URL;
const OPENROUTER_API_KEY = import.meta.env.VITE_OPENROUTER_API_KEY;

const openai = new OpenAI({
  baseURL: OPENROUTER_BASE_URL,
  apiKey: OPENROUTER_API_KEY,
  dangerouslyAllowBrowser: true 
})

export default openai