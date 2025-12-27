import { z } from 'zod';
import { DEFAULT_TFT_PATCH } from '../../../utils/constants.util';

export const statsQuerySchema = z.object({
  patch: z.coerce.number().optional().default(DEFAULT_TFT_PATCH),
});

export type StatsQueryDto = z.infer<typeof statsQuerySchema>;
