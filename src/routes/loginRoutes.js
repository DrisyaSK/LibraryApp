const express=require('Express');
const loginRouter=express.Router();
const userdata=require("../model/userdata");


function router(nav)
{
    loginRouter.post('/', function(req,res)
    {
        var us=req.body.userlgn;
        var ps=req.body.passlgn;
        userdata.findOne({$and: [{username:us},{password:ps}]})
        .then (function(us)
        {
            
            if(us.username=="admin")
                res.redirect('/adminpage');
            else 
                res.redirect('/userpage');
        })
        .catch(function(e)
        {
            res.send("Invalid Login Details!!! Try Again Please");
            
            
        })
    });

    return loginRouter;
}

module.exports=router;