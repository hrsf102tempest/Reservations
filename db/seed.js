const { entries } = require('./dbGeneration');
const { seed } = require('./app');

seed(entries);
