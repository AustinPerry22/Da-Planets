import mongoose from "mongoose";
const Schema = mongoose.Schema

export const PlanetSchema = new Schema({
    name: { type: String, required: true, maxLength: 100 },
    size: { type: Number },
    galaxyId: { type: Schema.Types.ObjectId, ref: "Galaxy", required: true }
},
    { toJSON: { virtuals: true } }
)

PlanetSchema.virtual('galaxy', {
    localField: 'galaxyId',
    ref: "Galaxy",
    foreignField: "_id",
    justOne: true
})