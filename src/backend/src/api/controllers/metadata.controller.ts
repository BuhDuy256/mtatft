import { Request, Response, NextFunction } from 'express';
import { logger } from '../../utils/logger.util';
import {
  formatResponse,
} from '../../utils/response.util';
import { MetadataQuery } from '../schemas/metadata.schema';
import * as MetadataService from '../../services/metadata.service';

export const getMetadata = async (request: Request, response: Response, next: NextFunction): Promise<void> => {
  try {
    const query = request.query as MetadataQuery;

    const result = MetadataService.getMetadata(query);

    formatResponse(response, 200, result);
  } catch (error) {
    logger.error("MetadataController", "Failed to get metadata", error);
    next(error);
  }
}