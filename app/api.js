const express = require('express');

module.exports = Collection => {

    const create = (req, res) => {
        const newEntry = req.body;
        Collection.create(newEntry, (err, res) => {
            if (err) {
                res.sendStatus(500);
            } else {
                res.send(res);
            };
        });
    };
  
    const readMany = (req, res) => {
        let query = res.locals.query || {};
    
        Collection.find(query, (err, res) => {
            if (err) {
                res.status(500).send(err);
                console.log(err.message);
            } else {
                res.send(res);
            };
        });
    };

    const readOne = (req, res) => {
        const { _id } = req.params;
    
        Collection.findById(_id, (err, res) => {
            if (err) {
                res.status(500).send(err);
                console.log(err.message);
            } else {
                res.send(res);
            };
        });
    };
  
    const update = (req, res) => {
        const changedEntry = req.body;
        Collection.update({ _id: req.params._id }, { $set: changedEntry }, err => {
            if (err)
                res.sendStatus(500);
            else
                res.sendStatus(200);
        });
    };
  
    const remove = (req, res) => {
        Collection.remove({ _id: req.params._id }, (err) => {
            if (err)
                res.status(500).send(err);
            else
                res.sendStatus(200);
        });
    };

    let router = express.Router();

    router.post('/', create);
    router.get('/', readMany);
    router.get('/:_id', readOne);
    router.put('/:_id', update);
    router.delete('/:_id', remove);

    return router;
};