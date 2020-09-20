// Trials


const { MongoClient, ObjectID } = require("mongodb");

const connectionURL = "mongodb://127.0.0.1:27017";
const databseName = "task-manager";

const id = new ObjectID();
console.log(id);
console.log(id.getTimestamp());

// Connect to server
MongoClient.connect(connectionURL, { useNewUrlParser: true, useUnifiedTopology: true }, (error, client) => {
    if(error)
    {
        console.log("Unable to connect to database");
        return;
    }

    // Connection established
    console.log("Connected successfully");

    // database will be created automatically 
    const db = client.db(databseName);

    /*db.collection("users").insertOne({
        name : "Sohaila",
        age : 27
    }, (error, result) => {
        if(error)
        {
            console.log("Unable to insert user");
            return;
        }

        console.log(result.ops);

    });*/

    /*db.collection("tasks").insertMany([
        {
            description : "Buy soap",
            completed : false
        },
        {
            description : "Call mother in law",
            completed : true
        },
        {
            description : "Check card functionalities with the bank",
            completed : false
        }
    ], (error, result) => {
        if(error)
        {
            console.log("Unable to insert tasks");
            return;
        }

        console.log(result.ops);
    });*/


});

