var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs('mongodb://truongle2:truongle2@ds037244.mlab.com:37244/todosapp', ['todos']);

//Get todos list
router.get('/todos', function (req, res, next) {
    db.todos.find(function (err,result) {
        if (err) {
            res.send(err);
        }
        else {
            res.json(result);
        }
    });
});

//Get single todo task
router.get('/todos/:id', function (req, res, next) {
    db.todos.findOne({ _id: mongojs.ObjectId(req.params.id) }, function (err,result) {
        if (err) {
            res.send(err);
            res.end();
        }
        else {
            res.json(result);
            res.end();
        }
    });
});

//Save a new todo task
router.post('/todos', function (req, res, next) {
    var todo = req.body;
    if (!todo.text) {
        res.status(400);
        res.json({ 'Err': 'Invalid data!' });
    }
    else {
        db.todos.save(todo, function (err, result) {
            if (err) {
                res.status(400);
                res.json({ 'Err': 'Invalid data!' });
            }
            else {
                res.status(200);
                res.json(result);
            }
        })
    }
}
);

//Update a todo task
router.put('/todos/:id', function (req, res, next) {
    var todo = req.body;
    var updObj = new Array();
    udpobj = {text:'',iscompleted:false};
    if (todo.text)
        udpobj.text = todo.text;
    if (todo.iscompleted)
        udpobj.iscompleted = todo.iscompleted;
    if (!udpobj) {
        res.status(400);
        res.json({ 'Err': 'Invalid data!' });
    }
    else {
        db.todos.update({ _id: mongojs.ObjectId(req.params.id) }, udpobj, { upsert: true }, function (err, result) {
            if (err) {
                res.status(400);
                res.json({ 'Err': 'Invalid data!' });
            }
            else {
                res.status(200);
                res.json(result);
            }
        })
    }

});

//Delete a todo task
router.delete('/todos/:id', function (req, res, next) {
    db.todos.remove({ _id: mongojs.ObjectId(req.params.id) }, '', function (err, result) {
        if (err) {
            res.status(400);
            res.json({ 'Err': 'Something went wrong!' });
        }
        else {
            res.status(200);
            res.json(result);
        }
    })
});


module.exports = router;

