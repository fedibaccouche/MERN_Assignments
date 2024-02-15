const Player = require('../models/players.models');
 
module.exports.findAllPlayers = (req, res) => {
    Player.find()
        .then((allDaPlayers) => {
            res.json({ Players: allDaPlayers })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });
}
 
module.exports.findOneSinglePlayer = (req, res) => {
    Player.findOne({ _id: req.params.id })
        .then(oneSinglePlayer => {
            res.json({ Player: oneSinglePlayer })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });}


module.exports.findOneRandomPlayer = (req, res) => {
     Player.aggregate([{ $sample: { size: 1 } }]) 
     .then(randomPlayer=>{
        res.json({"Random Player":randomPlayer[0]})
     })
     .catch((err) => {
        res.json({ message: 'Something went wrong', error: err })
    });}

    



 
module.exports.createNewPlayer = (req, res) => {
    Player.create(req.body)
        .then(newlyCreatedPlayer => {
            res.json({ Player: newlyCreatedPlayer })
        })
        .catch((err) => {
            res.status(400).json({ message: 'Something went wrong', error: err })
        });}
 
module.exports.updateExistingPlayer = (req, res) => {
    Player.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedPlayer => {
            res.json({ Player: updatedPlayer })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });}
 
module.exports.deleteAnExistingPlayer = (req, res) => {
    Player.deleteOne({ _id: req.params.id })
        .then(result => {
            res.json({ result: result })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });}
