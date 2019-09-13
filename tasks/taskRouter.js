const express = require('express');
const db = require('./taskHelper.js');
const router = express.Router();

router.get('/', (req, res) => {
    db.getTasks()
        .then(response => {
            res.status(200).json(response.map(task => task.completed === 0 ? {...task, completed: false} : {...task, completed: true}))
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({ message: 'Failed to get tasks' })
        })
})

router.post('/', (req, res) => {
    const task = req.body;
    if(!req.body.project_id || !req.body.description) {
        res.status(400).json({ errorMessage: "project id and Task description are required " })
    } else {
        db.addTasks(task)
        .then(response => {
            resCompleted = response.completed === 0 ? {...response, completed: false} :{...response, completed: true}
                    res.status(201).json(resCompleted) 
            }
        )
        .catch(err => {
            console.log(err)
            res.status(500)
            .json({errorMessage: 'There was an error while saving the task to the database'})
        })
    }
    
})


function validateTask(req, res, next) {
    if(!req.body) res.status(400).json({ message: "missing task data" })
    if(!req.body.descripiton || !res.body.project_id){ res.status(400).json({ message: "missing required task name field" })}
    next()
};
module.exports = router;