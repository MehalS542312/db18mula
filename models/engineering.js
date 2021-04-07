const mongoose = require("mongoose")
const engineeringSchema = mongoose.Schema({
college: String,
fee: Number,
branch: String

})
module.exports = mongoose.model("Engineering", engineeringSchema)