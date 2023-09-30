const db = require('../db')

async function obtenerStationPorId(id) {
    try{
        let [rows]= await db.query(`SELECT * FROM stations_brands WHERE id = ${id}`)
        return rows[0];

    }
    catch(err){
        throw err;
    }
}

async function obtenerStation_por_cre_id(id) {
    try{
        let [rows]= await db.query(`SELECT * FROM stations WHERE cre_id = "${id}"`)
        return rows[0];

    }
    catch(err){
        throw err;
    }
}

async function obtenerDistancia(cre_id) {
    try{
        let [rows]= await db.query(`SELECT distance FROM stations_competitors WHERE cre_id = "${cre_id}"`)
        return rows[0];
    }
    catch(err){
        throw err;
    }
}

async function devolver_cre_id_competitors(cre_id) {
    try{
        let [rows]= await db.query(`SELECT cre_id_competitor FROM stations_competitors WHERE cre_id = "${cre_id}"`)
        return rows;
    }
    catch(err){
        throw err;
    }
}


module.exports = {
    obtenerStationPorId,
    obtenerStation_por_cre_id,
    obtenerDistancia,
    devolver_cre_id_competitors
  };