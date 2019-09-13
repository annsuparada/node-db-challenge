const express = require('express');
const db = require('./projectHelper.js');
const router = express.Router();

router.get('/', (req, res) => {
    db.getProjects()
        .then(project => {
            res.status(200).json(project)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({ message: 'Failed to get projects' })
        })
})

module.exports = router;