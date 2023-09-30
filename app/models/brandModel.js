const db = require('../db')

async function obtenerBrandPorId(id) {
    try{
        let [rows] = await db.query(`SELECT name FROM brands WHERE id = ${id}`)
        return rows[0];
    }

    catch(err){
        throw err;
    }
}


module.exports = {
    obtenerBrandPorId
  };