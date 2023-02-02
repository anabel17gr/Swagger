var router = require('express').Router()
const alumnas = new Map();

alumnas.set("1", "Maria");
alumnas.set("2", "Ana");


router.get('/:id', function(req, res) {
var nombre = alumnas.get(req.params.id);

if (nombre==null)
{ res.json({ message: "No existe la alumna con id " + req.params.id });
}
  else {res.json({ name: nombre })
}})

router.get('/', function(req, res) {
    array = Array.from(alumnas, ([id, name]) => ({ id, name }));
    console.log(array);
    res.json(array)
})

router.post('/', function(req, res) {
  res.json({ message: 'Vas a añadir una alumna' })
})

router.put('/:id', function(req, res) {
  res.json({ message: 'Vas a actualizar la alumna con id ' + req.params.id })
})

router.delete('/:id', function(req, res) {
  res.json({ message: 'Vas a borrar la alumna con id ' + req.params.id})
})


module.exports = router