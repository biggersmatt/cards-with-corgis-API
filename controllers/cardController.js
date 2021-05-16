const db = require('../models');

const index = (req, res) => {
  db.Card.find({}, (err, allCards) => {
    if(err) return console.log(err);
    res.json({allCards});
  })
}

const show = (req, res) => {
  db.Card.findById(req.params.id, (err, foundCard) => {
    if(err) console.log(err);
    res.json({foundCard});
  })
}

const create = (req, res) => {
  db.Card.create(req.body, (err, newCard) => {
    if(err) console.log(err);
    res.json({newCard});
  })
}

const update = (req, res) => {
  db.Card.findByIdAndUpdate(
    req.params.id,
    req.body,
    {new: true},
    (err, updatedCard) => {
      if(err) console.log(err);
      res.json(updatedCard);
    }
  )
}

const destroy = (req, res) => {
  db.Card.findByIdAndDelete(req.params.id, (err, deletedCard) => {
    if(err) console.log(err);
    res.json(deletedCard);
  })
}

module.exports = {
  index,
  show,
  create,
  update,
  destroy,
}