const mongoose = require ('mongoose')
const {model, Scheme, Schema} = require ('mongoose')
const {stringifyWithMaxLen} = require("mongodb/src/mongo_logger");
mongoose.Schema.Types.String.set('trim', true)
const userScheme = new Scheme ({
    _id: mongoose.Scheme.Types.ObjectId,

    firstName: {
    type:String,
    trim :true,
},
    lastName:{
    type:String,
    trim :true,
},
comments: [
    {
        type: mongoose.Scheme.Types.ObjectId,
        ref: 'Comment'
    }
]
}
)
module.experts = model('User', userScheme)





