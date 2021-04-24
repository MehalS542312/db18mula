const mongoose = require("mongoose")
const engineeringSchema = mongoose.Schema({
college: {
       type: String,
       minLength: 5
        },
branch: String,
fee: {
    type:Number,
    min:1,
    max:200
}

})
module.exports = mongoose.model("Engineering", engineeringSchema)