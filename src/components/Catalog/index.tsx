import React, { FC, useEffect, useState } from 'react';
import { Table, Space, Flex, Button, Image, Typography } from 'antd';
import type { ColumnsType } from 'antd/es/table';

const LIMIT = 10;

const { Title } = Typography;

interface IPerson {
  name: string;
  city: string;
}

const Catalog: FC = () => {
  const [pages, setPages] = useState({ page: 1, maxPages: 1 });
  const [dataSource, setDataSource] = useState<IPerson[]>([]);
  const [isLoading, setLoading] = useState<boolean>(false);

  const getData = async (page: number, limit: number) => {
    setLoading(true);

    try {
      const response = await fetch('https://mocki.io/v1/d4867d8b-b5d5-4a48-a4ab-79131b5809b8');
      const data: IPerson[] = await response.json();
      setDataSource(data);
      setPages({ page: 1, maxPages: 1 }); // Assuming the fake API doesn't provide pagination information
    } catch (error) {
      console.error('Error fetching data:', error);
    }

    setLoading(false);
  };

  useEffect(() => {
    getData(1, LIMIT);
  }, []);

  const columns: ColumnsType<IPerson> = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'City',
      dataIndex: 'city',
      key: 'city',
    },
  ];

  return (
    <>
      <Table dataSource={dataSource} columns={columns} loading={isLoading} pagination={false} />
      <Flex gap="middle" justify="center">
        <button onClick={() => setPages({ page: 1, maxPages: 1 })} disabled={true}>
          Назад
        </button>
        <p>{pages.page}</p>
        <button disabled={true} onClick={() => setPages({ page: 1, maxPages: 1 })}>
          Вперёд
        </button>
      </Flex>
    </>
  );
};

export default Catalog;

