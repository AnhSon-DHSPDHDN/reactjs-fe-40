import "./App.scss";
import { useState } from "react";
import { Button } from "antd";
import ListStudent from "./components/listStudent";
import FormStudent from "./components/formStudent";
import * as uuid from "uuid";

const keyStudentsList = "students";

function App() {
  const [studentsList, setStudentsList] = useState(
    JSON.parse(localStorage.getItem(keyStudentsList)) || []
  );
  const [studentEdit, setStudentEdit] = useState(null);
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

  const handleAddStudent = (student) => {
    const newStudent = {
      ...student,
      id: uuid.v4(),
    };
    setStudentsList([newStudent, ...studentsList]);
    setIsModalOpen(false);
    localStorage.setItem(
      keyStudentsList,
      JSON.stringify([newStudent, ...studentsList])
    );
  };

  const handleEditStudent = (newStudent) => {
    const _newStudentsList = studentsList.map((_student) => {
      if (_student.id === newStudent.id) {
        return { ...newStudent };
      }
      return { ..._student };
    });
    setStudentsList(_newStudentsList);
    setIsModalOpen(false);
    setStudentEdit(null); // student edit = null để về trạng thái add Student
    localStorage.setItem(keyStudentsList, JSON.stringify(_newStudentsList));
  };

  const handleDeleteStudent = (id) => {
    const newStudentList = studentsList.filter((_student) => {
      return _student.id !== id;
    });
    setStudentsList(newStudentList);
    localStorage.setItem(keyStudentsList, JSON.stringify(newStudentList));
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
