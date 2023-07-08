import { Button, Form, Input, Select, Space } from "antd";
import "./App.css";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";

function App() {
  const onFinish = (values) => {
    console.log(values);
  };

  const initialValues = {
    teacher: "Aamir",
    students: [
      {},
      {
        first: "David",
      },
    ],
  };

  return (
    <div className="App">
      <h1>Form Validation</h1>
      <Form
        onFinish={onFinish}
        initialValues={initialValues}
        style={{
          width: 600,
          height: 900,
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        <Form.Item
          name={"teacher"}
          label="Teacher Name"
          rules={[
            {
              required: true,
              message: "Teacher Name is required.",
            },
          ]}
        >
          <Input placeholder="Teacher Name" size="large" />
        </Form.Item>
        <Form.Item
          name={"class"}
          label="Class Name"
          rules={[
            {
              required: true,
              message: "Class Name is required.",
            },
          ]}
        >
          <Input placeholder="Class Name" size="large" />
        </Form.Item>
        <Form.List name={"students"}>
          {(fields, { add, remove }) => (
            <>
              {fields.map((field, index) => {
                return (
                  <Space direction="horizontal" size={12} className="add">
                    <Form.Item
                      name={[field.name, "first"]}
                      label={`Student Name ${index + 1}-Student`}
                      rules={[
                        {
                          required: true,
                          message: "First name is required.",
                        },
                      ]}
                    >
                      <Input placeholder="First Name" />
                    </Form.Item>
                    <Form.Item
                      name={[field.name, "last"]}
                      label={`Student Name ${index + 1}-Student`}
                    >
                      <Input placeholder="Last Name" />
                    </Form.Item>
                    <Form.Item name={[field.name, "gender"]}>
                      <Select placeholder="Gender">
                        {["Male", "Female"].map((gender, i) => {
                          return (
                            <Select.Option
                              value={gender}
                              key={i}
                            ></Select.Option>
                          );
                        })}
                      </Select>
                    </Form.Item>
                    <MinusCircleOutlined
                      style={{
                        height: 40,
                        color: "red",
                      }}
                      onClick={() => {
                        remove(field.name);
                      }}
                    />
                  </Space>
                );
              })}
              <Form.Item>
                <Button
                  type="dashed"
                  icon={<PlusOutlined />}
                  block
                  onClick={() => {
                    add();
                  }}
                >
                  Add a Student
                </Button>
              </Form.Item>
            </>
          )}
        </Form.List>
        <div className="btn">
          <Button htmlType="submit" type="primary">
            Submit
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default App;
