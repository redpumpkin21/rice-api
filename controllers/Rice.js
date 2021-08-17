const router = require('express').Router()

const Rice = require('../models/Rice')

router.get('/', async(req, res) => {
   res.json(await Rice.find({}).catch((err) => res.status(400).json(err)))
})

router.post('/', async(req,res) => {
    try {
        const newRice = await Rice.create(req.body)
        res.json(newRice)
    }catch(error){
        res.status(400).json(error)
    }
})

router.put('/:id', async(req, res) => {
    try{
    const updatedRice = await Rice.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new: true}
    )
    res.json(updatedRice)
    } catch(error){
        res.status(400).json(error)
    }
})

router.delete('/:id', async(req, res) => {
    try{
        const deletedRice = await Rice.findByIdAndRemove(req.params.id)
        res.json(deletedRice)
    } catch(error){
        res.status(400).json(error)
    }
})

module.exports = router