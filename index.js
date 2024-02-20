const { generateHash } = require('./utils');

//generate hash
const hash = generateHash(10);

console.log('Result:', hash);