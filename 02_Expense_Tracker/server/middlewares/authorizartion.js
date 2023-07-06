const authMiddleware = (req, res, next) => {
  const token = req.header("Authorization");
  if (!token) {
    return res.status(401).json({ message: "Authorization denied" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded.user;
  } catch (err) {
    console.error(err.message);
    res.status(401).json({ message: "Token is not valid" });
  }

  next();
};

module.exports = authMiddleware;
