const express = require('express')
const {
    createWorkout,
    getSingleWorkout,
    getWorkout,
    deleteWorkout,
    updateWorkout
} = require('../controllers/workoutcontrollers')
const router = express.Router()

// Get request
router.get('/', getWorkout)

// Single workout get
router.get('/:id', getSingleWorkout)

// Post request
router.post('/', createWorkout)

// Patch request
router.patch('/:id', updateWorkout)

// Delete request 
router.delete('/:id', deleteWorkout)


module.exports = router