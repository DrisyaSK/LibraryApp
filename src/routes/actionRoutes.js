const express=require('Express');
const actionRouter=express.Router();
const bookdata=require('../model/bookdata');

function router(nav)
{
    actionRouter.get('/',function(req,res)
    {
        
        res.render("delete",
        {
            nav,
            title:"Update/Delete",
            role:'book',
            tag:'book title'
        });

    });

    return actionRouter;
    
}
module.exports = router;