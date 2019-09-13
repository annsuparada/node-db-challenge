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
router.post('/', validateResouce, (req, res) => {
    const resouce = req.body;
    db.addResouce(resouce)
        .then(response => {
            res.status(201).json(response)
        })
        .catch(err => {
            console.log(err)
            res.status(500)
            .json({errorMessage: 'There was an error while saving the resouce to the database'})
        })
})


function validateResouce(req, res, next) {
    if(!req.body) res.status(400).json({ message: "missing resouce data" })
    if(!req.body.resouce_name) res.status(400).json({ message: "missing required resouce name field" })
    next()
};
module.exports = router;