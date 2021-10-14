

const Todo = require('../models/todo')

exports.add = async (req, res) => {

    params = req.body;

    if(params.title == undefined ){
        return res.send({ success:0,message: 'title required'})
    }
    if(params.description == undefined ){
        return res.send({ success:0,message: 'description required'})
    }
    if(params.time == undefined ){
        return res.send({ success:0,message: 'time required'})
    }
    
    const todo = new Todo({
        title: params.title,
        description: params.description,
        time: params.time,
        status:1
    })

    try {
        const output = await todo.save()
        
        res.send({
            success: 1,
            message:"task added successfully",

        })
    } catch (err) {
        res.send({
            success: 0,
            error: err.message
        })
    }
}

exports.list = async (req, res) => {
    
    const { page = 1, perPage = 10 } = req.query;

    var paginator = {
        offset: (page - 1) * perPage,
        limit: perPage,
    }


    try {
        const output = await Todo.find({status:1},{title:1,description:1,time:1},paginator)
        
        res.send({
            success: 1,
            message:"task listed successfully",
            result:output

        })
    } catch (err) {
        res.send({
            success: 0,
            error: err.message
        })
    }
}

exports.details = async (req, res) => {
    const  id   = req.params.id;

  
    try {
        const output = await Todo.findOne({_id:id,status:1},{time:1,title: 1, description:1})
        
        res.send({
            success: 1,
            message:"task fetched successfully",
            result:output

        })
    } catch (err) {
        res.send({
            success: 0,
            error: "err.message"
        })
    }
    
}

exports.update = async (req, res) => {
    
    const id   = req.params.id;

    const params = req.body;
    var update = {};

    if(params.time){
        update.time = params.time;
    }
    if(params.description){
        update.description = params.description;
    }
    if(params.title){
        update.title = params.title;
    }

   


    try {
        const output = await Todo.updateOne({_id:id,status:1},update)
        
        res.send({
            success: 1,
          
            message:"task updated successfully"

        })
    } catch (err) {
        res.send({
            success: 0,
            error: err.message
        })
    }
}

exports.softRemove = async (req, res) => {
    
    const  id   = req.params.id;

    
    var update = {
        status:0
    };


    try {
        const output = await Todo.updateOne({_id:id,status:1},update)
        
        res.send({
            success: 1,
            message:"task removed successfully"

        })
    } catch (err) {
        res.send({
            success: 0,
            error: err.message
        })
    }
}

exports.remove = async (req, res) => {
    const  id   = req.params.id;

  
    try {
        const output = await Todo.remove({_id:id})
        
        res.send({
            success: 1,
            message:"task removed successfully"

        })
    } catch (err) {
        res.send({
            success: 0,
            error: "err.message"
        })
    }
    
}

