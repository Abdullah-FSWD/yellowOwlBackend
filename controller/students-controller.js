import Student from "../model/Student.js";

export const getStudent = async (request, response) => {
  try {
    const students = await Student.find();
    return response.status(200).json(students);
  } catch (err) {
    console.error("Error getting student:", err);
    response.status(500).json({ err: err.message });
  }
};

export const addStudent = async (request, response) => {
  const exist = await Student.findOne({ enrollNo: request.body.enrollNo });
  console.log("Post");

  try {
    if (exist) {
      response.status(200).json({ msg: "Student Already Exists" });
      return;
    }

    const newStudent = new Student(request.body);
    await newStudent.save();
    return response.status(200).json(newStudent);
  } catch (err) {
    console.error("Error adding student:", err);
    response.status(500).json({ err: err.message });
  }
};

export const updateStudent = async (request, response) => {
  console.log("Update");
  console.log(request.params);
  try {
    console.log(request.body);
    const { id } = request.params;
    const update = request.body;

    const updatedStudent = await Student.findByIdAndUpdate(id, update, {
      new: true,
    });

    if (!updatedStudent) {
      return response.status(404).json({ message: "Student not found" });
    }

    response.json(updatedStudent);
  } catch (error) {
    console.error("Error updating student:", error);
    return response.status(500).json({ message: "Internal server error" });
  }
};

export const deleteStudent = async (request, response) => {
  const { id } = request.params;

  try {
    await Student.findByIdAndDelete(id);
    response.status(200).json({ message: "Student deleted successfully" });
  } catch (error) {
    console.error("Error deleting student:", error);
    return response.status(500).json({ error: error.message });
  }
};
