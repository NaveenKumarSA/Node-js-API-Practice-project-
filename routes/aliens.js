const express = require("express")
const router = express.Router()
const Alien = require('../models/alien')
router.get('/', async (req , res)=>{
      try {
        
      const a1  = await Alien.find()  
      res.json(a1)
    } catch (error) {
        console.log("Inside catch", error);
        res.send("error")
        
    }
    
})
// GET by id
router.get('/:id', async (req , res)=>{
      try {
        
      const a1  = await Alien.findById(req.params.id)  
      res.json(a1)
    } catch (error) {
        console.log("Inside catch", error);
        res.send("error")
        
    }
    
})
//write for find by name 
router.get('/:id', async (req, res)=>{
    try {
        let foundByName = await Alien.findById()
    } catch (error) {
     res.send(error)   
    }
})
//PATCH
router.patch('/:id', async(req, res)=>{

    try {
        let foundById =await Alien.findById(req.params.id)
        foundById.name = req.body.name
        foundById.tech = req.body.tech
        foundById.sub= req.body.sub
       let a2 = await foundById.save()
       res.send(a2)
    } catch (error) {
        res.send(error)
    }
})


//POST
router.post('/', async (req , res)=>{
    console.log("req->",req.body)
   const alien = new Alien({
       name:req.body.name,
       tech:req.body.tech,
   })
   console.log(alien)
     try {
        
      const a1  = await alien.save()  
      res.json(a1)
    } catch (error) {
        console.log("Inside catch", error);
        res.send("error")
        
    }
})
router.delete('/:id', async (req , res)=>{
     try {
        
      const a1  = await Alien.findByIdAndDelete(req.params.id) 
      res.json(a1)
    } catch (error) {
        console.log("Inside catch", error);
        res.send("error")
        
    }
})

module.exports = router