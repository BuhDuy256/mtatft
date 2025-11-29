import { Router } from 'express';
import { validate } from '../../middlewares/validate.middleware';
import * as StatsController from '../controllers/stats.controller';
import { statsQuerySchema } from '../schemas/stats.schema';

const router = Router();

router.get('/top-comps', validate(statsQuerySchema, 'query'), StatsController.getTopComps);
router.get('/items', validate(statsQuerySchema, 'query'), StatsController.getItemStats);
router.get('/traits', validate(statsQuerySchema, 'query'), StatsController.getTraitStats);
router.get('/units', validate(statsQuerySchema, 'query'), StatsController.getUnitStats);

export default router;
