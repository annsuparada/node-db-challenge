const express = require('express');
const server = express();
const projectRouter = require('./projects/projectRouter.js');
const taskRouter = require('./tasks/taskRouter.js');
const resouceRouter = require('./resouces/resouceRouter')

server.use(express.json());
server.use('/api/projects', projectRouter);
server.use('/api/tasks', taskRouter);
server.use('/api/resouces', resouceRouter);

module.exports = server;