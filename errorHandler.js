const { Error: { ValidationError, CastError } } = require('mongoose')

module.exports.errorHandler = async (err, req, res, next) => {
    if (err instanceof ValidationError) {
        console.log('111', err);
        return res.status(400).send(err.message)
    }

    if (err instanceof CastError) {
        console.log('222', err);
        return res.status(400).send('Invalid ObjectId');
    }

    console.log('333', err);

    return res.status(500).send('Unknown error');

}