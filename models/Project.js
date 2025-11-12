import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  image: { type: String }, // URL of project image
  status: { type: String, default: "ongoing" },
});

const Project = mongoose.model("Project", projectSchema);
export default Project;
