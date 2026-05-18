import OpenAI from "openai";
import {z} from "zod";
import {env} from "../../config/env.js";
import { failureClassificationSchema , FailureClassification} from "../schemas/failureClassificationSchema.js";
import {buildFailureClassificationPrompt} from "../prompts/failureClassifier.js";

const openAIClient = new OpenAI({apiKey: env.OPENAI_API_KEY});

export async function classifyFailure(log:string): Promise<FailureClassification>
{
    try{
        const failureClassificationPrompt = buildFailureClassificationPrompt();
        const failureClassificationResponse =  await openAIClient.chat.completions.create(
                {
                    model: 'gpt-4.1-mini',
                    temperature: 0,
                    messages: [
                    {
                        role: 'system',
                        content: failureClassificationPrompt
                    },
                    {
                        role: 'user',
                        content: log
                    }
                ]
                });
                const failureClassifiction =  failureClassificationResponse.choices[0].message.content;
                if (!failureClassifiction) {
                    throw new Error(
                        "LLM returned empty response for failure classification"
                    );
                }
                return failureClassificationSchema.parse(JSON.parse(failureClassifiction));      
        }
        catch(error)
        {
            console.error("Failure classification failed");
            throw error;
        }

}



