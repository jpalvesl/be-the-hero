const { v4: uuidv4 } = require('uuid');

module.exports = function generateUniqueID(){
  return uuidv4()
}