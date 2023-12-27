const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require('uuid');

// const productsFilePath = path.join(__dirname, './fs/files/products.json');
// const productsFilePath = path.join(__dirname, '../../fs/files/products.json');
const productsFilePath = path.join(__dirname, '../../fs/files/products.json');


class ProductsManager {
  constructor() {
    this.products = this.readFromFile() || [];
  }

  create(data) {
    const newProduct = { ...data, id: uuidv4() };
    this.products.push(newProduct);
    this.saveToFile();
    return newProduct;
  }

  read() {
    return this.products;
  }

  readOne(id) {
    return this.products.find(product => product.id === id);
  }

  destroy(id) {
    this.products = this.products.filter(product => product.id !== id);
    this.saveToFile();
  }

  readFromFile() {
    try {
      const data = fs.readFileSync(productsFilePath, 'utf8');
      return JSON.parse(data);
    } catch (err) {
      return null;
    }
  }

  saveToFile() {
    fs.writeFileSync(productsFilePath, JSON.stringify(this.products, null, 2));
  }
}

module.exports = new ProductsManager();
