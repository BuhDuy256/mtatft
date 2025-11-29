import { Router } from 'express';
import { validate } from '../../middlewares/validate.middleware';
import { metadataQuerySchema } from '../schemas/metadata.schema';
import * as MetadataController from '../controllers/metadata.controller';

const router = Router();

router.use('/', validate(metadataQuerySchema, 'query'), MetadataController.getMetadata);

export default router;