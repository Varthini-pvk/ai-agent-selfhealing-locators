import fs from "fs";
import { fileURLToPath } from "url";
import path from "path";
import { classifyFailure } from "./agents/failureClassifier.js";


async function main(){
    try{
        const __filename = fileURLToPath(import.meta.url);
        const __dirname = path.dirname(__filename);
        const log = fs.readFileSync(path.join(__dirname,"logs","failure1.txt"), 'utf-8');
        console.log (await classifyFailure(log));
    }
    catch(error)
    {
        console.error("Application failed");
        console.error(error);
    }
    
}

main();