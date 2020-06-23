const { v4: uuid4 } = require('uuid');

module.exports = function generateUniqueID(){
  return uuid4();
}