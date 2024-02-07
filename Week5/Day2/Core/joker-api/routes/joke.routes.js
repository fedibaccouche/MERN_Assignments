const JokeController = require('../controllers/joke.controller');
 
module.exports = app => {
    app.get('/api/jokes', JokeController.finaAllJokes);
    app.get('/api/jokes/random', JokeController.findOneRandomJoke);
    app.get('/api/jokes/:id', JokeController.findOneSingleJoke);
    app.patch('/api/jokes/:id', JokeController.updateExistingJoke);
    app.post('/api/jokes', JokeController.createNewJoke);
    app.delete('/api/jokes/:id', JokeController.deleteAnExistingJoke);
}
