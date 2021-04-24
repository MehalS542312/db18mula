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
exports.engineering_detail = async function(req, res) {
    console.log("detail"  + req.params.id)
    try {
        result = await Engineering.findById( req.params.id)
        res.send(result)
    } catch (error) {
        res.status(500)
        res.send(`{"error": document for id ${req.params.id} not found`);
    }
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
        res.status(500).send("Not a valid pen");
    }
    };
    //Handle Costume delete on DELETE.
    exports.engineering_delete = async function(req, res) {
        console.log("delete "  + req.params.id)
        try {//
            result = await Engineering.findByIdAndDelete( req.params.id)
            console.log("Removed " + result)
            res.send(result)
        } catch (err) {
            res.status(500)
            res.send(`{"error": Error deleting ${err}}`);
        }
    };
    
// Handle Costume update form on PUT.
exports.engineering_update_put = async function(req, res) {
    console.log(`update on id ${req.params.id} with body ${JSON.stringify(req.body)}`)
    try {
        let toUpdate = await Engineering.findById( req.params.id)
        // Do updates of properties
        if(req.body.college) toUpdate.college = req.body.college;
        if(req.body.fee) toUpdate.fee = req.body.fee;
        if(req.body.branch) toUpdate.branch = req.body.branch;
        let result = await toUpdate.save();
        console.log("Sucess " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": ${err}: Update for id ${req.params.id} failed`);
    }
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

// Handle a show one view with id specified by query
exports.engineering_view_one_Page = async function(req, res) {
    console.log("single view for id "  + req.query.id)
    try{
        result = await Engineering.findById( req.query.id)
        res.render('engineeringdetail', 
{ title: 'Engineering Detail', toShow: result });
    }
    catch(err){
        res.status(500)
        res.send(`{'error': '${err}'}`);
        
    }
};

// Handle building the view for creating a costume.
// No body, no in path parameter, no query.
// Does not need to be async
exports.engineering_create_Page =  function(req, res) {
    console.log("create view")
    try{
        res.render('engineeringcreate', { title: 'Engineering Create'});
    }
    catch(err){
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};

// Handle building the view for updating a costume.
// query provides the id
exports.engineering_update_Page =  async function(req, res) {
    console.log("update view for item "+req.query.id)
    try{
        let result = await Engineering.findById(req.query.id)
        res.render('engineeringupdate', { title: 'Engineering Update', toShow: result });
    }
    catch(err){
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};

// Handle a delete one view with id from query
exports.engineering_delete_Page = async function(req, res) {
    console.log("Delete view for id "  + req.query.id)
    try{
        result = await Engineering.findById(req.query.id)
        res.render('engineeringdelete', { title: 'Engineering Delete', toShow: result });
    }
    catch(err){
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};
