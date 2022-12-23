import React, { useState, useEffect } from "react";
import { Button, Table, Modal, Select, Space } from "antd";
import fakeData from "../fakeDataPost";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import PostsForm from "./Components/PostsForm";

const { Option } = Select;
const defaultDate = "Wszystkie";

const tableColumns = (onEditPostWindow, onDeletePost) => [
  {
    key: "1",
    title: "Data lotu",
    dataIndex: "flightDate",
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
  const [filteredDataSource, setFilteredDataSource] = useState(dataSource);
  const [selectedDate, setSelectedDate] = useState(defaultDate);
  const [newPost, setNewPost] = useState(null);
  const [whichWindowIsOpen, setWhichWindowIsOpen] = useState("NoWindow");

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
    setWhichWindowIsOpen("EditWindow");
    setNewPost({ ...record });
  };
  const resetWindow = () => {
    setWhichWindowIsOpen("NoWindow");
    setNewPost(null);
  };
  const onChangePost = (event) => {
    const { name, value } = event.target;
    setNewPost((prePost) => {
      return {
        ...prePost,
        [name]: value,
      };
    });
  };
  const getUniqueDates = () => {
    return [...new Set(dataSource.map((item) => item.flightDate))];
  };
  const changeTableBySelected = () => {
    if (selectedDate === defaultDate) {
      return dataSource;
    }
    return dataSource.filter((item) => {
      return selectedDate === item.flightDate;
    });
  };

  useEffect(() => {
    setFilteredDataSource(changeTableBySelected());
  }, [selectedDate, dataSource]);

  return (
    <div>
      <Space size="middle">
        <Button
          type="primary"
          onClick={() => setWhichWindowIsOpen("AddWindow")}
          style={{ marginBlock: 15 }}
        >
          Dodaj post
        </Button>

        <Select
          defaultValue={defaultDate}
          style={{
            width: 120,
          }}
          onChange={(value) => setSelectedDate(value)}
        >
          <Option value={defaultDate}></Option>
          {getUniqueDates().map((item) => (
            <Option value={item} key={item}></Option>
          ))}
        </Select>
      </Space>

      <Table
        columns={tableColumns(onEditPostWindow, onDeletePost)}
        dataSource={filteredDataSource}
      ></Table>

      <Modal
        title="Dodaj post"
        open={whichWindowIsOpen === "AddWindow" ? true : false}
        okText="Zapisz"
        cancelText="Anuluj"
        onCancel={() => {
          resetWindow();
        }}
        onOk={() => {
          setDataSource((preData) => {
            return [...preData, newPost];
          });
          resetWindow();
        }}
      >
        <PostsForm newPost={newPost} onChangePost={onChangePost} />
      </Modal>

      <Modal
        title="Edytuj post"
        open={whichWindowIsOpen === "EditWindow" ? true : false}
        okText="Zapisz"
        cancelText="Anuluj"
        onCancel={() => {
          resetWindow();
        }}
        onOk={() => {
          setDataSource((preData) => {
            return preData.map((post) => {
              return post.id === newPost.id ? newPost : post;
            });
          });
          resetWindow();
        }}
      >
        <PostsForm newPost={newPost} onChangePost={onChangePost} />
      </Modal>
    </div>
  );
};

export default AdminPosts;
