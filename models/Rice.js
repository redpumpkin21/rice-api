const mongoose = require('mongoose')

const {Schema} = mongoose

const {model}= mongoose

const riceSchema = new Schema(
    {
    name: String,
    type: String,
    description: String,
    img: String,
    uses: String

},
    {timestamps: true})

    const Rice = model('Rice', riceSchema)

    module.exports = Rice