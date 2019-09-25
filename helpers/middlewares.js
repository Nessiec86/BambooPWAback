const createError = require('http-errors');

exports.isLoggedIn = () => (req, res, next) => {
  if (req.session.currentUser) {
    next();
  } else {
    next(createError(401));
  }
};

exports.isNotLoggedIn = () => (req, res, next) => {
  if (!req.session.currentUser) {
    next();
  } else {
    next(createError(403));
  }
};

exports.validationLoggin = () => (req, res, next) => {
  const { username, password } = req.body;

  if (!username || !password) {
    next(createError(422))
  } else {
    next();
  }
}
exports.anonRoute = () => (req, res, next) => {
  if (req.session.currentUser) {
    res.redirect('/user');
  } else {
    next();
  }
}
exports.checkRole = (role) => {
  return (req, res, next) => {
    if (req.session.currentUser.role === role) {
      next();
    } else {
      res.redirect('login');
    }
  };
}
