const mongoose = require("mongoose")
const engineeringSchema = mongoose.Schema({
college: String,
branch: String,
fee: {
    type:Number,
    min:1,
    max:200
}

})
module.exports = mongoose.model("Engineering", engineeringSchema)