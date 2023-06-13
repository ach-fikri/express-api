const logRequst = (req, res, next) => {
    console.log("This is middleware", req.path, req.method);
    next();
}   

module.exports = logRequst;