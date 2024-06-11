const {Router} = require ('express');

const ingredientRouter = Router();

const IngredientController = require ('../controllers/ingredient.controller')

//якщо прийде GET http://localhost:5000/api/ingredients

ingredientRouter.get('/', IngredientController.getAllIngredients);

//якщо прийде POST http://localhost:5000/api/ingredients

ingredientRouter.post('/', IngredientController.addIngredient);


module.exports = ingredientRouter;


