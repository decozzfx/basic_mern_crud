import {Sequelize} from 'sequelize'

const db = new Sequelize('mern_db', 'root', 'root123', { // 'db name' , 'username' , 'password' , {option}
    host : "localhost",  // host address
    dialect : "mysql"    // db type
})

export default db