const express = require('express');
const db = require('./taskHelper.js');
const router = express.Router();

router.get('/', (req, res) => {
    db.getTasks()
        .then(task => {
            res.status(200).json(task)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({ message: 'Failed to get tasks' })
        })
})

router.post('/',  (req, res) => {
    const task = req.body;
    db.addTasks(task)
        .then(response => {
            res.status(201).json(response)
        })
        .catch(err => {
            console.log(err)
            res.status(500)
            .json({errorMessage: 'There was an error while saving the task to the database'})
        })
})


function validateTask(req, res, next) {
    if(!req.body) res.status(400).json({ message: "missing task data" })
    if(!req.body.descripiton || !res.body.project_id) res.status(400).json({ message: "missing required task name field" })
    next()
};
module.exports = router;