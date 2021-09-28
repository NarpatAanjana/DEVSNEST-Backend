________________________THA 12 _______________________________________
**********************************************************************


/*
level-3
Check if email already exist
hash the password
convert email in lowercase
sAVE
*/

const User = require("../models/mongo");
const bcrypt = require("bcrypt");

const saltRounds = 10;
const register = async (req, res) => {
  const { email, password } = req.body;

  try {
    const alreadyExist = await User.findOne({ where: { email } });
    if (alreadyExist) {
      res.status(401).send("user email already exist");
    }

    const salt = bcrypt.genSaltSync(saltRounds);
    const hash = bcrypt.hashSync(password, salt);

    const newUser = new User({ email: email.toLowerCase(), password: hash , fullName:"abhishek"});

    const savedUser = await newUser.save();

    res.status(201).send(savedUser);


  } catch (error) {
    console.log(error);
    res.status(500).send("something wenr wrong");
  }
};

module.exports = register;