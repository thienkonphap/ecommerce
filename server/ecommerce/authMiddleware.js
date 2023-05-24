// authMiddleware.js

function requireLogin(req, res, next) {
    if (!req.session.userId) {
        return res.status(401).json({ message: 'Unauthorized' });
    }
    next();
}

module.exports = {
    requireLogin
};