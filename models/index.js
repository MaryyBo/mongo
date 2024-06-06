const mongoose = require('mongoose');
const { Schema } = require('mongoose')

const DB = process.env.DB_NAME || 'fe-test'

start = async () => {
    await mongoose.connect(`mongodb://localhost:27017/${DB}`)
}

start();


const saladSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    weight: Number,
    ingredients: {
        type: Array,
        required: true
    },
    sause: String,
    dietType: String,
    spicy: Boolean,
    expired: {
        type: Date,
        required: true,
       validate: {
            validator: (value) => {
                if (value >= new Date()) {
                    // Перевірка терміну придатності
                    return true;
                } else {
                    return false;
                }
            },
            message: 'Salad is expired'
        }
    }
})

const Salad = mongoose.model('Salad', saladSchema);


module.exports = {
    Salad
}


/*
Salads

name - string
waight - double (вказувати дробні числа)
ingredients - array
sause - string
dietType - string
spicy - boolean
expired_date - date
 
 */

