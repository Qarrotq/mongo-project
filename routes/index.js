const {Router} = require('express')

const User = require('../models/Users')

const router = Router()

router
    .get('/get-all-users',async(req,res)=>{
        const users = await User.find({})
        res.send(users)
    })
    .get('/get-user/:id',async(req,res)=>{
        const {id} = req.params
        const users =  await User.findById(id)
        res.send(user)
    })
    .post('/create-user',async(req,res)=>{
        const {body} = req
        let newUser = new User(body)
        await newUser.save()
        res.status(201).send({
            message:'Success'
        })
    })
    .put('/update-user/:id',async(req,res)=>{
        let {id} = req.params
        const {body} = req 
        const user = await User.findById(id)
        user = {...user,...body}
        await user.save()
        res.status(201).send({
            message:'Success'
        })
    })
    .delete('/delete-user/:id', async(req,res)=>{
        const {id} = req.params
        await User.findByIdAndDelete(id)
        res.status(201).send({
            message:'Success'
        })
    })

module.exports = router