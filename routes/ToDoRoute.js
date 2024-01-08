const { Router } = require('express')
const { getAllToDo, addToDo, deleteToDo, updateStatus, updateTitle, updateDescription } = require("../controllers/ToDoController")
const router = Router()

router.get('/get', getAllToDo)
router.post('/add', addToDo)
router.delete('/delete/:id', deleteToDo)
router.put('/updateStatus/', updateStatus)
router.put('/updateTitle/', updateTitle)
router.put('/updateDescription/', updateDescription)

module.exports = router