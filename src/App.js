import "./App.scss";
import { useEffect, useState } from "react";
import { Button, message } from "antd";
import ListStudent from "./components/listStudent";
import FormStudent from "./components/formStudent";
import * as uuid from "uuid";
import { StudentApi } from "./apis/students";

function App() {
  const [studentsList, setStudentsList] = useState([]);
  const [studentEdit, setStudentEdit] = useState(null);

  // Lấy dữ liệu student từ api
  const handleFetchAllStudent = async () => {
    try {
      const data = await StudentApi.getAllStudents();
      setStudentsList(data);
    } catch (error) {
      // message import từ antd
      message.error("Đã có lỗi xảy ra");
    }
  };

  // Dùng useEffect để gọi hàm fetchAllStudent từ didmount
  useEffect(() => {
    handleFetchAllStudent();
  }, []);

  // Lưu thông tin student đang chỉnh sửa
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleClickAddStudent = () => {
    setIsModalOpen(true);
    setStudentEdit(null);
  };

  const handleClickEditStudent = (_student) => {
    setStudentEdit(_student); // Lưu thông tin student đang edit vào state
    // console.log(_student, "_student");
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    setStudentEdit(null);
  };

  const handleAddStudent = async (student) => {
    const newStudent = {
      ...student,
      id: uuid.v4(),
    };

    try {
      await StudentApi.addStudent(newStudent);
    } catch (error) {
      message.error("Đã có lỗi xảy ra khi thêm mới student");
    } finally {
      handleFetchAllStudent();
      setIsModalOpen(false);
      // Get lai data sau khi add
    }
  };

  const handleEditStudent = async (newStudent) => {
    console.log(newStudent, "newStudent");
    try {
      await StudentApi.updateStudentById(newStudent.id, newStudent);
    } catch (error) {
      console.log("Da co loi xay ra khi edit student");
    } finally {
      setIsModalOpen(false);
      setStudentEdit(null); // student edit = null để về trạng thái add Student
      handleFetchAllStudent();
    }
  };

  const handleDeleteStudent = async (id) => {
    try {
      await StudentApi.deleteStudentById(id);
    } catch (error) {
      message.error("Da co loi khi delete student");
    } finally {
      handleFetchAllStudent();
      // Goi lai api get all Student
    }
  };

  return (
    <div className="app-container">
      <h1 className="app-container__title">Student Management</h1>
      <div className="app-container__body">
        <div className="app-container__gr-btn">
          <Button type="primary" onClick={handleClickAddStudent}>
            Add Student
          </Button>
        </div>
        <div className="app-container__list-st">
          {/* Đưa component List Student vào đây */}
          <ListStudent
            studentsList={studentsList}
            handleDeleteStudent={handleDeleteStudent}
            handleClickEditStudent={handleClickEditStudent}
          />
        </div>
      </div>

      <FormStudent
        isModalOpen={isModalOpen}
        handleAddStudent={handleAddStudent}
        handleCancel={handleCancel}
        studentEdit={studentEdit}
        handleEditStudent={handleEditStudent}
      />
    </div>
  );
}

export default App;
