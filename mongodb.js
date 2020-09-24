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

    /********** Insert ****************/

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

    /********** Read ****************/
    /*db.collection("users").findOne({ name : "Sohaila" }, (error, user) => {
        if(error)
        {
            console.log("Unable to fetch user");
            return;
        }

        console.log(user);

    });*/

    /* returns a cursor, which is transformed to array, 
    which takes a callback to be run on each element */
    /*
    db.collection("tasks").find({ completed : false }).toArray((error, task) => {
        if(error)
        {
            console.log("Unable to fetch task");
            return;
        }

        console.log(task);

    });*/


    /********** Update ****************/
    const updatePromise = db.collection("users").updateOne({ _id : new ObjectID("5f5fdb48456dad09f33f3a7c") }, {
        $set: {
            name : 'Bro'
        }
    });

    updatePromise.then( (result) => {
        console.log("success");
    }).catch( (error) => {
        console.log("error")
    });


    

});

