if (global.BigInt === undefined) {
  console.log('Big Integer not found globally!!!!');
  global.BigInt = require('big-integer');
}
