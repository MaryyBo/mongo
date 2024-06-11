const mongoose = require('mongoose');
const Salad = require ('./Salad')
const Ingredient = require ('./Ingredient')

const DB = process.env.DB_NAME || 'fe-test'

start = async () => {
    await mongoose.connect(`mongodb://localhost:27017/${DB}`)
}

start();


module.exports = {
    Salad, Ingredient
}


/*
Salads

name - string
waight - double (вказувати дробні числа)
ingredients - array
sause - string
dietType - string
spicy - booleanC
expired_date - date
 
 */

/*

Салат 1 
Інгредієнт: ['яйця', 'горох'.....]

Салат 2 
Інгредієнт: ['яйця', 'капуста'.....]

Салат 3 
Інгредієнт: ['яйця', 'морква'.....]


---------------------------------------

окрема колекція Інгредієнтів

Інгредієнт 1
Інгредієнт 2
Інгредієнт 3
Інгредієнт 4
Інгредієнт 5

окрема колекція Салатів

Салат 1: [...посилаємось на якість інгредієнти з колекції інгредієнтів]
Салат 2: [...посилаємось на якість інгредієнти з колекції інгредієнтів]
Салат 3: [...посилаємось на якість інгредієнти з колекції інгредієнтів]



*/

