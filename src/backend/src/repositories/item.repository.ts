import db from "../database/db";

export const getAllItems = async (season?: number) => {
  let query = db('static_items').select('*');
  if (season) {
    query = query.where('season', season);
  }
  return query;
}