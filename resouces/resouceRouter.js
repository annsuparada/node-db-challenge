const express = require('express');
const db = require('./resouceHelper.js');
const router = express.Router();

router.get('/', (req, res) => {
    db.getResouces()
        .then(resouce => {
            res.status(200).json(resouce)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({ message: 'Failed to get resouces' })
        })
})

module.exports = router;