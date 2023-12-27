const express = require('express');
const productsMemory = require('../memory/products.memory');
const router = express.Router();

router.get('/', (req, res) => {
  const products = productsMemory.read();
  console.log('Lista de productos:', products); 
  if (products.length > 0) {
    res.json({ success: true, response: products });
  } else {
    res.status(404).json({ success: false, message: 'not found!' });
  }
});

router.get('/:pid', (req, res) => {
  const productId = req.params.pid;
  const product = productsMemory.readOne(productId);
  console.log('Producto encontrado:', product); 
  if (product) {
    res.json({ success: true, response: product });
  } else {
    res.status(404).json({ success: false, message: 'not found!' });
  }
});

module.exports = router;
