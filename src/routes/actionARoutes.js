const express=require('Express');
const actionARouter=express.Router();
const authordata=require('../model/authordata');

function router(nav)
{
    actionARouter.get('/',function(req,res)
    {
        
        res.render("delete",
        {
            nav,
            title:"Update/Delete",
            role:"author",
            tag:'author name'
        });

    });

    return actionARouter;
    
}
module.exports = router;