var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var Engineering_controller = require('../controllers/engineering');
/// API ROUTE ///
// GET resources base.
router.get('/resource', api_controller.api);
/// COSTUME ROUTES ///
// POST request for creating a Costume.
router.post('/resource/engineering', Engineering_controller.Engineering_create_post);
// DELETE request to delete Costume.
router.delete('/resource/engineering/:id', Engineering_controller.Engineering_delete);
// PUT request to update Costume.
router.put('/resource/engineering/:id', Engineering_controller.Engineering_update_put);
// GET request for one Costume.
router.get('/resource/engineering/:id', Engineering_controller.Engineering_detail);
// GET request for list of all Costume items.
router.get('/resource/engineering', Engineering_controller.Engineering_list);
module.exports = router;