'use strict';

var express = require('express');
var router = express.Router();
var db = require('../models/todos');
module.exports = router;

// console.log('db = ', db)
router.get('/users', function(req, res, next) {
	res.status(200).send( db.listPeople());
});

router.get('/users/:name/tasks', function(req, res, next){
	if (db.listPeople().indexOf(req.params.name) === -1) {
		res.sendStatus(404);
	} else {
		res.status(200).send(db.list(req.params.name, req.query.status));
	}
});

router.post('/users/:name/tasks', function(req, res, next){
	if (Object.keys(req.body).filter(function(key){
		return key !== 'complete' && key !== 'content'
		}).length > 0) {
		res.sendStatus(400);
	} else {		
		db.add(req.params.name, req.body);
		res.status(201).send(req.body);
	}

	
});

router.put('/users/:name/tasks/:id', function(req, res){
	db.complete(req.params.name, req.params.id);
	res.sendStatus(200);
});

router.delete('/users/:name/tasks/:id', function(req, res){
	db.remove(req.params.name, req.params.id);
	res.sendStatus(204);
})

// write your routes here. Feel free to split into multiple files if you like.
