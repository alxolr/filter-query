function isDate(value) {
  return /^[0-9]{4}-[0-9]{2}-[0-9]{2}$/gi.test(value);
}

function buildOperatorValue(filter) {
  const operator = filter.operator;
  let value = filter.value;
  let result = {};

  if (isDate(value)) {
    value = new Date(value);
  }

  if (operator !== null) {
    result[operator] = value;
  } else {
    result = value;
  }

  return result;
}


module.exports.build = (filters) => {
  if (!filters) return {};

  return filters.reduce((acc, filter) => {
    if (acc[filter.property] !== undefined) {
      acc[filter.property] = Object.assign(acc[filter.property], buildOperatorValue(filter));
    } else {
      acc[filter.property] = buildOperatorValue(filter);
    }

    return acc;
  }, {});
};

