import { z } from "zod";
import dotenv from "dotenv";

dotenv.config();

const envSchema = z.object({
  PORT: z.string().default("3000").transform(Number),
  SUPABASE_HOST: z.string(),
  SUPABASE_PORT: z.string().default("5432").transform(Number),
  SUPABASE_USER: z.string(),
  SUPABASE_PASSWORD: z.string(),
  SUPABASE_DB: z.string(),
  NODE_ENV: z.string()
});

export const envConfig = envSchema.parse(process.env);
