# Filter Query ![img](https://travis-ci.org/alxolr/filter-query.svg?branch=master)

> This repository has the goal to transform a RESTFULL get filter as
```
/api/v1/books?filter=created_at::>=2016-01-01|created_at::<2016-01-31
```
As a result I will get a mongodb query

```
  const qb = require('filter-query').queryBuilder;
  const fe = require('filter-query).filterExtractor;

  const filter = req.query.filter;
  const query = qb.build(fe.extract(filter));
  /**
   * {
   *   created_at: {
   *      '$gte': '2016-01-01',
   *      '$lt': '2016-01-31'
   *   }
   * }
   */

  Books.find(query);
```