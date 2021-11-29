const moment = require('moment');

const toDate = (date) => moment(date, 'DD/MM/YYYY').toDate();

module.exports = toDate;
