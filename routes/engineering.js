var express = require('express');
const engineering_controlers= require('../controllers/engineering');
var router = express.Router();
/* GET costumes */
router.get('/', engineering_controlers.engineering_view_all_Page );
module.exports = router;
/* GET detail costume page */
router.get('/detail', engineering_controlers.engineering_view_one_Page);
/* GET create costume page */
router.get('/create', engineering_controlers.engineering_create_Page);
/* GET create update page */
router.get('/update', engineering_controlers.engineering_update_Page);
/* GET create costume page */
router.get('/delete', engineering_controlers.engineering_delete_Page);

