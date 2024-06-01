import React, { FC, useEffect, useState, useRef } from "react";
import { Table, Button, Typography } from "antd";
import type { ColumnsType } from "antd/es/table";
import styled from "styled-components";
import axios from "axios";

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

interface UniversityData {
  country: string;
  name: string;
}

const columns: ColumnsType<UniversityData> = [
  {
    title: 'Страна',
    dataIndex: 'country',
    key: 'country',
  },
  {
    title: 'Название университета',
    dataIndex: 'name',
    key: 'name',
  },
];

const LIMIT_LIST_SCHOOL = 10;

const Catalog: FC = () => {
  const [page, setPage] = useState<number>(1);
  const [dataSource, setDataSource] = useState<UniversityData[]>([]);
  const [isLoading, setLoading] = useState<boolean>(false);
  const [fetching, setFetching] = useState<boolean>(false);

  const loaderRef = useRef<HTMLDivElement>(null);

  const getUniversity = async (page: number, limit: number) => {
    setLoading(true);
    try {
      const response = await axios.get<UniversityData[]>(`http://universities.hipolabs.com/search?offset=${(page - 1) * limit}&limit=${limit}`);
      setDataSource(prevData => [...prevData, ...response.data]);    
    } catch (error) {
      console.error("Error fetching university data:", error);
    }
    setLoading(false);
    setFetching(false);
  }

  useEffect(() => {
    getUniversity(page, LIMIT_LIST_SCHOOL);
  }, [page]);

  useEffect(() => {
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      const target = entries[0];
      if (target.isIntersecting && !fetching) {
        setFetching(true);
        setPage(prevPage => prevPage + 1);
      }
    };

    const options = {
      threshold: 1.0
    };

    const observer = new IntersectionObserver(handleIntersection, options);

    if (loaderRef.current) {
      observer.observe(loaderRef.current);
    }

    return () => {
      if (loaderRef.current) {
        observer.unobserve(loaderRef.current);
      }
    };
  }, [loaderRef, fetching]);

  return (
    <StyledContainer>
      <Title level={3}>Каталог университетов</Title>
      <StyledTable dataSource={dataSource} columns={columns} loading={isLoading} pagination={false} />
      <NavigationButtons>
        <NavigationButton onClick={() => setPage(page - 1)} disabled={page === 1}>
          Назад
        </NavigationButton>
        <p>{page}</p>
        <NavigationButton onClick={() => setPage(page + 1)}>Вперёд</NavigationButton>
      </NavigationButtons>
      <div ref={loaderRef} />
    </StyledContainer>
  );
};

export default Catalog;
