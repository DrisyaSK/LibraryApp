const mongoose= require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb+srv://userone:userone@ictakfiles.81fx2.mongodb.net/LIBRARYAPP?retryWrites=true&w=majority');
const schema=mongoose.Schema;

const userschema= new schema(
    {
        username: String,
        password:String
    }
);
var userdata=mongoose.model("userdata",userschema);
module.exports=userdata;