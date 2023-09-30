const db = require('../db')

async function obtenerPricesPerId(id) {
    try{
        let [rows] = await db.query(`SELECT product, value FROM prices WHERE cre_id = '${id}'`)
        return rows;
    }

    catch(err){
        throw err;
    }
}

async function obtenerProductosCompetidores(id) {
    try{
        let [rows] = await db.query(`SELECT product, value FROM prices WHERE cre_id <> '${id}'`)
        return rows;
    }

    catch(err){
        throw err;
    }
}

async function obtenerDiferenciaDePrecio(cre_id_competitors) {
    try{
        //buscar en prices donde el cre_id este en cre_id_competitors los productos que tengan el mismo nombre que mis productos y la diferencia de precio
    }

    catch(err){
        throw err;
    }
}


module.exports = {
    obtenerPricesPerId,
    obtenerProductosCompetidores
  };