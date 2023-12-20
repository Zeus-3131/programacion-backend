const fs = require('fs');
const path = require('path');

class ProductManager {
    constructor() {
        this.productFilePath = path.join(__dirname, 'data', 'products.json');
        this.products = this.loadData(this.productFilePath);
    }

    loadData(filePath) {
        if (!fs.existsSync(filePath)) {
            fs.writeFileSync(filePath, '[]');
        }
        const data = fs.readFileSync(filePath, 'utf8');
        return JSON.parse(data);
    }

    saveData() {
        fs.writeFileSync(this.productFilePath, JSON.stringify(this.products, null, 2));
    }

    create(data) {
        const productId = this.products.length + 1;
        const newProduct = {
            id: productId,
            title: data.title || '',
            photo: data.photo || '',
            price: data.price || 0,
            stock: data.stock || 0
        };
        this.products.push(newProduct);
        this.saveData();
    }

    read() {
        return this.products;
    }

    readOne(id) {
        return this.products.find(product => product.id === id);
    }
}

class UserManager {
    constructor() {
        this.userFilePath = path.join(__dirname, 'data', 'users.json');
        this.users = this.loadData(this.userFilePath);
    }

    loadData(filePath) {
        if (!fs.existsSync(filePath)) {
            fs.writeFileSync(filePath, '[]');
        }
        const data = fs.readFileSync(filePath, 'utf8');
        return JSON.parse(data);
    }

    saveData() {
        fs.writeFileSync(this.userFilePath, JSON.stringify(this.users, null, 2));
    }

    create(data) {
        const userId = this.users.length + 1;
        const newUser = {
            id: userId,
            name: data.name || '',
            photo: data.photo || '',
            email: data.email || ''
        };
        this.users.push(newUser);
        this.saveData();
    }

    read() {
        return this.users;
    }

    readOne(id) {
        return this.users.find(user => user.id === id);
    }
}

// Ejemplo de uso:
const productManager = new ProductManager();
const userManager = new UserManager();

const newProductData = {
    title: 'New Product',
    photo: 'path/to/photo.jpg',
    price: 29.99,
    stock: 50
};

const newUserData = {
    name: 'John Doe',
    photo: 'path/to/user_photo.jpg',
    email: 'john.doe@example.com'
};

productManager.create(newProductData);
userManager.create(newUserData);

console.log(productManager.read());
console.log(userManager.read());

const productIdToFind = 1;
const userIdToFind = 1;

console.log(productManager.readOne(productIdToFind));
console.log(userManager.readOne(userIdToFind));
