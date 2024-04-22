import React, { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import { CATALOG, HOME, REVIEWS, CONTACT } from '../../app/routing/config';
import { useAuth } from '../../hooks/useAuth';
import { StyledMenu, StyledButton } from './style';

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
      label: <StyledButton onClick={changeTheme}>Сменить тему</StyledButton>,
      key: 'theme',
    },
    {
      label: (
        <StyledButton onClick={() => setIsAuth(!isAuth)}>
          {isAuth ? 'Выйти' : 'Войти'}
        </StyledButton>
      ),
      key: 'auth',
    },
  ];

  return <StyledMenu mode="horizontal" defaultSelectedKeys={['home']} items={items} />;
};

export default NavBar;
