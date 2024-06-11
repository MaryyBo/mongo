const { Ingredient } = require('../models')

module.exports.addIngredient = async (req, res, next) => {
    try {
        const { body } = req;

        console.log(body);

        const createdIngredient = await Ingredient.create(body)

        console.log(createdIngredient, 'INGREDIENTS');

        return res.status(200).send(createdIngredient)

    } catch (error) {
        console.log('qqq', error)
        next(error);
    }
}


module.exports.getAllIngredients = async (req, res, next) => {
    try {

        const allIngredients = await Ingredient.find({}); //знайде всі документи {}

        return res.status(200).send(allIngredients)
        
    } catch (error) {
        console.log('qqq222', error)
        next(error);
    }
}
