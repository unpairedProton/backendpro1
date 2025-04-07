import mongoose from "mongoose"
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2"


const videoSchema = new mongoose.Schema(
    {
videoFile:{
    type:String,
    required:true
},
thumbnail:{
    type:String,
    required:true
},
title:{
    type:String,
    required:true
},
description:{
    type:String,
    required:true
},
duration:{
    type:Number, // cloud url
    required:true
},
views:{
    type:Number, // cloud url
    default:0
},
isPublished:{
    type:Boolean, // cloud url
    default:true
},
owner:{
    type:mongoose.Schema.Types.ObjectId, // cloud url
    ref:"User"
},
},{
    timestamps:true
}
)

videoSchema.plugin(mongooseAggregatePaginate)

export const Video = mongoose.model("Video",videoSchema)