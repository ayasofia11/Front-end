const jwt = require('jsonwebtoken');

function authMiddleware(req, res, next) {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).json({ message: 'Token manquant' });

  try {
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    req.user = decoded; // ⬅️ Données injectées dans req.user
    next();
  } catch (err) {
    return res.status(403).json({ message: 'Token invalide' });
  }
}

module.exports = authMiddleware;