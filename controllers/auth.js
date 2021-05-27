const User = require("../models/user");

exports.getLogin = (req, res, next) => {
  // console.log(req.get('Cookie').split('=')[1])
  // const isLoggedIn = req.get('Cookie').split('=')[1]
  console.log(req.session);
  res.render("auth/login", {
    path: "/login",
    pageTitle: "Login",
    isAuthenticated: false,
  });
};

exports.postLogin = (req, res, next) => {
  User.findById("6061099116f4ef25db6aebf9")
    .then((user) => {
      console.log(user);
      req.session.isLoggedIn = true;
      req.session.user = user;
      req.session.save(err => {
          console.log(err)
          res.redirect("/");
      });
    })
    .catch((err) => console.log(err));
};

exports.postLogout = (req, res, next) => {
    req.session.destroy(err => {
        console.log(err)
        res.redirect('/')
    })
};
