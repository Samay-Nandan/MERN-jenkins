import dotenv from "dotenv";

dotenv.config(".env")

export const { PORT, MONGO_URI } = process.env