import React, { FC, useState, useEffect } from 'react';
import { Card, Skeleton, Avatar, Typography } from 'antd';
import { EnvironmentOutlined, PhoneOutlined, ClockCircleOutlined } from '@ant-design/icons';
import './style.css';

const { Meta } = Card;
const { Paragraph } = Typography;

interface IContact {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const Contact: FC = () => {
  const [isLoading, setLoading] = useState<boolean>(true);

  const delay = (ms: number) => new Promise((res) => setTimeout(() => setLoading(false), ms));

  useEffect(() => {
    delay(2000);
  }, []);

  const contacts: IContact[] = [
    {
      title: 'Адрес',
      description: 'ул. Михалковская, 7к3',
      icon: <EnvironmentOutlined />,
    },
    {
      title: 'Телефон',
      description: '+7 (977) 118-1899',
      icon: <PhoneOutlined />,
    },
  ];

  const workingHours = 'Пн-Вс: 10:00 - 20:00';

  return (
    <div className="contact-container">
      {contacts.map(({ title, description, icon }) => (
        <Card key={title} className="contact-card">
          <Skeleton loading={isLoading} avatar active>
            <Meta
              avatar={<Avatar icon={icon} />}
              title={title}
              description={description}
            />
          </Skeleton>
        </Card>
      ))}
      <Card className="working-hours-card">
        <Skeleton loading={isLoading} active>
          <Meta
            avatar={<Avatar icon={<ClockCircleOutlined />} />}
            title="Время работы"
            description={<Paragraph ellipsis={{ rows: 3 }}>{workingHours}</Paragraph>}
          />
        </Skeleton>
      </Card>
      <div className="google-map-card">
        <iframe
          title="Google Map"
          width="100%"
          height="400"
          style={{ border: 0 }}
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2249.023793621715!2d37.49823401576049!3d55.648872697867004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b548f0da28ee9d%3A0xb001c4e2efdf5db3!2sYour%20Location!5e0!3m2!1sen!2sus!4v1642913240259!5m2!1sen!2sus"
          allowFullScreen
        ></iframe>
      </div>
      <div className="text-div">
        <h2>Добро пожаловать в наш магазин цветов!</h2>
        <p>Мы с удовольствием поможем вам с выбором прекрасных цветов и оформлением букетов для любого случая.</p>
      </div>
    </div>
  );
};

export default Contact;
