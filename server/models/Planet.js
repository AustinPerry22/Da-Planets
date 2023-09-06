import mongoose from "mongoose";
const Schema = mongoose.Schema

export const PlanetSchema = new Schema({
    name: {type:String, required:true, maxLength: 100},
    size: {type:Number}
})