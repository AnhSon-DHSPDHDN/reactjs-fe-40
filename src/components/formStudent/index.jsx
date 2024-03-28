import { Button, Form, Input, InputNumber } from "antd";

const initValuesForm = {
  name: "",
  score: 0,
}

const FormStudent = () => {
  return <Form
    name="formStudent"
    initialValues={initValuesForm}
    autoComplete="off"
    labelCol={{
      span: 6,
    }}
    wrapperCol={{
      span: 18
    }}
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

    <Button type="primary" htmlType="submit">
      Submit
    </Button>
  </Form>
}

export default FormStudent;
