import mongoose from "mongoose";

const chatSchema = new mongoose.Schema({
  members: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }], // 2 for DM, >2 for group
  type: { type: String, enum: ["dm", "group", "secret"], default: "dm" },
  name: { type: String }, // optional, for group chats
  lastMessage: { type: String },
}, { timestamps: true });

export default mongoose.model("Chat", chatSchema);
