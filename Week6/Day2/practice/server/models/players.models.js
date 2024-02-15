const mongoose = require('mongoose');

const StatusSchema = new mongoose.Schema({
    status: {
        type: String,
        enum: ["Playing", "Not Playing", "Undecided"],
        default: "Undecided"
    }
});

const PlayersSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "name is required"],
        minlength: [2, "name must be at least 2 characters long"]
    },
    position: {
        type: String,
    },
    status: {
        type: [String],
        default: ["Undecided" , "Undecided" , "Undecided" ]
    }
    },
    {timestamps:true}
        
        );
const Players = mongoose.model('Player',PlayersSchema);
 
module.exports =Players;


