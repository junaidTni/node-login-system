const jsonResponse = (res, status, message, data = [], statuscode = 200) => {
    res.status(statuscode).json({ status: status, message: message, data: data });
};
module.exports = jsonResponse;