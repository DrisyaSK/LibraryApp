const express=require('Express');
const deleteRouter=express.Router();
const bookdata=require('../model/bookdata');

function router(nav)
{
    deleteRouter.post('/',function(req,res)
    {
        var item=
        {
            title:req.body.title
        }
        bookdata.findOneAndDelete(item)
        .then(function()
        {
            res.redirect("/adminpage");
        })  

    });

    return deleteRouter;
    
}
module.exports = router;