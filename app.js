const express=require('Express');
const booksRouter=express.Router();
const authorsRouter=express.Router();
const signinRouter=express.Router();
const signupRouter=express.Router();
const app= new express();
app.use(express.static('./public'));
app.set('view engine','ejs');
app.set('views','./src/views');
app.use('/books',booksRouter);
app.use('/authors',authorsRouter);
app.use('/signin',signinRouter);
app.use('/signup',signupRouter);
//console.log(__dirname);
app.get('/',function(req,res)
    {
        //res.send("hello world");
        res.render("index",{
                nav: [
                        {
                        link:'/SignIn',
                        name:'SignIn'
                        },
                        {
                            link:'/SignUp',
                            name:'SignUp'
                            },
                        {
                        link:'/books',
                        name:'Books'
                        },
                        {
                        link:'/authors',
                        name:'Authors'
                        }],
                title:'Library'  
        });
    });
    var books=
            [
                {
                    title:'Starting With ANDROID',
                    author:'M M Sharma',
                    genre:'Technology',
                    img:'android.jpg'
                },
                {
                    title:'The Jungle Book',
                    author:'Rudyard Kipling',
                    genre:'cartoon',
                    img:'jungle.jpg'
                },
                {
                    title:'PICHAI: The Future Of Google',
                    author:'Jagmohan S Bhanver',
                    genre:'Technology',
                    img:'pichai.jpg'
                }
            ]
    booksRouter.get('/',function(req,res){
        res.render("books",{
            nav: [
                    {
                    link:'/SignIn',
                    name:'SignIn'
                    },
                    {
                        link:'/SignUp',
                        name:'SignUp'
                        },
                    
                    {
                    link:'/books',
                    name:'Books'
                    },
                    {
                    link:'/authors',
                    name:'Authors'
                    }],
            title:'Books',
            books 
        });
    });
    booksRouter.get('/:id',function(req,res)
    {
        const id =req.params.id;
        res.render('book',
                {
                    nav:[
                        {
                            link:'/SignIn',
                            name:'SignIn'
                            },
                            {
                                link:'/SignUp',
                                name:'SignUp'
                                },
                            
                            {
                            link:'/books',
                            name:'Books'
                    },
                    {
                        link:'/authors',
                        name:'Authors'
                    }],
                    title:'Book',         
                    book:books[id]
                });
    }); 
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
    authorsRouter.get('/',function(req,res)
    {
        res.render("authors",{
            nav: [
                {
                    link:'/SignIn',
                    name:'SignIn'
                    },
                    {
                        link:'/SignUp',
                        name:'SignUp'
                        },
                    
                    {
                    link:'/books',
                    name:'Books'
                    },
                    {
                    link:'/authors',
                    name:'Authors'
                    }],
            title:'Authors',
            authors 
        });
    });
    authorsRouter.get('/:id',function(req,res)
    {
        const id =req.params.id;
        res.render('author',
                {
                    nav:[
                        {
                            link:'/SignIn',
                            name:'SignIn'
                            },
                            {
                                link:'/SignUp',
                                name:'SignUp'
                                },
                            
                            {
                            link:'/books',
                            name:'Books'
                    },
                    {
                        link:'/authors',
                        name:'Authors'
                    }],
                    title:'Author',         
                    author:authors[id]
                });
    }); 
    signinRouter.get('/',function(req,res)
    {
        
        res.render("signin",{
            nav: [
                {
                    link:'/SignIn',
                    name:'SignIn'
                    },
                    {
                        link:'/SignUp',
                        name:'SignUp'
                        },
                    
                    {
                    link:'/books',
                    name:'Books'
                    },
                    {
                    link:'/authors',
                    name:'Authors'
                    }],
            title:'SignIn',
             
        });
    });
    signupRouter.get('/',function(req,res)
    {
        
        res.render("signup",{
            nav: [
                {
                    link:'/SignIn',
                    name:'SignIn'
                    },
                    {
                        link:'/SignUp',
                        name:'SignUp'
                        },
                    
                    {
                    link:'/books',
                    name:'Books'
                    },
                    {
                    link:'/authors',
                    name:'Authors'
                    }],
            title:'SignUp',
             
        });
    });
    
    
app.listen(5555);
console.log("server ready at 5555");