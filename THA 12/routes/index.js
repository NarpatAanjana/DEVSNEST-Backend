var express = require('express');
var router = express.Router();
var registerInitialCheck = require('../middlewares/registerChecks')
var register = require('../controllers/register')
/* GET home page. */
router.get('/', function(req, res, next) {

    const sess = req.session;     //get ahold of redis
    sess.username = 'abhishek';    // just simpliy define key and value


  res.render('index', { title: 'Express' });
});


/*
@requires {email,firstName,lastName,password,confirmPassword} -- req.body
* @description 
security,performance and edgecases
level-1
email validation - string
password valication - min 6, uppercase , lowercase
password === confirm pass
level-2
js/sql
level-3
Check if email already exist
hash the password
convert email in lowercase
sAVE
*/

router.post('/register',registerInitialCheck,register)

module.exports = router;