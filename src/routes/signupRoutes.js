const express=require('Express');
const signupRouter=express.Router();
const userdata=require('../model/userdata');
function router(nav)
{
    signupRouter.post('/',function(req,res)
    {
        try
        {
            var data={
                username: req.body.username,
                password: req.body.password
            }
            var user=userdata(data);
            user.save();
            
            res.redirect('/');
        }
        catch(e)
        {
            console.log(e);
        }


    });

    return signupRouter;
}

module.exports=router;
    