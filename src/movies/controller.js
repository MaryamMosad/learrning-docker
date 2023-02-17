const Movie = require('./model')
exports.getAllMovies = async (req, res) => {
    try {
        const movies = await Movie.find({})
        res.send(movies)
    } catch (e) {
        console.log(e)
        res.status(500).send('Something Went very wrong');
    }
}

exports.addNewMovie = async (req, res) => {
    try {
        const movie = await Movie.create({ ...req.body })
        res.send(movie)
    }
    catch (e) {
        res.status(500).send('Something Went very wrong while creating the movie');

    }
}