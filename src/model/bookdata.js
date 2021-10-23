const mongoose= require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb+srv://userone:userone@ictakfiles.81fx2.mongodb.net/LIBRARYAPP?retryWrites=true&w=majority');
const schema=mongoose.Schema;

const bookschema= new schema(
    {
        title: String,
        author: String,
        genre:String,
        image:String
    }
);
var bookdata=mongoose.model("bookdata",bookschema);
module.exports=bookdata;