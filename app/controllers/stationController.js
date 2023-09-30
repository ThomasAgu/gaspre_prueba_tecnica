// productoController.js
const express = require('express');
const router = express.Router();
const stationModel = require('../models/stationModel');
const brandModel = require('../models/brandModel');
const pricesModel = require('../models/pricesModel')

router.get('/:id', async (req, res) => {
  const stationId = Number(req.params.id);
  try {
    const station_brand = await stationModel.obtenerStationPorId(stationId);
    const brand = await brandModel.obtenerBrandPorId(station_brand.id_brand);
    const station = await stationModel.obtenerStation_por_cre_id(station_brand.cre_id)
    const prices = await pricesModel.obtenerPricesPerId(station_brand.cre_id);
    const distance = await stationModel.obtenerDistancia(station_brand.cre_id);
    
    const competidores = await stationModel.devolver_cre_id_competitors(station_brand.cre_id)
    //
    //const cre_id_competitors = (competidores.map((el) => stationModel.devolver_cre_id_competitors(el.cre_id_competitor)))
    //const products_competitors = cre_id_competitors.map((el) =>  pricesModel.obtenerPricesPerId(el))
    try {
        const products_competitors = await Promise.all(promesas);
        // `products_competitors` contendrá un arreglo con los resultados de cada promesa
        console.log(products_competitors);
    }
    catch (error) {
    // Manejo de errores
    }
    if (!station) {
      return res.status(404).json({ error: 'Estacion no encontrada' });
    }

    const data = {
        'marca': brand.name,
        'nombre':station.name,
        'precio_por_producto': prices,
        'distancia': distance.distance
    }
    res.json(data);

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error en el servidor' });
  }
});



module.exports = router;
