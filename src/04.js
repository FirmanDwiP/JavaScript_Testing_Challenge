module.exports = i => (i % 4 == 0) && (i % 100 != 0) || (i % 400 == 0) ? true : false