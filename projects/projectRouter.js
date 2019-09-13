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

router.post('/', validateProject, (req, res) => {
    const project = req.body;
    db.addProjects(project)
        .then(response => {
            res.status(201).json(response)
        })
        .catch(err => {
            console.log(err)
            res.status(500)
            .json({errorMessage: 'There was an error while saving the project to the database'})
        })
})


function validateProject(req, res, next) {
    if(!req.body) res.status(400).json({ message: "missing project data" })
    if(!req.body.project_name) res.status(400).json({ message: "missing required project name field" })
    next()
};
module.exports = router;