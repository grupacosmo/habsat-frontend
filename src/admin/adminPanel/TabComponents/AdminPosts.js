import React, { useState } from "react";
import { Form, Input, Button, Table, Modal } from "antd";
import fakeData from "../fakeDataPost";
import {
  DeleteOutlined,
  EditOutlined,
  PictureOutlined,
} from "@ant-design/icons";
import TextArea from "antd/lib/input/TextArea";

const tableColumns = (onEditPostWindow, onDeletePost) => [
  {
    key: "1",
    title: "ID",
    dataIndex: "id",
  },
  {
    key: "2",
    title: "Tytuł",
    dataIndex: "title",
  },
  {
    key: "3",
    title: "Opis",
    dataIndex: "description",
  },
  {
    key: "4",
    title: "Obraz",
    dataIndex: "imageUrl",
    render: (theImageUrl) => (
      <img
        style={{ width: 120, height: 100, borderRadius: 5 }}
        alt="post"
        src={theImageUrl}
      />
    ),
  },
  {
    key: "5",
    title: "Działania",
    render: (record) => {
      return (
        <>
          <EditOutlined
            onClick={() => onEditPostWindow(record)}
            style={{ color: "#1890ff" }}
          />
          <DeleteOutlined
            onClick={() => onDeletePost(record)}
            style={{ marginLeft: 12, color: "#f5222d" }}
          />
        </>
      );
    },
  },
];

const AdminPosts = () => {
  const [dataSource, setDataSource] = useState(fakeData);
  const [isEditing, setIsEditing] = useState(false);
  const [editPost, setEditPost] = useState(null);
  const [isAdding, setIsAdding] = useState(false);

  const onDeletePost = (record) => {
    Modal.confirm({
      title: `Czy na pewno chcesz usunąć post "${record.title}"?`,
      okText: "Tak",
      okType: "danger",
      cancelText: "Nie",
      onOk: () => {
        setDataSource((preData) => {
          return preData.filter((post) => post.id !== record.id);
        });
      },
    });
  };
  const onEditPostWindow = (record) => {
    setIsEditing(true);
    setEditPost({ ...record });
  };
  const resetEditing = () => {
    setIsEditing(false);
    setEditPost(null);
  };
  const resetAdding = () => {
    setIsAdding(false);
    setEditPost(null);
  };
  const onChangePost = (event) => {
    const { name, value } = event.target;
    setEditPost((prePost) => {
      return {
        ...prePost,
        [name]: value,
      };
    });
  };
  const onAddPostWindow = () => {
    setIsAdding(true);
  };

  return (
    <div>
      <Button
        type="primary"
        onClick={onAddPostWindow}
        style={{ marginBlock: 15 }}
      >
        Dodaj post
      </Button>
      <Table
        columns={tableColumns(onEditPostWindow, onDeletePost)}
        dataSource={dataSource}
      ></Table>

      <Modal
        title="Dodaj post "
        open={isAdding}
        okText="Zapisz"
        cancelText="Anuluj"
        onCancel={() => {
          resetAdding();
        }}
        onOk={() => {
          setDataSource((preData) => {
            return [...preData, editPost];
          });
          resetAdding();
        }}
      >
        <Input.Group>
          <Input />
          <Input value={editPost?.title} onChange={onChangePost} name="title" />
        </Input.Group>
        <TextArea
          value={editPost?.description}
          onChange={onChangePost}
          name="description"
        />
        <Input
          value={editPost?.imageUrl}
          onChange={onChangePost}
          name="imageUrl"
        />
      </Modal>
      <Modal
        title="Edytuj post"
        open={isEditing}
        okText="Zapisz"
        cancelText="Anuluj"
        onCancel={() => {
          resetEditing();
        }}
        onOk={() => {
          setDataSource((preData) => {
            return preData.map((post) => {
              return post.id === editPost.id ? editPost : post;
            });
          });
          resetEditing();
        }}
      >
        <Input.Group>
          <Input
            value={editPost?.id}
            disabled={true}
            style={{ width: "25%" }}
          />
          <Input
            value={editPost?.title}
            onChange={onChangePost}
            name="title"
            style={{ width: "75%" }}
          />
        </Input.Group>
        <TextArea
          value={editPost?.description}
          onChange={onChangePost}
          name="description"
          style={{ maxHeight: 100 }}
        />
        <Input
          value={editPost?.imageUrl}
          onChange={onChangePost}
          name="imageUrl"
          prefix={<PictureOutlined style={{ color: "#1890ff" }} />}
        />
      </Modal>
    </div>
  );
};

export default AdminPosts;
