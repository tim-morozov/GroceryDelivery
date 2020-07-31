const express = require('express');
const router = express.Router();

const Item = require('../Models/Item');


router.get('/', (req, res) => {
    Item.find()
    .then(items => res.json(items))
});

router.delete('/:id', (req, res) => {
    Item.findById(req.params.id)
    .then(item => item.remove().then(() => res.json({success: true})))
    .catch(err => res.status(404).json({success:false}))
});

router.post('/', (req, res) => {
    let newItem = new Item({ 
        name: req.body.name
    });

    newItem.save().then(item => res.json(item));
});

module.exports = router;