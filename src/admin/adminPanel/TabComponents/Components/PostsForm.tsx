import React, { ChangeEventHandler, FC } from "react";
import { Form, Input } from "antd";
import TextArea from "antd/lib/input/TextArea";
import { IPost } from "typings/flights";
import { onAction } from "../AdminPosts";

interface Props {
  newPost: IPost,
  onChangePost: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>
}

const PostsForm:FC<Props> = (props) => {
  return (
    <Form labelCol={{ span: 4 }} wrapperCol={{ span: 20 }}>
      <Form.Item label="ID">
        <Input
          value={props.newPost?.id}
          disabled={true}
          style={{ width: "20%" }}
        />
      </Form.Item>
      <Form.Item label="Tytuł">
        <Input
          value={props.newPost?.title}
          onChange={props.onChangePost}
          name="title"
          placeholder="Tytuł"
        />
      </Form.Item>
      <Form.Item label="Opis">
        <TextArea
          value={props.newPost?.content}
          onChange={props.onChangePost}
          name="description"
          placeholder="Opis"
          style={{ maxHeight: 100 }}
        />
      </Form.Item>
      <Form.Item label="Data utworzenia">
        <Input
          value={props.newPost?.createdAt}
          onChange={props.onChangePost}
          name="flightDate"
          placeholder="Data lotu"
        />
      </Form.Item>
      <Form.Item label="Obraz">
        <Input
          value={props.newPost?.thumbnailId}
          onChange={props.onChangePost}
          name="imageUrl"
          placeholder="Obraz"
        />
      </Form.Item>
    </Form>
  );
};

export default PostsForm;
