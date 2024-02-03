// src/middleware/pathHandler.js
const pathHandler = (req, res, next) => {
    console.log(`Request received on path: ${req.path}`);
    next();
  };
  
  module.exports = pathHandler;
  