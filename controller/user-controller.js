const { User } = require('../models');

const userController = {

    getAllUsers(req, res) {
        Users.find({})
           .then(dbUserData => res.json(dbUserData))
           .catch(err => {
            console.log(err);
            res.sendStatus(400);
           });
    },

    getUserById(req, res) {

    },

    createUser(req, res) {

    },

    updateUser(req, res) {

    },

    deleteUser(req, res) {

    },

    addNewFriend(req, res) {

    },

    deleteFriend(req, res) {

    }
};

module.exports = userController;