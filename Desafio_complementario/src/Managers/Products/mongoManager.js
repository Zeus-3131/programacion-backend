// src/managers/products/mongoManager.js
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  // Agrega más propiedades según tus necesidades
});

const ProductModel = mongoose.model('Product', productSchema);

class MongoManager {
  async create(data) {
    try {
      const newItem = await ProductModel.create(data);
      return newItem;
    } catch (error) {
      throw new Error('Error creating product in MongoDB');
    }
  }

  async read() {
    try {
      const items = await ProductModel.find();
      return items;
    } catch (error) {
      throw new Error('Error reading products from MongoDB');
    }
  }

  async readOne(id) {
    try {
      const item = await ProductModel.findById(id);
      return item;
    } catch (error) {
      throw new Error('Error reading product from MongoDB');
    }
  }

  async update(id, newData) {
    try {
      const updatedItem = await ProductModel.findByIdAndUpdate(id, newData, { new: true });
      return updatedItem;
    } catch (error) {
      throw new Error('Error updating product in MongoDB');
    }
  }

  async destroy(id) {
    try {
      const deletedItem = await ProductModel.findByIdAndRemove(id);
      return deletedItem;
    } catch (error) {
      throw new Error('Error deleting product from MongoDB');
    }
  }
}

module.exports = MongoManager;
