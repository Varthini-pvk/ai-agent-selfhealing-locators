import { readFile } from "./utils/readfile.js"
import {extractFailureSnippets} from "./preprocessing/failureExtractor.js"
import { classifyFailure } from "./agents/failureClassifier.js";
import { ClassifiedFailure } from "./types/classifiedFailures.js";


async function main(){
    try{
        const report = readFile("failure-logs/playwright_failure_logs_dataset.txt");
        const failures = extractFailureSnippets(report);
        const classifiedFailures: ClassifiedFailure[] = [];
        for (const failureSnippet of failures)
        {
            try {

            const classification = await classifyFailure(failureSnippet);

             classifiedFailures.push({failureSnippet,classification});
             console.log(classification);

        } catch (error) {

            console.error(
            "Failure classification failed"
            );

            console.error(error);
        }

    }
      
    }
    catch(error)
    {
        console.error("Application failed");
        console.error(error);
    }
    
}

main();