const { Thought, User } = require('../models');

const thoughtController = {

    getAllThoughts(req, res) {
        Thought.find({})
            .populate({ path: "reactions", select: "-__v"})
            .select("-__v")
            .then(dbThoughtData => res.json(dbThoughtData))
            .catch(err => {
            console.log(err);
            res.sendStatus(400);
           });
    },

    getThoughtById({ params }, res) {
        Thought.findOne({ _id: params.id })
        .populate({ path: "reactions", select: "-__v"})
        .select("-__v")
        .then(dbThoughtData => res.json(dbThoughtData))
        .catch(err => {
            console.log(err);
            res.sendStatus(400);
        })
    },

    createThought({ body, params }, res) {
        Thought.create(body)
        .then(dbThoughtData => {
            User.findOneAndUpdate(
                { _id: params.userId },
                { $push: { thoughts: dbThoughtData._id } },
                { new: true }
            )
            .then(dbUserData => {
                if (!dbUserData) {
                    res.status(404).json({ message: 'No user found with this id!'});
                    return;
                }
                res.json(dbUserData);
            })
            //res.json(dbThoughtData))
            .catch(err => res.json(err));
        })
        .catch(err => res.json(err));
    },

    updateThought({ params, body }, res) {
        Thought.findOneAndUpdate({ _id: params.id }, body, { new: true, runValidators: true })
        .populate({ path: "reactions", select: "-__v"})
        .select("-__v")
        .then(dbThoughtData => {
            if (!dbThoughtData) {
                res.status(404).json({ message: 'No thought found with this id!' });
                return;
            }
            res.json(dbThoughtData);
        })
        .catch(err => res.json(err));
    },

    deleteThought({ params }, res) {
        Thought.findOneAndDelete({ _id: params.id })
        .then(dbThoughtData => {
            if (!dbThoughtData) {
                res.status(404).json({ message: 'No thought found with this id!' })
                return;
            }
            User.findOneAndUpdate(
                { username: dbThoughtData.username },
                { $pull: { thoughts: params.id } }
            )
            .then(() => {
                res.json({ message: 'Thought has been deleted!' });
            })
            //res.json(dbThoughtData))
            .catch(err => res.json(err))
            })
    .catch(err => res.json(err));
    },  

    createReaction({ params, body }, res) {
        Thought.findOneAndUpdate(
            { _id: params.thoughtId},
            { $push: { reactions: body} },
            { new: true, runValidators: true }
        )
        .populate({ path: "reactions", select: "-__v"})
        .select("-__v")
        .then(dbThoughtData => {
            if (!dbThoughtData) {
                res.status(404).json({ message: 'No thought found with this id!' });
                return;
            }
            res.json(dbThoughtData);
        })
        .catch(err => res.json(err));
    },

    removeReaction({ params, body }, res) {
        Thought.findOneAndUpdate(
            { _id: params.thoughtId },
            { $pull: { reactions: {reactionId: body.reactionId }}},
            { new: true }
        )
        .then(dbThoughtData => {
            if (!dbThoughtData) {
                res.status(404).json({ message: 'No thought with that id!'});
                return;
            }
            res.json( { message: 'Reaction deleted!' });
        })
        .catch(err => res.json(err));
    }
};

module.exports = thoughtController;