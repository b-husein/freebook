const mongodb = require("mongodb"); 

const connectionString = "mongodb+srv://social:social123@cluster0.hr61i.mongodb.net/social-media?retryWrites=true&w=majority";

mongodb.connect(connectionString, {useNewUrlParser: true, useUnifiedTopology: true}, function(err, client){
    module.exports = client.db();
    const app = require("./app");
    app.listen(3000);
});

