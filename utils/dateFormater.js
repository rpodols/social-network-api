const dayjs = require('dayjs');

module.exports = (
 addDateSuffix = (date) => {
  let dateStr = dayjs(date).format('YYYY-MM-DD [at] h:mm:ssa')

  return dateStr;
});
