// src/managers/products/memoryManager.js
class MemoryManager {
    constructor() {
      this.data = [];
    }
  
    create(data) {
      const newItem = { id: Date.now().toString(), ...data };
      this.data.push(newItem);
      return newItem;
    }
  
    read() {
      return this.data;
    }
  
    readOne(id) {
      return this.data.find(item => item.id === id);
    }
  
    update(id, newData) {
      const index = this.data.findIndex(item => item.id === id);
      if (index !== -1) {
        this.data[index] = { ...this.data[index], ...newData };
        return this.data[index];
      }
      return null;
    }
  
    destroy(id) {
      const index = this.data.findIndex(item => item.id === id);
      if (index !== -1) {
        const deletedItem = this.data.splice(index, 1);
        return deletedItem[0];
      }
      return null;
    }
  }
  
  module.exports = MemoryManager;
  