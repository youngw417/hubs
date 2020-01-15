
module.exports = function (req, res, next)  {
    const upper = req.body.name.toUpperCase();
    req.body.name = upper;
    next();
}
