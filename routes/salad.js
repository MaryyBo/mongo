const {Router} = require ('express');

const saladRouter = Router();

const SaladController = require ('../controllers/salad.controller');

const {findIngredient} = require ('../middleware/getIngredients')

//GET http://localhost:5000/api/salads
saladRouter.get('/', SaladController.getAllSalads);
saladRouter.post('/', findIngredient, SaladController.createSalad);
saladRouter.get('/:saladId', SaladController.getSalad);
saladRouter.put('/:saladId', SaladController.updateSalad);
saladRouter.delete('/:saladId', SaladController.deleteSalad);


module.exports = saladRouter;