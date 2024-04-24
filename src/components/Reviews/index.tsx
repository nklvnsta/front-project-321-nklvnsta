
import React, { FC } from 'react';
import { List, Avatar, Rate, Divider } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { MyTitle, ReviewCard } from './style';
import Paragraph from 'antd/es/skeleton/Paragraph';

interface Review {
  username: string;
  comment: string;
  rating: number;
}

const Reviews: FC = () => {
  const reviews: Review[] = [
    {
      username: 'Иванов Иван',
      comment: 'Цветы были потрясающими! Отличный сервис.',
      rating: 5,
    },
    // остальные отзывы...
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
      <MyTitle level={4}>Total Comments: {reviews.length}</MyTitle>
    </div>
  );
};

export default Reviews;
