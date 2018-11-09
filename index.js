app.get('/configuration', function(req,res){
    res.render("configuration", {id : req.query['id'], type : req.query['type'] });
});