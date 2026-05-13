import OpenAI from "openai";
import {z} from "zod";
import {env} from "../../config/env.js";
import {FAILURE_CLASSIFIER_PROMPT} from "../prompts/failureClassifier.js";

const openAIClient = new OpenAI({apiKey: env.OPENAI_API_KEY});

const failureClassificationSchema = z.object({
failureType: z.enum([
    "selector_failure",
    "assertion_failure",
    "timeout_failure",
    "network_failure",
    "unknown"
  ])
});

type FailureClassification = z.infer<typeof failureClassificationSchema>;

export async function classifyFailure(log:string): Promise<FailureClassification>
{
    try{
        const failureClassificationResponse =  await openAIClient.chat.completions.create(
                {
                    model: 'gpt-4.1-mini',
                    temperature: 0,
                    messages: [
                {
                    role: 'system',
                    content: FAILURE_CLASSIFIER_PROMPT
                },
                {
                    role: 'user',
                    content: log
                }
                ]
                });

                const failureClassifiction =  failureClassificationResponse.choices[0].message.content;

                return failureClassificationSchema.parse(JSON.parse(failureClassifiction || '{}'));
            
        
        }
        catch(error)
        {
            console.error("Failure classification failed");
            throw error;
        }

}



