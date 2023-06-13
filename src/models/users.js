const pool = require('../config/database');

const getAllUsers = () =>{
    const SQLQuery = "SELECT * FROM users";

    return pool.execute(SQLQuery);
}

const getByid = (id) => {
    const SQLQuery = `SELECT * FROM users WHERE id = ${id}`;
    return pool.execute(SQLQuery);
}

const createUser = (body) => {
    const { name, email, address } = body;
    const SQLQuery = `  INSERT INTO users (name, email, address)
                        VALUES ("${name}", "${email}", "${address}")`;

    return pool.execute(SQLQuery);
}

const updateUser = (body, id) => {
    const { name, email, address } = body;
    const SQLQuery = `  UPDATE users
                        SET name = "${name}", email = "${email}", address = "${address}"
                        WHERE id = ${id}`;

    return pool.execute(SQLQuery);
}

const deleteUser = (id) => {
    const SQLQuery = `DELETE FROM users WHERE id = ${id}`;

    return pool.execute(SQLQuery);
}



    
module.exports = {
    getAllUsers,
    createUser,
    updateUser,
    getByid,
    deleteUser,
}