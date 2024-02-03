// src/managers/orders/mongoManager.js
const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  product: String,
  quantity: Number,
  // Agrega más propiedades según tus necesidades
});

const OrderModel = mongoose.model('Order', orderSchema);

class MongoManager {
  async create(data) {
    try {
      const newItem = await OrderModel.create(data);
      return newItem;
    } catch (error) {
      throw new Error('Error creating order in MongoDB');
    }
  }

  async read() {
    try {
      const items = await OrderModel.find();
      return items;
    } catch (error) {
      throw new Error('Error reading orders from MongoDB');
    }
  }

  async readOne(id) {
    try {
      const item = await OrderModel.findById(id);
      return item;
    } catch (error) {
      throw new Error('Error reading order from MongoDB');
    }
  }

  async update(id, newData) {
    try {
      const updatedItem = await OrderModel.findByIdAndUpdate(id, newData, { new: true });
      return updatedItem;
    } catch (error) {
      throw new Error('Error updating order in MongoDB');
    }
  }

  async destroy(id) {
    try {
      const deletedItem = await OrderModel.findByIdAndRemove(id);
      return deletedItem;
    } catch (error) {
      throw new Error('Error deleting order from MongoDB');
    }
  }
}

module.exports = MongoManager;
