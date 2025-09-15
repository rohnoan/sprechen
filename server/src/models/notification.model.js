import mongoose from "mongoose";

const notificationSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  actorId: { type: mongoose.Schema.Types.ObjectId, ref: "User" }, // who triggered it
  type: { type: String, enum: ["like", "comment", "follow", "message"], required: true },
  refId: { type: mongoose.Schema.Types.ObjectId }, // post/comment/message id
  isRead: { type: Boolean, default: false },
}, { timestamps: true });

export default mongoose.model("Notification", notificationSchema);
