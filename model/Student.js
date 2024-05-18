import mongoose from "mongoose";

const studentSchema = mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: Number, required: true },
  enrollNo: { type: Number, required: true },
  dateOfAddmission: { type: Date, required: true },
});

const student = mongoose.model("Student", studentSchema);

export default student;
