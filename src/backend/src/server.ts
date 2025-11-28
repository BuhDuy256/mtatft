import express from "express";
import cors from "cors";
import { envConfig } from "./config/env.config";

const app = express();
const PORT = envConfig.PORT;

app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(express.json());

// ... routes

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
