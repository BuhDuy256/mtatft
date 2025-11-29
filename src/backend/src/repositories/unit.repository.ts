import db from "../database/db";

export const getAllUnitsWithTraits = async (season?: number) => {
  let query = db('static_units')
    .leftJoin('unit_traits', 'static_units.id', 'unit_traits.unitId')
    .select('static_units.*', 'unit_traits.traitId');

  if (season) {
    query = query.where('static_units.season', season);
  }

  return query;
}
