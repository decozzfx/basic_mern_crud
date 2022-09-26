import { Sequelize } from "sequelize";
import db from '../config/database.js'

const { DataTypes } = Sequelize

const Products = db.define('products', { //schema of table
    title:{                             // field in table
        type : DataTypes.STRING         // adjust type like in db
    },                   
    price:{
        type : DataTypes.DOUBLE
    },
    // createAt, updateAt  // tidak perlu membuat 2 field tersebut, karena secara default sudah dihandle sequelize
}, {  // opsi
    freezeTableName : true, // nama products harus sama dengan nama table di database
})

export default Products