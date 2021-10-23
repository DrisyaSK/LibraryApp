const express=require('Express');
const authorsRouter=express.Router();
function router(nav)
{

    var authors=
    [
                {
                    name:'J K Rowling',
                    DOB:'31/7/1965',
                    genre:'Fiction,Fantasy,Drama',
                    img:'rowling.jpg'
                },
                {
                    name:'Arundhati Roy',
                    DOB:'24/11/1961',
                    genre:'Fiction,Non-fiction',
                    img:'arundhati.jpg'
                },
                {
                    name:'R K Narayan',
                    DOB:'10/10/1906',
                    genre:'Fiction,mythology',
                    img:'narayan.jpg'
                }
    ]
    /*authorsRouter.get('/',function(req,res)
    {
        res.render("authors",{
            nav,
            title:'Authors',
            authors 
        });
    });
    authorsRouter.get('/:id',function(req,res)
    {
        const id =req.params.id;
        res.render('author',
                {
                    nav,
                    title:'Author',         
                    author:authors[id]
                });
    });*/ 
    return authorsRouter;
}
module.exports=router;