const router = require('express').Router();
const controllers = require('../controllers');

// Current Path = '/card'

router.get('/', controllers.card.index);
router.get('/:id', controllers.card.show);
router.post('/', controllers.card.create);
router.put('/:id', controllers.card.update);
router.delete('/:id', controllers.card.destroy);

module.exports = router;