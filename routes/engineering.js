var express = require('express');
const engineering_controlers= require('../controllers/engineering');
var router = express.Router();
/* GET costumes */
router.get('/', engineering_controlers.engineering_view_all_Page );
module.exports = router;