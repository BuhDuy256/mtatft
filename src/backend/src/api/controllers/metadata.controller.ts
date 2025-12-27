import { Request, Response, NextFunction } from 'express';
import { logger } from '../../utils/logger.util';
import { formatResponse } from '../../utils/response.util';
import { MetadataQueryDto } from '../dtos/requests/metadata.schema';
import * as MetadataService from '../../services/metadata.service';

export const getMetadata = async (request: Request, response: Response, next: NextFunction): Promise<void> => {
  try {
    const query = request.query as unknown as MetadataQueryDto;
    const result = await MetadataService.getMetadata(query);
    formatResponse(response, 200, result);
  } catch (error) {
    logger.error("MetadataController", "Failed to get metadata", error);
    next(error);
  }
};