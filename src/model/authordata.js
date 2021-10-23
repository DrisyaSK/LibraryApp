const mongoose= require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb+srv://userone:userone@ictakfiles.81fx2.mongodb.net/LIBRARYAPP?retryWrites=true&w=majority');
const schema=mongoose.Schema;

const authorschema= new schema(
    {
        name: String,
        notable_works: String,
        genre:String,
        image:String
    }
);
var authordata=mongoose.model("authordata",authorschema);
module.exports=authordata;