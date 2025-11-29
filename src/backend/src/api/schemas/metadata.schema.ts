import { z } from 'zod';
import { DEFAULT_TFT_SEASON } from '../../utils/constants.util';

export const metadataQuerySchema = z.object({
  season: z.coerce.number().optional().default(DEFAULT_TFT_SEASON),
});

export type MetadataQuery = z.infer<typeof metadataQuerySchema>;