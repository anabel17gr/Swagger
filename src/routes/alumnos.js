var router = require('express').Router()
const alumnos = new Map();

alumnos.set("1", "Javier");
alumnos.set("2", "Pepe");


router.get('/:id', function(req, res) {
var nombre = alumnos.get(req.params.id);

if (nombre==null)
{ res.json({ message: "No existe el alumno con id " + req.params.id });
}
  else {res.json({ name: nombre })
}})

router.get('/', function(req, res) {
    array = Array.from(alumnos, ([id, name]) => ({ id, name }));
    console.log(array);
    res.json(array)
})

router.post('/', function(req, res) {
  res.json({ message: 'Vas a añadir un alumno' })
})

router.put('/:id', function(req, res) {
  res.json({ message: 'Vas a actualizar el alumno con id ' + req.params.id })
})

router.delete('/:id', function(req, res) {
  res.json({ message: 'Vas a borrar el alumno con id ' + req.params.id})
})


module.exports = router