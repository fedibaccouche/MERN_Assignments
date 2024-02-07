const mongoose = require('mongoose');
 
const JokeSchema = new mongoose.Schema({
    setup: {
        type: String,
        required: [true, "setup is required"],
        minlength: [6, "setup must be at least 6 characters long"]
    },
    punchline: {
        type: String,
        required: [true, "punchline is required"],
        minlength: [6, "punchline must be at least 6 characters long"]
    }
});
 
const Joke = mongoose.model('User', JokeSchema);
 
module.exports = Joke;
