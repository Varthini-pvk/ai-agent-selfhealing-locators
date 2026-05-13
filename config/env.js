import dotenv from "dotenv";
dotenv.config();
function getEnvValue(key) {
    const value = process.env[key];
    if (!value) {
        throw new Error(`${key} is missing`);
    }
    return value;
}
export const env = {
    OPENAI_API_KEY: getEnvValue("OPENAI_API_KEY")
};
