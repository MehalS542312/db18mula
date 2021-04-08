var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var engineering_controller = require('../controllers/engineering');
/// API ROUTE ///
// GET resources base.
router.get('/resource', api_controller.api);
/// COSTUME ROUTES ///
// POST request for creating a Costume.
router.post('/resource/engineering', engineering_controller.engineering_create_post);
// DELETE request to delete Costume.
router.delete('/resource/engineering/:id', engineering_controller.engineering_delete);
// PUT request to update Costume.
router.put('/resource/engineering/:id', engineering_controller.engineering_update_put);
// GET request for one Costume.
router.get('/resource/engineering/:id', engineering_controller.engineering_detail);
// GET request for list of all Costume items.
router.get('/resource/engineering', engineering_controller.engineering_list);
module.exports = router;