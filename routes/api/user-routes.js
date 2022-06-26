const router = require('express').Router();

const {
    getAllUsers,
    createUser,
    getUserById,
    updateUser,
    deleteUser,
    addNewFriend,
    deleteFriend
} = require('../../controller/user-controller');

// /api/users     
router
    .route('/')
    .get(getAllUsers)
    .post(createUser);

// /api/users/:id
router 
    .route('/:id')
    .get(getUserById)
    .put(updateUser)
    .delete(deleteUser);

// /api/users/:userId/friends/:friendsId             
router 
    .route('/:id/friends/:friendId')
    .post(addNewFriend)
    .delete(deleteFriend)

module.exports = router;