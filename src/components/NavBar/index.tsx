import React, { FC, useState } from 'react';
import { Button, Menu, Flex } from 'antd';
import { Link } from 'react-router-dom';
import { CATALOG, HOME, REVIEWS, CONTACT } from '../../app/routing/config';
import { useAuth } from '../../hooks/useAuth';
import styled from 'styled-components';

const StyledMenu = styled(Menu)`
  margin-bottom: 2em;
  display: flex;
  justify-content: space-between;

  .ant-menu-item {
    &:hover {
      background-color: #f0f0f0; /* Change the background color on hover */
    }
  }

  .ant-btn {
    margin-right: 8px;
    &:hover {
      background-color: #ffffff; /* Change the background color on hover */
      border-color: #1890ff;
    }
  }
`;

const NavBar: FC = () => {
  const { isAuth, setIsAuth } = useAuth();
  const [currentTheme, setCurrentTheme] = useState<'dark' | 'light'>('light');

  const changeTheme = () => {
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    setCurrentTheme(newTheme);
  };

  const items = [
    {
      label: <Link to={HOME}>Главная</Link>,
      key: 'home',
    },
    {
      label: <Link to={CATALOG}>Каталог</Link>,
      key: 'catalog',
    },
    {
      label: <Link to={REVIEWS}>Отзывы</Link>,
      key: 'reviews',
    },
    {
      label: <Link to={CONTACT}>Контакты</Link>,
      key: 'contact',
    },
    {
      label: <Button onClick={changeTheme}>Сменить тему</Button>,
      key: 'theme',
    },
    {
      label: (
        <Button onClick={() => setIsAuth(!isAuth)}>{isAuth ? 'Выйти' : 'Войти'}</Button>
      ),
      key: 'auth',
    },
  ];

  return <StyledMenu mode="horizontal" defaultSelectedKeys={['home']} items={items} />;
};

export default NavBar;
