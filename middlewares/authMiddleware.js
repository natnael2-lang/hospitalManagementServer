
const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
    const token = req.cookies.token;

    if (!token) {
         return res.status(302).json({redirect:"/login"});
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
         const role = decoded.role; 
         req.role=role;
        next(); 
    } catch (error) {
        return res.status(401).json({ message: 'Invalid token' });
    }
};

module.exports = authMiddleware;