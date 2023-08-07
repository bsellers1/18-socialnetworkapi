const router = require('express').Router();

const {
    getThoughts,
    getSingleThought,
    createThought,
    updateThought,
    deleteThought,
    createReaction,
    deleteReaction
} = require('../../controllers/thoughtsController');

router.route('/').get(getThoughts).post(createThought);

router.route('/:id').get(getSingleThought).put(updateThought);

router.route('/:userId/:thoughtId').delete(deleteThought);

router.route('/:id/reactions').post(createReaction);

router.route('/:id/reactions/:reactionId').delete(deleteReaction);

module.exports = router;