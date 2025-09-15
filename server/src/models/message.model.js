import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
  chatId: { type: mongoose.Schema.Types.ObjectId, ref: "Chat", required: true },
  senderId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  text: { type: String },
  mediaUrl: { type: String }, // optional
  isSecret: { type: Boolean, default: false },
}, { timestamps: true });

export default mongoose.model("Message", messageSchema);
