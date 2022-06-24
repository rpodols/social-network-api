const { Thought } = require('../models');

const thoughtController = {

    getAllThoughts(req, res) {
        Thoughts.find({})
           .then(dbThoughtData => res.json(dbThoughtData))
           .catch(err => {
            console.log(err);
            res.sendStatus(400);
           });
    },

    getThoughtById(req, res) {

    },

    createThought(req, res) {

    },

    updateThought(req, res) {

    },

    deleteThought(req, res) {

    },

    createReaction(req, res) {

    },

    removeReaction(req, res) {

    }
};

module.exports = thoughtController;