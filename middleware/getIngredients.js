const { Ingredient } = require('../models');

module.exports.findIngredient = async (req, res, next) => {
    try {
        const { body: { ingredients } } = req;

        const ingredientsObjectIdArray = [];

        for (let i = 0; i < ingredients.length; i++) {
            const ingredientObject = await Ingredient.findOne({ name: ingredients[i] });

            if (!ingredientObject) {
                return res.status(404).send({ message: `Ingredient ${ingredients[i]} not found` });
            }

            ingredientsObjectIdArray.push(ingredientObject['_id']);

            console.log(ingredientObject);  // Логування всередині циклу
        }

        req.ingredients = ingredientsObjectIdArray;
        next();
    } catch (error) {
        next(error);
    }
}