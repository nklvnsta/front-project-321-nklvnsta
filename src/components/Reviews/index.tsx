import React, { FC } from 'react';
import { List, Avatar, Typography, Divider, Rate } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const { Title, Paragraph } = Typography;

interface Review {
  username: string;
  comment: string;
  rating: number;
}

const Reviews: FC = () => {
  const reviews: Review[] = [
    {
      username: 'John Doe',
      comment: 'The flowers were stunning! Excellent service.',
      rating: 5,
    },
    {
      username: 'Alice Smith',
      comment: 'I received a beautiful bouquet on my birthday. Highly recommended!',
      rating: 5,
    },
    {
      username: 'Bob Johnson',
      comment: 'The variety of flowers is amazing. Will definitely order again.',
      rating: 5,
    },
    {
      username: 'Emily Brown',
      comment: 'Great quality flowers and prompt delivery. Very satisfied!',
      rating: 5,
    },
    {
      username: 'David White',
      comment: 'Beautiful arrangements, and the flowers lasted a long time. 5 stars!',
      rating: 5,
    },
  ];

  return (
    <>
      <List
        itemLayout="horizontal"
        dataSource={reviews}
        renderItem={(item) => (
          <List.Item>
            <List.Item.Meta
              avatar={<Avatar icon={<UserOutlined />} />}
              title={
                <>
                  <Title level={4}>{item.username}</Title>
                  <Rate disabled defaultValue={item.rating} />
                </>
              }
              description={<Paragraph>{item.comment}</Paragraph>}
            />
          </List.Item>
        )}
      />
      <Divider />
      <Typography.Title level={4}>Total Comments: {reviews.length}</Typography.Title>
    </>
  );
};

export default Reviews;
