db.createCollection('products', {
    validator: {
        $jsonSchema: {
            bsonType: 'object',
            properties: {
                name: {
                    bsonType: 'string'
                },
                price: {
                    bsonType: "double"
                },
                manufacturerId: {
                    bsonType: 'objectId'
                },
                amount: {
                    bsonType: 'int'
                },
                expiredDate: {
                    bsonType: 'date'
                }
            }
        }
    }
});



db.createCollection('manufacturers', {
    validator: {
        $jsonSchema: {
            bsonType: 'object',
            properties: {
                name: {
                    bsonType: 'string'
                },
                address: {
                    bsonType: 'object',
                    properties: {
                        country: {
                            bsonType: 'string'
                        },
                        city: {
                            bsonType: 'string'
                        }
                    }
                }
            }
        }
    }
})

db.manufacturers.insertOne({
    name: "Hlibzavod",
    address: {
        country: "Ukraine",
        city: "Kharkiv"
    }
})





db.products.aggregate([
    {
        $lookup: {
            from: 'manufacturers',
            localField: 'manufacturerId',
            foreignField: '_id',
            as: 'manufacturer'
        }
    },
    {
        $unwind: {
            path: '$manufacturer'
        }
    },
    {
        $unset: 'manufacturerId'
    },
    {
        $group: {
            _id: '$manufacturer.name',
            productsQuantity: {
                $count: {}
            }

        }
    }
]);



// $lookup
// from - назва колекції з якої потрібно отримати дані для об'єднання
// localField - поле в вихідній колекції, по яякому буде відбуватись з'єднання
// foreignField - поле в зовнішній колекції, по якому буде відбуватись з'єднання
// as - (влфас-псевдонім) результуючий масив після об'єднання 


//$unwind 
// path - поле, яке містить масив, який потрібно розкрутити
// '$manufacturersArray' - знак $ це посилання на поле


//$unset
// може приймати просто одне поле, яке потрібно виключити
// або масив полів, які треба виключити з результату


//$group
// групування за певним полем, або набором полів


//pagination 
// 1   2  3  4  5  6  7  8  9  10
// db.products.find().skip(2).limit(5)
//  3  4  5  6  7