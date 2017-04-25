const filterExtractor = require('./modules/filter-extractor');
const queryBuilder = require('./modules/query-builder');

function createQuery(filter) {
  return queryBuilder.build(filterExtractor.extract(filter));
}

module.exports = {
  createQuery,
  filterExtractor,
  queryBuilder,
};
