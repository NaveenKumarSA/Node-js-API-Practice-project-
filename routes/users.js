const express = require("express")
const router = express.Router()
const Users = require('../models/usersSchema')


router.get('/', async(req, res)=>{
    console.log(req)
    try {
        let a = await Users.find()
        res.json(a)
    } catch (error) {
        res.send(error)
    }
    
})
router.get('/:id',async (req,res)=>{
    try {
        let a1 = await Users.findById(req.params.id)
        res.json(a1)
    } catch (error) {
        console.log(error)
        res.send(error)
    }
})
router.post('/', async(req, res)=>{
let x = new Users({
    name:req.body.name,
    email:req.body.email,
    password:req.body.password,
    mobile:req.body.mobile,
    tnc:req.body.tnc,
})
try {
    const posted = await x.save()
    res.json(posted)
} catch (error) {
    console.log(error)
    res.send(error)
}

})
module.exports = router