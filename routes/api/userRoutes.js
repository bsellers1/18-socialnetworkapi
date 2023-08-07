const router = require('express').Router();

const {
    getUsers,
    getSingeUser,
    createUser,
    updateUser,
    deleteUser,
} = require('../../controllers/userController');

router.route('/').get(getUsers).post(createUser);

router.route('/:id').get(getSingeUser).put(updateUser).delete(deleteUser);

module.exports = router;