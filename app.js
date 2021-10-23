const express=require('Express');
const app= new express();
var bodyParser = require('body-parser');
const port=process.env.PORT||5555;
const nav=[
        {
        link:'/books',
        name:'Books'
        },
        {
        link:'/authors',
        name:'Authors'
        },
        {
            link:'/',
            name:'Logout'
        }
    ];


const signinRouter=express.Router();


const authorsRouter=require('./src/routes/authorRoutes')(nav);
const signupRouter=require('./src/routes/signupRoutes')(nav);
const loginRouter=require('./src/routes/loginRoutes')(nav);
const adminRouter=require('./src/routes/adminRoutes')(nav);
const userRouter=require('./src/routes/userRoutes')(nav);
const actionRouter=require('./src/routes/actionRoutes')(nav);
const actionARouter=require('./src/routes/actionARoutes')(nav);
const deleteRouter=require('./src/routes/deleteRoutes')(nav);
const deleteARouter=require('./src/routes/deleteARoutes')(nav);

app.use(express.urlencoded({
    extended: true
 }));
 
app.use(express.json());
app.use(express.static('./public'));
app.set('view engine','ejs');
app.set('views','./src/views');
app.use('/signin',signinRouter);
app.use('/signup',signupRouter);
app.use('/login',loginRouter);
app.use('/adminpage',adminRouter);
app.use('/books',adminRouter);
app.use('/authors',adminRouter);
app.use('/userpage',userRouter);
app.use('/ubooks',userRouter);
app.use('/uauthors',userRouter);
app.use('/addbook',adminRouter);
app.use('/savebook',adminRouter);
app.use('/addauthor',adminRouter);
app.use('/saveauthor',adminRouter);
app.use('/actions',actionRouter);
app.use('/actionsauthor',actionARouter);
app.use('/deletebook',deleteRouter);
app.use('/deleteauthor',deleteARouter);


//console.log(__dirname);
app.get('/',function(req,res)
    {
        //res.send("hello world");
        res.render("index",{
                
                title:'Library'  
        });
    });
    signinRouter.get('/',function(req,res)
    {
        
        res.render("signin",{
            nav,
            title:'SignIn',
             
        });
    });
    
app.listen(port);
console.log("server ready at "+port);