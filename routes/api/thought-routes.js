const router = require('express').Router();

const {
    getAllThoughts,
    createThought,
    getThoughtById,
    updateThought,
    deleteThought,
    createReaction,
    removeReaction

} = require('../../controller/thought-controller');

// /api/thoughts
router
    .route('/')
    .get(getAllThoughts)
    .post(createThought);

// /api/thoughts/:id
router
    .route('/:id')
    .get(getThoughtById)
    .put(updateThought)
    .delete(deleteThought);

// /api/thoughts/:thoughtId/reactions
router
    .route('/:id/reactions')
    .post(createReaction)

router
    .route('/:id/reactions/:reactionId')
    .delete(removeReaction);

module.exports = router;