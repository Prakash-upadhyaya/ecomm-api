const successResponseNoData = (res, msg) => {
  return res.status(200).json({
    status: 200,
    message: msg,
  });
};

const successResponseWithData = (res, msg, data) => {
  return res.status(200).json({
    status: 200,
    message: msg,
    data: data,
  });
};

const errorResponseBadRequest = (res, msg) => {
  return res.status(400).json({
    status: false,
    message: msg,
  });
};

const errorResponseNoData = (res, msg) => {
  return res.status(400).json({
    status: false,
    message: msg,
  });
};

module.exports = {
  successResponseNoData,
  errorResponseNoData,
  errorResponseBadRequest,
  successResponseWithData,
};
