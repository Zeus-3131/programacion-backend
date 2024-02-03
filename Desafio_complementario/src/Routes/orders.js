// src/routes/orders.js
const express = require('express');
const router = express.Router();
const MemoryManager = require('../managers/orders/memoryManager');
const FileSystemManager = require('../managers/orders/fileSystemManager');
const MongoManager = require('../managers/orders/mongoManager');

// Selecciona el manager que deseas utilizar
// const manager = new MemoryManager();
// const manager = new FileSystemManager();
const manager = new MongoManager();

router.post('/', async (req, res) => {
  try {
    const newItem = await manager.create(req.body);
    res.json(newItem);
  } catch (error) {
    res.status(500).send('Internal Server Error');
  }
});

router.get('/', async (req, res) => {
  try {
    const items = await manager.read();
    res.json(items);
  } catch (error) {
    res.status(500).send('Internal Server Error');
  }
});

router.get('/:pid', async (req, res) => {
  try {
    const item = await manager.readOne(req.params.pid);
    if (item) {
      res.json(item);
    } else {
      res.status(404).send('Not Found');
    }
  } catch (error) {
    res.status(500).send('Internal Server Error');
  }
});

router.put('/:pid', async (req, res) => {
  try {
    const updatedItem = await manager.update(req.params.pid, req.body);
    if (updatedItem) {
      res.json(updatedItem);
    } else {
      res.status(404).send('Not Found');
    }
  } catch (error) {
    res.status(500).send('Internal Server Error');
  }
});

router.delete('/:pid', async (req, res) => {
  try {
    const deletedItem = await manager.destroy(req.params.pid);
    if (deletedItem) {
      res.json(deletedItem);
    } else {
      res.status(404).send('Not Found');
    }
  } catch (error) {
    res.status(500).send('Internal Server Error');
  }
});

module.exports = router;
