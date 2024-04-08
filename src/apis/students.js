import axios from "axios";

export const StudentApi = {
  getAllStudents: async () => {
    const response = await axios.get(`${process.env.REACT_APP_BE_URL}students`);
    return response.data;
  },
  getStudentsById: async (id) => {
    const response = await axios.get(
      `${process.env.REACT_APP_BE_URL}students/${id}`
    );
    return response.data;
  },
  addStudent: async (newStudent) => {
    await axios.post(`${process.env.REACT_APP_BE_URL}students`, newStudent);
  },
  deleteStudentById: async (id) => {
    await axios.delete(`${process.env.REACT_APP_BE_URL}students/${id}`);
  },
  updateStudentById: async (id, studentUpdate) => {
    await axios.patch(
      `${process.env.REACT_APP_BE_URL}students/${id}`,
      studentUpdate
    );
  },
};
