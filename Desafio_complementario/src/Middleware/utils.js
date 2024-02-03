// src/middleware/utils.js
const fs = require('fs/promises');
const path = require('path');

const db = {};

const saveToFile = async (filename, data) => {
  const filePath = path.join(__dirname, '..', 'data', filename);
  await fs.writeFile(filePath, JSON.stringify(data, null, 2));
};

const readFromFile = async (filename) => {
  const filePath = path.join(__dirname, '..', 'data', filename);
  try {
    const data = await fs.readFile(filePath, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    return [];
  }
};

module.exports = { db, saveToFile, readFromFile };
