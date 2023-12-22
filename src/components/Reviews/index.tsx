import React, { FC } from 'react';
import { List, Avatar, Typography, Divider, Rate, Card } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import styled from 'styled-components';

const { Title, Paragraph } = Typography;

interface Review {
  username: string;
  comment: string;
  rating: number;
}

const MyTitle = styled(Title)`
  &.ant-typography {
    color: #00000044;
  }
`;


const ReviewCard = styled(Card)`
  margin-bottom: 16px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(188, 60, 184, 0.1);
`;

const Reviews: FC = () => {
  const reviews: Review[] = [
    {
      username: 'Иванов Иван',
      comment: 'Цветы были потрясающими! Отличный сервис.',
      rating: 5,
    },
    {
      username: 'Сидорова Алиса ',
      comment: 'На свой день рождения мне подарили красивый букет. Настоятельно рекомендую!',
      rating: 5,
    },
    {
      username: 'Галицкий Антон',
      comment: 'Разнообразие цветов поражает. Обязательно закажу снова.',
      rating: 4,
    },
    {
      username: 'Федоров Артем',
      comment: 'Цветы отличного качества и оперативная доставка. Очень доволен!',
      rating: 5,
    },
    {
      username: 'Матвеева Дарья',
      comment: 'Красивая композиция, цветы стояли долго. 5 звезд!',
      rating: 5,
    },
  ];

  return (
    <div className="container">
      {reviews.map((item) => (
        <ReviewCard key={item.username}>
          <List.Item>
            <List.Item.Meta
              avatar={<Avatar icon={<UserOutlined />} />}
              title={
                <>
                  <MyTitle level={4}>{item.username}</MyTitle>
                  <Rate disabled defaultValue={item.rating} />
                </>
              }
              description={<Paragraph>{item.comment}</Paragraph>}
            />
          </List.Item>
        </ReviewCard>
      ))}
      <Divider />
      <Typography.Title level={4}>Total Comments: {reviews.length}</Typography.Title>
    </div>
  );
};

export default Reviews;