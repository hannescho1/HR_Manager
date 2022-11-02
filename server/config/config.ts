import dotenv from "dotenv";

dotenv.config();

const MONGO_USERNAME = process.env.MONGO_USERNAME || "";
const MONGO_PASSWORD = process.env.MONGO_PASSWORD || "";
const MONGO_URL = "mongodb://127.0.0.1:27017/hrmanager";

const SERVER_PORT = process.env.SERVER_PORT
  ? Number(process.env.SERVER_PORT)
  : 4000;

export const config = {
  mongo: {
    url: MONGO_URL,
  },
  server: {
    prot: SERVER_PORT,
  },
};
