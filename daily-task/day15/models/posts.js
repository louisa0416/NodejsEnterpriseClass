const mongoose = require("mongoose");
const postSchema = new mongoose.Schema({
  content: { type: String, require: [true, "請輸入貼文內容"] },
  image: { type: String },
  likes: { type: Number, default: 0 },
  author: { type: String, require: [true, "請輸入發文者"] },
  createdAt: { type: Date, defaulted: Date.now, select: false },
  updatedAt: { type: Date, defaulted: Date.now },
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
