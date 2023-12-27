const express = require('express');
const usersMemory = require('../memory/users.memory');
const router = express.Router();

router.get('/', (req, res) => {
  const users = usersMemory.read();
  console.log('Lista de usuarios:', users);
  if (users.length > 0) {
    res.json({ success: true, response: users });
  } else {
    res.status(404).json({ success: false, message: 'not found!' });
  }
});

router.get('/:uid', (req, res) => {
  const userId = req.params.uid;
  const user = usersMemory.readOne(userId);
  console.log('Usuario encontrado:', user); 
  if (user) {
    res.json({ success: true, response: user });
  } else {
    res.status(404).json({ success: false, message: 'not found!' });
  }
});

module.exports = router;
