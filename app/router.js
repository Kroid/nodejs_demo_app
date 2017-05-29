var express = require('express')
var router = express.Router();

router.post('/api/users', require('./controllers/api/register_user'));

router.post('/users', require('./controllers/web/register_user'));


module.exports = router;
