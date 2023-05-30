const { default: mongoose } = require('mongoose')
const Workout12 = require('../models/Workout')

// get all workout 
const getWorkout = async (req, res) => {
   const workouts = await Workout12.find({}).sort({createdAt: -1}) 

   res.status(200).json(workouts)
}

// get a single workout
const getSingleWorkout = async (req, res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such workout.'})
    }
    const workout = await Workout12.findById(id)
    if(!workout) {
        return res.status(404).json({error: 'No such workout.'})
    }
    res.status(200).json(workout)
 }

// add a workout

const createWorkout = async (req,res) => {
    const {title,load,reps} = req.body
    // add to db
    try{
        const workout = await Workout12.create({title, load, reps})
        res.status(200).json(workout)
    } catch(error) {
        res.status(400).json({error: error.message})
    }
}


// update a workout 
const updateWorkout = async (req, res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such workout.'})
    }

    const workout = await Workout12.findOneAndUpdate({_id: id})

    if(!workout) {
        return res.status(404).json({error: 'No such workout.'})
    }
    res.status(200).json(workout)
}
// delete a workout
const deleteWorkout = async (req,res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such workout.'})
    }

    const workout = await Workout12.findOneAndDelete({_id: id})

    if(!workout) {
        return res.status(404).json({error: 'No such workout.'})
    }
    res.status(200).json(workout)
}


module.exports = {
    createWorkout,
    getSingleWorkout,
    getWorkout,
    deleteWorkout,
    updateWorkout
}