import React, { FC } from 'react';
import { Typography, Row, Col } from 'antd';
import flowerImage1 from '../img/home1.jpg';
import flowerImage2 from '../img/home2.jpg';
import flowerImage3 from '../img/home3.jpg';

const { Title, Paragraph } = Typography;

const Home: FC = () => {
  return (
    <div>
      <Typography>
        <Title>Vostorg</Title>
        <Paragraph>
          "Окунитесь в мир восторга с нашими великолепными цветами, воплощающими красоту и радость каждого мгновения!"
        </Paragraph>
      </Typography>

      <Row gutter={[16, 16]}>
        <Col span={8}>
          <img src={flowerImage1} alt="Flower 1" style={{ width: '100%' }} />
        </Col>
        <Col span={8}>
          <img src={flowerImage2} alt="Flower 2" style={{ width: '100%' }} />
        </Col>
        <Col span={8}>
          <img src={flowerImage3} alt="Flower 3" style={{ width: '100%' }} />
        </Col>
      </Row>
    </div>
  );
};

export default Home;