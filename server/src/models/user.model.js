import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  passwordHash: { type: String, required: true },
  avatarUrl: { type: String, default: "" },
  bio: { type: String, default: "" },
  settings: {
    privateAccount: { type: Boolean, default: false },  // only followers can see posts
    emailNotifications: { type: Boolean, default: true },
    pushNotifications: { type: Boolean, default: true },
    showOnlineStatus: { type: Boolean, default: true }, // affects typing/presence
    theme: { type: String, enum: ["light", "dark"], default: "light" },
  }
}, { timestamps: true });

export default mongoose.model("User", userSchema);
