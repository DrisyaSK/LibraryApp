const express=require('Express');
const adminRouter=express.Router();
const bookdata=require('../model/bookdata');
const authordata=require('../model/authordata');

function router(nav)
{
    adminRouter.get('/',function(req,res){
        res.render('../views/adminpage',{
            nav,
            title:'Administrator'
            
        });
        //res.send("hi welcome");
        adminRouter.get('/books',function(req,res)
        {
            bookdata.find()
            .then(function(books)
            {
               // res.send(books);
                res.render("books",{
                    nav,
                    title:'Books',
                    role:'adminpage',
                    item1:'books',
                    item2:'authors',                
                    books 
                });
            });
        });

    adminRouter.get('/books/:id',function(req,res)
    {
        bookdata.find()
        .then(function(books)
        {
            const id =req.params.id;
            //res.send("hih");
            res.render('book',
            {
                nav,
                title:'Book',    
                role:'adminpage',     
                item1:'books',
                item2:'authors',                                    
                book:books[id]
            });
        });
    });
         
    });
    adminRouter.get('/authors',function(req,res)
    {
        authordata.find()
        .then(function(authors)
        {
            res.render("authors",
            {
                nav,
                title:'Authors',
                role:'adminpage',
                item1:'books',
                item2:'authors',                                    
                authors 
            });
        });
    });
    adminRouter.get('/authors/:id',function(req,res)
    {
        authordata.find()
        .then(function(authors)
        {
            const id =req.params.id;      
            res.render('author',
                {
                    nav,
                    title:'Author',         
                    role:'adminpage',
                    item1:'books',
                    item2:'authors',                                    
                    author:authors[id]
                });
        });
    });
    adminRouter.get('/addbook',function(req,res)
    {
        res.render('addbook',
        {
            nav,
            title:'Adding Book',
            role:'adminpage'
        })
    });
    adminRouter.post('/savebook',function(req,res)
    {
        var item={
            author: req.body.author,
            genre: req.body.genre,
            image: req.body.image,
            title: req.body.title        
        }

        var book=bookdata(item);
        book.save();
        res.redirect('/adminpage');
    });

    adminRouter.get('/addauthor',function(req,res)
    {
        res.render('addauthor',
        {
            nav,
            title:'Adding Author Details',
            role:'adminpage'
        })
    });
    adminRouter.post('/saveauthor',function(req,res)
    {
        var item={
            'genre': req.body.genre,
            'image': req.body.image,          
            'name': req.body.names,
            'notable_works': req.body.works,            
        }

        var author=authordata(item);
        author.save(function(err){
            if(err)
                res.send("error   "+err );
            
        });
        res.redirect('/adminpage');
    });
    
    
    return adminRouter;
}

module.exports=router;
