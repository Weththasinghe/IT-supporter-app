import mongoose from "mongoose";

const Schema = mongoose.Schema

const supporterSchema = new Schema({
    name : {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    task: {
        type: String,
        required: true,
    },
    contact: {
        type: Number,
        required: true,
      },
    email: {
        type: String,
        required: true,
    }
})

const Support = mongoose.model("Support", supporterSchema)

export default Support