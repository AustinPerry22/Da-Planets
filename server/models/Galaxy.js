import mongoose from "mongoose"
const Schema = mongoose.Schema

export const GalaxySchema = new Schema({
    name: { type: String, required: true, maxLength: 50 },
    type: { type: String, enum: ["Spiral", "Elliptical", "Irregular"], default: "Spiral" },
    imgUrl: { type: String, default: "https://images.unsplash.com/photo-1538370965046-79c0d6907d47?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Z2FsYXh5fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" }
})