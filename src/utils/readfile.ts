import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

export function readFile(relativePath: string): string {

  const absolutePath = path.resolve(__dirname,"..",relativePath);

  return fs.readFileSync(absolutePath,"utf-8");
}