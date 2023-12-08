import React, { FC } from 'react'
import { Button, Menu, Flex } from 'antd'
import { Link } from 'react-router-dom'
import { CATALOG, HOME, REVIEWS, CONTACT } from '../../app/routing/config'
import { useAuth } from '../../hooks/useAuth'
import { UserOutlined } from '@ant-design/icons'


const NavBar: FC = () => {
    const { isAuth, setIsAuth } = useAuth()
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
            label: <Button onClick={() => setIsAuth(!isAuth)}>{isAuth ? 'Выйти' : 'Войти'}</Button>,
            key: 'auth',
        },
    ]
    return (
        <Menu style={{
            marginBottom: '2em',
            display: 'flex',
            justifyContent: 'space-between',
        }} mode="horizontal"  defaultSelectedKeys={["home"]} items={items} />
    )

}

export default NavBar