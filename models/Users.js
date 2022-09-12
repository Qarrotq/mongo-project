const {Schema,model, models} = require ('mongoose')

const User = new Schema ({
    name:{
        require:true,
        type:String
    },
    age:{
        require:true,
        type:Number
    },
    phone:{
        type:String
    },
    male:{
        type:Boolean,
        default:true
    }
})


module.exports = model('User',User)