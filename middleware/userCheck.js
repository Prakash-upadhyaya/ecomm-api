const simpleMiddleware = (req, res, next) => {
  console.log("Im middleware");
  next();
};
module.exports = {
  simpleMiddleware,
};
