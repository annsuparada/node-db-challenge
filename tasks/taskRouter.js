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

module.exports = router;