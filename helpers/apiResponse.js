export const successResponseNoData = (res, msg) => {
  return res.status(200).json({
    status: 200,
    message: msg,
  });
};

export const successResponseWithData = (res, msg, data) => {
  return res.status(200).json({
    status: 200,
    message: msg,
    data: data,
  });
};

export const errorResponseBadRequest = (res, msg) => {
  return res.status(400).json({
    status: false,
    message: msg,
  });
};

export const errorResponseNoData = (res, msg) => {
  return res.status(400).json({
    status: false,
    message: msg,
  });
};
