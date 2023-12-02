import React, { useState, useEffect } from 'react';
import { Table, Input, Button, Space } from 'antd';
import axios from 'axios';
import './App.css';

const { Search } = Input;

const LIMIT_FLOWERS = 10;

const App = () => {
  const [dataSource, setDataSource] = useState([]);
  const [page, setPage] = useState(1);

  const fetchData = async (offset, limit) => {
    try {
      const response = await axios.get(`http://localhost:3001/flowers?_start=${offset}&_limit=${limit}`);
      setDataSource(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleTableChange = (pagination, filters, sorter) => {
    // Обработка изменений в таблице, например, сортировка
    console.log('Параметры сортировки:', sorter);
    console.log('Параметры фильтрации:', filters);
    console.log('Параметры пагинации:', pagination);

    // Ваша логика обработки событий
    // Например, вызов функции для загрузки данных с учетом сортировки и фильтрации
    fetchData((pagination.current - 1) * LIMIT_FLOWERS, LIMIT_FLOWERS);
  };

  const handleSearch = (value) => {
    // Простая логика поиска по имени букета
    const filteredData = data.filter((item) =>
      item.name.toLowerCase().includes(value.toLowerCase())
    );
    setDataSource(filteredData);
  };

  const handlePageChange = (newPage) => {
    setPage(newPage);
    fetchData((newPage - 1) * LIMIT_FLOWERS, LIMIT_FLOWERS);
  };

  useEffect(() => {
    fetchData((page - 1) * LIMIT_FLOWERS, LIMIT_FLOWERS);
  }, [page]);

  const columns = [
    {
      title: 'Название букета',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Цвет',
      dataIndex: 'color',
      key: 'color',
      filters: [
        { text: 'Розовый', value: 'Розовый' },
        { text: 'Красный', value: 'Красный' },
      ],
      onFilter: (value, record) => record.color === value,
    },
    {
      title: 'Цена',
      dataIndex: 'price',
      key: 'price',
      filters: [
        { text: '50 руб', value: 50 },
        { text: '100 руб', value: 100 },
        { text: '150 руб', value: 150 },
        { text: '200 руб', value: 200 },
        { text: '250 руб', value: 250 },
        { text: '300 руб', value: 300 },
        { text: '350 руб', value: 350 },
        { text: '400 руб', value: 400 },
        { text: '2500 руб', value: 2500 },
        { text: '3000 руб', value: 3000 },
      ],
      onFilter: (value, record) => record.price === value,
    },
    {
      title: 'Фото',
      dataIndex: 'photo',
      key: 'photo',
      render: (text, record) => (
        <img src={text} alt={record.name} style={{ width: '240px', height: '240px' }} />
      ),
    },
  ];

const data = [
  {
    key: '1',
    name: 'Лавандовые сны',
    color: 'Сиреневый',
    price: 150,
    photo: './src/img/1.jpg',
  },
  {
    key: '2',
    name: 'Клубничный десерт',
    color: 'Розовый',
    price: 150,
    photo: './src/img/2.jpg',
  },
  {
    key: '3',
    name: 'Букет Вероника',
    color: 'Желтый',
    price: 300,
    photo: './src/img/3.jpg',
  },
  {
    key: '4',
    name: 'Красный премиум ',
    color: 'Красный',
    price: 450,
    photo: './src/img/4.jpg',
  },
  {
    key: '5',
    name: 'Красный премиум ',
    color: 'Красный',
    price: 450,
    photo: './src/img/5.jpg',
  },
  {
    key: '6',
    name: 'Красный премиум ',
    color: 'Красный',
    price: 450,
    photo: './src/img/6.jpg',
  },
  {
    key: '7',
    name: 'Красный премиум ',
    color: 'Розовый',
    price: 450,
    photo: './src/img/7.jpg',
  },
  {
    key: '8',
    name: 'Красный премиум ',
    color: 'Розовый',
    price: 450,
    photo: './src/img/8.jpg',
  },
  {
    key: '9',
    name: 'Красный премиум ',
    color: 'Красный',
    price: 450,
    photo: './src/img/6.jpg',
  },
  {
    key: '10',
    name: 'Лавандовые сны',
    color: 'Сиреневый',
    price: 150,
    photo: './src/img/3.jpg',
  },
  {
    key: '1',
    name: 'Лавандовые сны',
    color: 'Сиреневый',
    price: 150,
    photo: './src/img/2.jpg',
  },
  {
    key: '1',
    name: 'Лавандовые сны',
    color: 'Сиреневый',
    price: 150,
    photo: './src/img/1.jpg',
  },
  {
    key: '1',
    name: 'Лавандовые сны',
    color: 'Сиреневый',
    price: 150,
    photo: './src/img/4.jpg',
  },
];

return (
  <div>
    <h1>Цветочный магазин Vostorg</h1>
    <Space style={{ marginBottom: 16 }}>
      <Search placeholder="Поиск" onSearch={handleSearch} enterButton />
    </Space>
    <Table
      columns={columns}
      dataSource={dataSource}
      pagination={false}
      onChange={handleTableChange}
    />
    <Button onClick={() => handlePageChange(page - 1)} disabled={page === 1}>
      Назад
    </Button>
    <span style={{ margin: '0 10px' }}>Страница: {page}</span>
    <Button onClick={() => handlePageChange(page + 1)}>Вперед</Button>
  </div>
);
};

export default App;