# Filter Query ![img](https://travis-ci.org/alxolr/filter-query.svg?branch=master)

> This repository has the goal to transform a RESTFULL get filter as the following one
```
/api/v1/books?filter=created_at::>=2016-01-01|created_at::<2016-01-31
```
> into an
```javascript
const createQuery = require('filter-query').createQuery;

const filter = req.query.filter; // an express field
const query = createQuery(filter);

// query = {
//   created_at: {
//    $gte: '2016-01-01',
//    $lt: '2016-01-31'
//   }
// }

Books.find(query)
  .then(processBooks)
  .catch(handleError)
```

## You can use it as express middleware also;
```javascript
const buildQuery = require('filter-query').buildQuery;
const Router = require('express').Router;

Router.route('/api/v1/books')
  .get(buildQuery, getBooks);

function getBooks(req, res) {
  Books.find(req.query) // get the builded query from the middleware
    .then((books) => res.json(books))
    .catch(handleError);
}
```