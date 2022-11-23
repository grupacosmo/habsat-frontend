import React from "react";
import { Form, Input } from "antd";
import TextArea from "antd/lib/input/TextArea";

const PostsForm = (props) => {
  return (
    <Form labelCol={{ span: 4 }} wrapperCol={{ span: 20 }} form={props.form}>
      <Form.Item
        label="ID"
        name="id"
        rules={[
          {
            required: true,
            message: "Please input the title of collection!",
          },
        ]}
      >
        <Input style={{ width: "20%" }} />
      </Form.Item>
      <Form.Item
        label="Tytuł"
        name="title"
        rules={[
          {
            required: true,
            message: "Please input the title of collection!",
          },
        ]}
      >
        <Input placeholder="Tytuł" />
      </Form.Item>
      <Form.Item label="Opis" name="description">
        <TextArea placeholder="Opis" style={{ maxHeight: 100 }} />
      </Form.Item>
      <Form.Item
        label="Data lotu"
        name="flightDate"
        rules={[
          {
            required: true,
            message: "Please input the title of collection!",
          },
        ]}
      >
        <Input placeholder="Data lotu" />
      </Form.Item>
      <Form.Item label="Obraz" name="imageUrl">
        <Input placeholder="Obraz" />
      </Form.Item>
    </Form>
  );
};

export default PostsForm;
