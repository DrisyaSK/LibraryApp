const express=require('Express');
const deleteARouter=express.Router();
const authordata=require('../model/authordata');

function router(nav)
{
    deleteARouter.post('/',function(req,res)
    {
        var item=
        {
            name:req.body.title
        }
        authordata.findOneAndDelete(item)
        .then(function()
        {
            res.redirect("/adminpage");
        })  

    });

    return deleteARouter;
    
}
module.exports = router;