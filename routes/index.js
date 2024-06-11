const {Router} = require ('express');
const saladRouter = require('./salad');
const ingredientsRouter = require('./ingredients');

const router = Router();

//якщо прийшов запит на http://localhost:5000/api/ingredients то ми передаємо керування:
router.use('/ingredients', ingredientsRouter);

//якщо прийшов запит на http://localhost:5000/api/salads то ми передаємо керування:
router.use('/salads', saladRouter);

module.exports = router;