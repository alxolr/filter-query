/* global describe it */
const qb = require('../index').queryBuilder;
const assert = require('assert');

const configs = [
  {
    in: [{
      property: 'created_at',
      value: '2016-09-15',
      operator: '$gt',
    }],
    out: {
      created_at: {
        $gt: new Date('2016-09-15'),
      },
    },
  },
  {
    in: null,
    out: {},
  },
  {
    in: [{
      property: 'created_at',
      value: '2016-09-15',
      operator: '$gt',
    }, {
      property: 'created_at',
      value: '2016-10-20',
      operator: '$lte',
    }],
    out: {
      created_at: {
        $gt: new Date('2016-09-15'),
        $lte: new Date('2016-10-20'),
      },
    },
  },
];

describe('Query Builder', () => {
  configs.forEach((config) => {
    it(`should return ${JSON.stringify(config.out)} given ${JSON.stringify(config.in)}`, () => {
      assert.deepEqual(qb.build(config.in), config.out);
    });
  });
});
