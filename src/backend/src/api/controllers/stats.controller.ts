import { Request, Response, NextFunction } from 'express';
import { logger } from '../../utils/logger.util';
import { formatResponse } from '../../utils/response.util';
import { StatsQueryDto } from '../dtos/requests/stats.schema';
import * as StatsService from '../../services/stats.service';

export const getTopComps = async (request: Request, response: Response, next: NextFunction): Promise<void> => {
  try {
    const query = request.query as unknown as StatsQueryDto;
    const result = await StatsService.getTopComps(query);
    formatResponse(response, 200, result);
  } catch (error) {
    logger.error("StatsController", "Failed to get stats", error);
    next(error);
  }
};

export const getItemStats = async (request: Request, response: Response, next: NextFunction): Promise<void> => {
  try {
    const query = request.query as unknown as StatsQueryDto;
    const result = await StatsService.getItemStats(query);
    formatResponse(response, 200, result);
  } catch (error) {
    logger.error("StatsController", "Failed to get item stats", error);
    next(error);
  }
};

export const getTraitStats = async (request: Request, response: Response, next: NextFunction): Promise<void> => {
  try {
    const query = request.query as unknown as StatsQueryDto;
    const result = await StatsService.getTraitStats(query);
    formatResponse(response, 200, result);
  } catch (error) {
    logger.error("StatsController", "Failed to get trait stats", error);
    next(error);
  }
};

export const getUnitStats = async (request: Request, response: Response, next: NextFunction): Promise<void> => {
  try {
    const query = request.query as unknown as StatsQueryDto;
    const result = await StatsService.getUnitStats(query);
    formatResponse(response, 200, result);
  } catch (error) {
    logger.error("StatsController", "Failed to get unit stats", error);
    next(error);
  }
};