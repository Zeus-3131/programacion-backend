// src/managers/users/mongoManager.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  // Agrega más propiedades según tus necesidades
});

const UserModel = mongoose.model('User', userSchema);

class MongoManager {
  async create(data) {
    try {
      const newItem = await UserModel.create(data);
      return newItem;
    } catch (error) {
      throw new Error('Error creating user in MongoDB');
    }
  }

  async read() {
    try {
      const items = await UserModel.find();
      return items;
    } catch (error) {
      throw new Error('Error reading users from MongoDB');
    }
  }

  async readOne(id) {
    try {
      const item = await UserModel.findById(id);
      return item;
    } catch (error) {
      throw new Error('Error reading user from MongoDB');
    }
  }

  async update(id, newData) {
    try {
      const updatedItem = await UserModel.findByIdAndUpdate(id, newData, { new: true });
      return updatedItem;
    } catch (error) {
      throw new Error('Error updating user in MongoDB');
    }
  }

  async destroy(id) {
    try {
      const deletedItem = await UserModel.findByIdAndRemove(id);
      return deletedItem;
    } catch (error) {
      throw new Error('Error deleting user from MongoDB');
    }
  }
}

module.exports = MongoManager;
