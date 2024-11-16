import { showAlert } from "../../../components/Alert.jsx";
import { BASE_URL_PROMPT_API } from "../../../constant/BASE_URL.js";
import genAi from "../../../utils/geminiAi.js";
import openai from "../../../utils/openai.js";
import axios from "axios";

// OpenAI
export async function fetchTips(type, trash) {
  try {
    const completion = await openai.chat.completions.create({
      // model: "mistralai/mistral-7b-instruct:free",
      // model: "nousresearch/hermes-3-llama-3.1-405b:free",
      model: "openchat/openchat-7b:free",
      messages: [
        {
          role: "system",
          content: `You are a professional waste recycling expert. The user will provide the type of waste (either organic or inorganic) along with a list of waste items. Please share effective and appropriate waste management methods. If you receive inorganic waste, you can use it to create crafts.

          Provide a response in the following format:
          - Title: specific title, not general
          - Tools Needed
          - Processing Steps
          - Notes: additional information(minimum 2 points)

          IMPORTANT :
          ALWAYS RESPONSE WITH VALID JSON OBJECT WITH FOLLOWING KEYS: title, tools (string Array), ProcessStep (string Array), notes (string Array).

          IMPORTANT :
          ALWAYS RESPONSE WITH INDONESIA LANGUAGE.

          IMPORTANT :
          NO ADDITIONAL TEXT OUTSIDE THE JSON OBJECT.

          IMPORTANT :
          DO NOT INCLUDE ANY ADDITIONAL TEXT OR MARKUP AROUND THE JSON OBJECT.

          CRITICAL :
          Before you respond, always check the waste list and ensure it matches the selected waste type. If there are any mismatches, be sure to exclude them from the title, tools, ProcessStep, and notes.`,
        },
        {
          role: "user",
          content: `berikan saran cara mengolah sampah ${type}, dari sampah-sampah ini: ${trash}`,
        },
      ],
    });

    // console.log(completion.choices[0].message.content);
    const response = JSON.parse(completion.choices[0].message.content);
    return response;
  } catch (error) {
    console.error("Error fetching tips:", error);
    throw error;
  }
}

// save to collection
export async function saveToCollection(data, setLoadingSave) {
  setLoadingSave(true);
  try {
    const response = await axios.post(BASE_URL_PROMPT_API, data);
    // console.log("Data saved to collection:", response.data);
    showAlert({ icon: 'success', title: 'Success', text: `"${data.title}" successfully saved.` });
  } catch (error) {
    console.error("Error saving to collection:", error);
    alert("Failed to save data.");
  } finally {
    setLoadingSave(false);
  }
};

// Gemini Ai
export async function fetchTipsGemini(type, trash) {
  const generationConfig = {
    "temperature": 1,
    "top_p": 0.95,
    "top_k": 40,
    "max_output_tokens": 8192,
    "response_mime_type": "text/plain",
  }

  try {
    const model = genAi.getGenerativeModel({model: "gemini-1.5-flash"})

    const chat = model.startChat({
      generationConfig,
      history: [
        {
          role: "user",
          parts: [
            {
              text: `You are a professional waste recycling expert. The user will provide the type of waste (either organic or inorganic) along with a list of waste items. Please share effective and appropriate waste management methods. If you receive inorganic waste, you can use it to create crafts.

              Provide a response in the following format:
              - Title: specific title, not general
              - Tools Needed
              - Processing Steps
              - Notes: additional information (minimum 2 points)

              IMPORTANT:
              ALWAYS RESPOND WITH VALID JSON OBJECT WITH FOLLOWING KEYS: title, tools (string Array), ProcessStep (string Array), notes (string Array)

              ALWAYS RESPOND IN INDONESIAN LANGUAGE.

              DO NOT INCLUDE ANY ADDITIONAL TEXT OR MARKUP AROUND THE JSON OBJECT.

              CRITICAL:
              Before responding, always check the waste list and ensure it matches the selected waste type. If there are any mismatches, be sure to exclude them from the title, tools, ProcessStep, and notes.`,
            }
          ]
        },
      ]
    })

    const userInput = `berikan saran cara mengolah sampah ${type}, dari sampah-sampah ini: ${trash}`;
    const result = await chat.sendMessage(userInput);
    let response = result.response.candidates[0].content.parts[0].text;

    response = response.replace(/```json|```/g, "").trim();
    // console.log(response);

    const jsonResponse = JSON.parse(response);
    // console.log(jsonResponse);

    return jsonResponse;
  } catch (error) {
    console.error("Error generating tips:", error);
  }
}