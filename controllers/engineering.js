var Engineering = require('../models/engineering');
// List of all Costumes
exports.engineering_list = async function(req, res) {
    try{
    theEngineering = await Engineering.find();
    res.send(theEngineering);
    }
    catch(err){
    res.error(500,`{"error": ${err}}`);
    }
    };
// for a specific Costume.
exports.engineering_detail = function(req, res) {
res.send('NOT IMPLEMENTED: Engineering detail: ' + req.params.id);
};
// Handle Costume create on POST.
exports.engineering_create_post = async function(req, res) {
    console.log(req.body)
    let document = new Engineering();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"costumetype":"goat", "cost":12, "size":"large"}
    document.college = req.body.college;
    document.fee = req.body.fee;
    document.branch = req.body.branch;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.error(500,`{"error": ${err}}`);
    }
    };
// Handle Costume delete form on DELETE.
exports.engineering_delete = function(req, res) {
res.send('NOT IMPLEMENTED: Engineering delete DELETE ' + req.params.id);
};
// Handle Costume update form on PUT.
exports.engineering_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: Engineering update PUT' + req.params.id);
};

// VIEWS
// Handle a show all view
exports.engineering_view_all_Page = async function(req, res) {
    try{
    theEngineering = await Engineering.find();
    res.render('engineering', { title: 'Engineering Search Results', results: theEngineering });
    }
    catch(err){
    res.error(500,`{"error": ${err}}`);
    }
    };