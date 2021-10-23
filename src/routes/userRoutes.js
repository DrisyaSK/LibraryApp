const express=require('Express');
const userRouter=express.Router();
const bookdata=require('../model/bookdata');
const authordata=require('../model/authordata');

function router(nav)
{
    userRouter.get('/',function(req,res)
    {
        //res.send("hi welcome");
            res.render('../views/userpage',
            {
                nav,
                title:'UserPage'
            });
    });
    userRouter.get('/ubooks',function(req,res)
    {
        bookdata.find()
        .then(function(books){
            res.render("books",{
                nav,
                title:'Books',
                role:'userpage',
                item1:'ubooks',
                item2:'uauthors',
                books
            });
        });
            
    });
    userRouter.get('/ubooks/:id',function(req,res)
    {
        bookdata.find()
        .then(function(books)
        {
            const id =req.params.id;      
            res.render("ubook",
                {
                    nav,
                    title:'Book',
                    role:'userpage',         
                    item1:'ubooks',
                    item2:'uauthors',                
                    book:books[id]
                });
        });
    });
    userRouter.get('/uauthors',function(req,res)
    {
        authordata.find()
        .then(function(authors)
        {
            res.render("authors",
            {
                nav,
                title:'Authors',
                role:'userpage',
                item1:'ubooks',
                item2:'uauthors',                
                authors 
            });
        });
    });
    userRouter.get('/uauthors/:id',function(req,res)
    {
        authordata.find()
        .then(function(authors)
        {
            const id =req.params.id;      
            res.render("uauthor",
                {
                    nav,
                    title:'Author',         
                    role:'userpage',
                    item1:'ubooks',
                    item2:'uauthors',                
                    author:authors[id]
                });
        });
    });


    return userRouter;
}
module.exports = router;