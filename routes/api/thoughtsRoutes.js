const router = require('express').Router();

const {
    getAllThoughts,
    getThoughtById,
    createThought,
    updateThought,
    deleteThought,
} = require('../../controllers/thoughtsController');

router.route('/').get(getAllThoughts).post(createThought);

router.route('/:userId/:thoughtId').delete(deleteThought);

module.exports = router;