import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  caption: { type: String, default: "" },
  mediaUrls: [String], // images/videos
}, { timestamps: true });

export default mongoose.model("Post", postSchema);

//there are no comments and likes in the current Schema
//becuase a post can have millions of likes/comments maxing out the array
//so we store likes and comments in completely different objects
//this way its not even related to the post
//if you want to get the comments and likes you can just 
//run a loop through the db with postid 

//scalability concept.