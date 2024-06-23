var express = require('express');
var router = express.Router();

// Ejemplo de endpoint GET
router.get('/', (req, res) => {
    res.json({ message: 'GET request to the /items endpoint' });
});

// Ejemplo de endpoint POST
router.post('/add', (req, res) => {
    res.json({ message: 'POST request to the /items/add endpoint' });
});

// Ejemplo de endpoint DELETE
router.delete('/delete/:id', (req, res) => {
    res.json({ message: `DELETE request to the /items/delete/${req.params.id} endpoint` });
});

// Ejemplo de endpoint PUT/POST para actualización
router.post('/update/:id', (req, res) => {
    res.json({ message: `POST request to the /items/update/${req.params.id} endpoint` });
});

module.exports = router;
