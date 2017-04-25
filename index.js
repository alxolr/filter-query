const filterExtractor = require('./modules/filter-extractor');
const queryBuilder = require('./modules/query-builder');

function createQuery(filter) {
  return queryBuilder.build(filterExtractor.extract(filter));
}

function buildQuery(req, res, next) {
  if (req.query.filter) {
    req.query = createQuery(req.query.filter);
  }
  next();
}

module.exports = {
  buildQuery,
  createQuery,
  filterExtractor,
  queryBuilder,
};
