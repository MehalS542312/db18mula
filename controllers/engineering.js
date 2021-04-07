var Engineering = require('../models/engineering');
// List of all Costumes
exports.engineering_list = function(req, res) {
res.send('NOT IMPLEMENTED: Engineering list');
};
// for a specific Costume.
exports.engineering_detail = function(req, res) {
res.send('NOT IMPLEMENTED: Engineering detail: ' + req.params.id);
};
// Handle Costume create on POST.
exports.engineering_create_post = function(req, res) {
res.send('NOT IMPLEMENTED: Engineering create POST');
};
// Handle Costume delete form on DELETE.
exports.engineering_delete = function(req, res) {
res.send('NOT IMPLEMENTED: Engineering delete DELETE ' + req.params.id);
};
// Handle Costume update form on PUT.
exports.engineering_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: Engineering update PUT' + req.params.id);
};