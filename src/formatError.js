const {formatError} = require('graphql');

module.exports = error => {
  const data = formatError(error);
  const {originalError} = error;
  data.field = originalError && originalError.field;
  return data;
};
