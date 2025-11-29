import db from "../database/db";

export const getAllTraits = async (season?: number) => {
  let query = db('static_traits').select('*');
  if (season) {
    query = query.where('season', season);
  }
  return query;
}
