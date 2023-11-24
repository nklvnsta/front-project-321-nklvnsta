// App.js
import React, { useState } from 'react';
import { Table, Input, Button, Space, Modal, Form } from 'antd';
import { SearchOutlined, EditOutlined, DeleteOutlined, PlusOutlined } from '@ant-design/icons';
import './app.css';

const { Search } = Input;

const initialData = [
  {
    key: '1',
    name: 'Роза',
    color: 'Красный',
    price: 10,
    quantity: 5,
  },
  {
    key: '2',
    name: 'Тюльпан',
    color: 'Розовый',
    price: 5,
    quantity: 10,
  },
  {
    key: '3',
    name: 'Лилия',
    color: 'Белый',
    price: 8,
    quantity: 8,
  },
];

const App = () => {
  const [data, setData] = useState(initialData);
  const [visible, setVisible] = useState(false);
  const [form] = Form.useForm();

  const columns = [
    {
      title: 'Имя',
      dataIndex: 'name',
      key: 'name',
      sorter: (a, b) => a.name.localeCompare(b.name),
    },
    {
      title: 'Цвет',
      dataIndex: 'color',
      key: 'color',
    },
    {
      title: 'Цена',
      dataIndex: 'price',
      key: 'price',
      sorter: (a, b) => a.price - b.price,
    },
    {
      title: 'Количество',
      dataIndex: 'quantity',
      key: 'quantity',
      sorter: (a, b) => a.quantity - b.quantity,
    },
    {
      title: 'Действия',
      dataIndex: 'actions',
      render: (text, record) => (
        <Space size="middle">
          <Button icon={<EditOutlined />} onClick={() => showEditModal(record)} />
          <Button icon={<DeleteOutlined />} onClick={() => handleDelete(record.key)} />
        </Space>
      ),
    },
  ];

  const showEditModal = record => {
    form.setFieldsValue(record);
    setVisible(true);
  };

  const handleDelete = key => {
    const newData = data.filter(item => item.key !== key);
    setData(newData);
  };

  const handleOk = () => {
    form
      .validateFields()
      .then(values => {
        form.resetFields();
        const newData = [...data];
        const existingItemIndex = newData.findIndex(item => item.key === values.key);

        if (existingItemIndex !== -1) {
          // Edit existing item
          newData[existingItemIndex] = values;
        } else {
          // Add new item
          newData.push({
            key: (data.length + 1).toString(),
            ...values,
          });
        }

        setData(newData);
        setVisible(false);
      })
      .catch(info => {
        console.log('Validate Failed:', info);
      });
  };

  const handleCancel = () => {
    setVisible(false);
  };

  return (
    <div className="container">
      <Space className="space">
        <Button type="primary" icon={<PlusOutlined />} onClick={() => showEditModal({})}>
          Добавить цветок
        </Button>
        <Search
          placeholder="Поиск цветов"
          onSearch={value => setSearchText(value)}
          style={{ width: 200 }}
          prefix={<SearchOutlined />}
        />
      </Space>
      <Table dataSource={data} columns={columns} />

      <Modal
        title="Добавить/Изменить цветок"
        visible={visible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form form={form} layout="vertical" name="form_in_modal">
          <Form.Item name="key" hidden>
            <Input />
          </Form.Item>
          <Form.Item
            name="name"
            label="Имя"
            rules={[{ required: true, message: 'Введите имя цветка' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item name="color" label="Цвет">
            <Input />
          </Form.Item>
          <Form.Item
            name="price"
            label="Цена"
          >
            <Input type="number" />
          </Form.Item>
          <Form.Item
            name="quantity"
            label="Количество"
          >
            <Input type="number" />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default App;
