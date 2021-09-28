/*level-1
email validation - string
password valication - min 6, uppercase , lowercase
password === confirm pass
*/

const { emailValidate, passwordValidate } = require("../utils/validate");

const registerInitialCheck = (req, res, next) => {
  const { email, password, confirmPassword } = req.body;
  if (
    typeof email === "string" &&
    typeof password === "string" &&
    typeof confirmPassword === "string" &&
    email.length > 0 &&
    password.length > 8 &&
    confirmPassword === password &&
    emailValidate(email) &&
    passwordValidate(password)
  ) {
    next();
  } else {
    res.status(401).send("initial check fail");
  }
};

module.exports = registerInitialCheck;