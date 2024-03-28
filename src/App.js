import "./App.scss";
import { useState } from "react";
import { Button, Modal } from "antd";
import ListStudent from "./components/listStudent";
import FormStudent from "./components/formStudent";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="app-container">
      <h1 className="app-container__title">Student Management</h1>
      <div className="app-container__body">
        <div className="app-container__gr-btn">
          <Button type="primary" onClick={showModal}>
            Add Student
          </Button>
        </div>
        <div className="app-container__list-st">
          {/* Đưa component List Student vào đây */}
          <ListStudent />
        </div>
      </div>

      <Modal
        title="Form Student"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <FormStudent />
      </Modal>
    </div>
  );
}

export default App;
