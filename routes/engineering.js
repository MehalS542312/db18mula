var express = require('express');
const engineering_controlers= require('../controllers/engineering');
var router = express.Router();
// A little function to check if we have an authorized user and continue on
// or
// redirect to login.
const secured = (req, res, next) => {
    if (req.user){
        return next();
    }
    req.session.returnTo = req.originalUrl;
    res.redirect("/login");
    }
/* GET costumes */
router.get('/', engineering_controlers.engineering_view_all_Page );
module.exports = router;
/* GET detail costume page */
router.get('/detail', engineering_controlers.engineering_view_one_Page);
/* GET create costume page */
router.get('/create', secured, engineering_controlers.engineering_create_Page);

/* GET create update page */
router.get('/update', secured, engineering_controlers.engineering_update_Page);
/* GET create costume page */
router.get('/delete',  secured, engineering_controlers.engineering_delete_Page);

