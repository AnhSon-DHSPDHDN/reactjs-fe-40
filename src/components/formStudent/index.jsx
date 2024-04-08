import { Form, Input, InputNumber, Modal } from "antd";
import { useEffect } from "react";

const initValuesForm = {
  name: "",
  score: 0,
}

const FormStudent = ({
  handleAddStudent,
  isModalOpen,
  handleCancel,
  studentEdit,
  handleEditStudent
}) => {
  const [form] = Form.useForm();
  const onFinish = (formValues) => {
    if (studentEdit) {
      handleEditStudent({
        ...studentEdit,
        name: formValues.name,
        score: formValues.score
      })
    } else {
      handleAddStudent(formValues);
    }
    form.resetFields();
  }

  useEffect(() => {
    if (studentEdit) {
      form.setFieldsValue({
        name: studentEdit.name,
        score: studentEdit.score
      });
    } else {
      isModalOpen && form.resetFields();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [studentEdit, form, isModalOpen])

  return <Modal
    title={studentEdit ? "Form Student Edit" : "Form Student"}
    open={isModalOpen}
    onOk={() => form.submit()}
    onCancel={handleCancel}
  >
    <Form
      name="formStudent"
      form={form}
      initialValues={initValuesForm}
      autoComplete="off"
      labelCol={{
        span: 6,
      }}
      wrapperCol={{
        span: 18
      }}
      onFinish={onFinish}
      labelAlign={"left"}
    >
      <Form.Item
        label={"Full Name"}
        name={"name"}
        rules={[
          {
            required: true,
            message: "Please input name"
          }
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label={"Score"}
        name={"score"}
        rules={[
          {
            required: true,
            message: "Please input score"
          },
        ]}
      >
        <InputNumber max={10} min={0} />
      </Form.Item>
    </Form>
  </Modal>
}

export default FormStudent;
