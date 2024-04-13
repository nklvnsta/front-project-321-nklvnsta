import { FC } from 'react';
import { Row, Col, Typography } from 'antd';
import flowerImage1 from '../img/home1.jpg';
import flowerImage2 from '../img/home2.jpg';
import flowerImage3 from '../img/home3.jpg';
import { MyTitle, MyParagraph } from './style';

const Home: FC = () => {
  return (
    <div className="container">
      <Typography>
        <MyTitle>Vostorg</MyTitle>
        <MyParagraph>
          "Окунитесь в мир восторга с нашими великолепными цветами, воплощающими красоту и радость каждого мгновения!"
        </MyParagraph>
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
      
      <MyTitle>О нас</MyTitle>
      <MyParagraph>
        В самом сердце нашего магазина цветов бьется страсть к красоте и свежести. Мы заботливо отбираем каждый цветок, чтобы ваш подарок был настоящим воплощением любви и внимания. Наши букеты — это исключительное сочетание цветов, ароматов и эмоций.
      </MyParagraph>

      <MyTitle>Наш ассортимент:</MyTitle>
      <MyParagraph>
        Выбирайте из нашего разнообразного ассортимента: от изысканных роз до нежных лилий, от стильных суккулентов до элегантных орхидей. Наши флористы создают уникальные композиции, чтобы каждый букет стал особым, как и тот, кому он предназначен.
      </MyParagraph>

      <MyTitle>Услуги:</MyTitle>
      <MyParagraph>
        Мы не только предлагаем вам прекрасные цветы, но и обеспечиваем первоклассное обслуживание. Доставка в удобное для вас время, персонализированные композиции по вашему заказу и гарантия свежести — все, чтобы ваш подарок стал уникальным и запоминающимся.
      </MyParagraph>
    </div>
  );
};

export default Home;
