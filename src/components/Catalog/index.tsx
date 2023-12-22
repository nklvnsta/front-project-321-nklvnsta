import React, { FC, useEffect, useState } from 'react';
import { Table, Button, Typography } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import styled from 'styled-components';

const { Title } = Typography;

const StyledContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

const StyledTable = styled(Table)`
  margin-top: 20px;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const NavigationButtons = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const NavigationButton = styled(Button)`
  margin: 0 8px;
`;

const LIMIT = 10;

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
      setPages({ page: 1, maxPages: 1 });
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
    <StyledContainer>
      <Title level={3}>Каталог</Title>
      <StyledTable dataSource={dataSource} columns={columns} loading={isLoading} pagination={false} />
      <NavigationButtons>
        <NavigationButton onClick={() => setPages({ page: 1, maxPages: 1 })} disabled={true}>
          Назад
        </NavigationButton>
        <p>{pages.page}</p>
        <NavigationButton disabled={true} onClick={() => setPages({ page: 1, maxPages: 1 })}>
          Вперёд
        </NavigationButton>
      </NavigationButtons>
    </StyledContainer>
  );
};

export default Catalog;
