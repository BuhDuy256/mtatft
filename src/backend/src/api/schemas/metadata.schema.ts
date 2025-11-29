import { z } from 'zod';

export const metadataQuerySchema = z.object({
  season: z.number().optional()
});

export type MetadataQuery = z.infer<typeof metadataQuerySchema>;
