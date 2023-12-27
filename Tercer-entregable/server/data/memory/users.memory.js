const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require('uuid');

// const usersFilePath = path.join(__dirname, './fs/files/users.json');
// const usersFilePath = path.join(__dirname, '../../fs/files/users.json');
const usersFilePath = path.join(__dirname, '../../fs/files/users.json');


class UsersManager {
  constructor() {
    this.users = this.readFromFile() || [];
  }

  create(data) {
    const newUser = { ...data, id: uuidv4() };
    this.users.push(newUser);
    this.saveToFile();
    return newUser;
  }

  read() {
    return this.users;
  }

  readOne(id) {
    return this.users.find(user => user.id === id);
  }

  destroy(id) {
    this.users = this.users.filter(user => user.id !== id);
    this.saveToFile();
  }

  readFromFile() {
    try {
      const data = fs.readFileSync(usersFilePath, 'utf8');
      return JSON.parse(data);
    } catch (err) {
      return null;
    }
  }

  saveToFile() {
    fs.writeFileSync(usersFilePath, JSON.stringify(this.users, null, 2));
  }
}

module.exports = new UsersManager();
