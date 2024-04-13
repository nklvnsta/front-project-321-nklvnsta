import React, { FC, useEffect, useState } from 'react';
import { Typography } from 'antd';
import { StyledContainer, StyledTable, NavigationButtons, NavigationButton } from './style';
import type { ColumnsType } from 'antd/es/table';

const { Title } = Typography;

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
