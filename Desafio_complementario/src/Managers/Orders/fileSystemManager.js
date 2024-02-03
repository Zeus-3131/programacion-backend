// src/managers/orders/fileSystemManager.js
const { saveToFile, readFromFile } = require('../../middleware/utils');

const filename = 'orders.json';

class FileSystemManager {
  async create(data) {
    const items = await readFromFile(filename);
    const newItem = { id: Date.now().toString(), ...data };
    items.push(newItem);
    await saveToFile(filename, items);
    return newItem;
  }

  async read() {
    return readFromFile(filename);
  }

  async readOne(id) {
    const items = await readFromFile(filename);
    return items.find(item => item.id === id);
  }

  async update(id, newData) {
    const items = await readFromFile(filename);
    const index = items.findIndex(item => item.id === id);
    if (index !== -1) {
      items[index] = { ...items[index], ...newData };
      await saveToFile(filename, items);
      return items[index];
    }
    return null;
  }

  async destroy(id) {
    const items = await readFromFile(filename);
    const index = items.findIndex(item => item.id === id);
    if (index !== -1) {
      const deletedItem = items.splice(index, 1);
      await saveToFile(filename, items);
      return deletedItem[0];
    }
    return null;
  }
}

module.exports = FileSystemManager;
