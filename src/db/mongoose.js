const mongoose = require("mongoose")
const connectionURL = "mongodb+srv://Abdallah:sohaila@cluster0.jxz5n.azure.mongodb.net/task-manager-api?retryWrites=true&w=majority"

mongoose.connect(connectionURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
})

const User = mongoose.model('User', {
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        validate(value){
            if(value < 0)
                throw new Error('Age must be positive value')
        }
    }
})

const Task = mongoose.model('Task', {
    description: {
        type: String
    },
    completed: {
        type: Boolean
    }
})

/*
const me = new User({
    name: 'Abdallah',
    age: 'Mike'
})

me.save().then(() => {
    console.log(me);
}).catch((error) => {
    console.log("Error ! : ", error)
})


const firstTask = new Task({
    description: "Haircut",
    completed: false
})

firstTask.save().then(() => {
    console.log(firstTask);
}).catch((error) => {
    console.log("Error ! : ", error)
})
*/