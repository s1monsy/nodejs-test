module.exports = (req, res, next) => {
  if (!req.sesion.isLoggedIn) {
    return res.redirect("/login");
  }
  next();
};
