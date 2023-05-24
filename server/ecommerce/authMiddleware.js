// authMiddleware.js

function requireLogin(req, res, next) {
    console.log(req.session.userId)
    console.log(req.headers.authorization)

    if (!req.headers.authorization) {
        return res.status(401).json({ message: 'Unauthorized' });
    }
    next();
}

module.exports = {
    requireLogin
};