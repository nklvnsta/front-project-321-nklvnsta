import React, { FC, useState, useEffect } from 'react';
import { Card, Skeleton, Avatar, Typography } from 'antd';
import { EnvironmentOutlined, PhoneOutlined, ClockCircleOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import { SubmitHandler, useForm } from "react-hook-form";

const { Meta } = Card;
const { Paragraph } = Typography;

const StyledCard = styled(Card)`
  margin-bottom: 16px; 
  margin-top: 20px;
`;

const FeedbackForm = styled.div`
max-width: 400px;
margin: 0 auto;
padding: 20px;
border: 1px solid #ccc;
border-radius: 5px;
font-family: 'Montserrat', sans-serif; /* Use Montserrat font */
margin-top: 50px;
background-color: #fefefe;
color: #000000;

    h2 {
        font-size: 1.5em;
        margin-bottom: 20px;
    }

    form {
        display: flex;
        flex-direction: column;

        div {
            display: flex;
            flex-direction: column;
            margin-bottom: 15px;

            label {
                margin-bottom: 5px;
            }

            input {
                padding: 8px;
                border: 1px solid #000000;
                border-radius: 3px;
            }

            div {
                color: #f40000;
                font-size: 0.8em;
            }
        }

        button {
            padding: 10px;
            background-color: #3498db;
            color: #000000;
            border: none;
            border-radius: 3px;
            cursor: pointer;
            transition: background-color 0.3s;

            &:hover {
                background-color: #2980b9;
            }

            &:active {
                background-color: #216a94;
            }

            &:disabled {
                background-color: #ccc;
                cursor: not-allowed;
            }

        }
        
    }

    p {
        margin-top: 20px;
        font-size: 1.2em;
    }
`;

interface IMyForm {
  name: string;
  number: number;
  flower: string;
}


interface IContact {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const Contact: FC = () => {
  const {
    register, // метод для регистрации вашего инпута, для дальнейшей работы с ним
    handleSubmit, // метод для получения данных формы, если валидация прошла успешна
    formState: {errors,isValid}, // errors - список ошибок валидации для всех полей формы
    reset // метод для очистки полей формы
} = useForm<IMyForm>({
    mode: "onBlur", // парметр onBlur - отвечает за запуск валидации при не активном состоянии поля
})
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

  const saveElement: SubmitHandler<IMyForm> = data => {
    // здесь мы передаём новый массив, который содержит все старые элементы и новый
    // ...prev - мы получаем все элементы текущего стэйте (с помощью spread оператора)
        setTasks((prev) => [...prev, data])
        reset();
    }

  
  const [tasks, setTasks] = useState<IMyForm[]>([])

  const workingHours = 'Пн-Вс: 10:00 - 20:00';

  return (
    <div className="container">
      {contacts.map(({ title, description, icon }) => (
        <StyledCard  key={title} className="contact-card">
          <Skeleton loading={isLoading} avatar active>
            <Meta
              avatar={<Avatar icon={icon} />}
              title={title}
              description={description}
            />
          </Skeleton>
        </StyledCard >
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
      <div>
         <FeedbackForm>
    <h2>Форма обратной связи:</h2>
      <form onSubmit={handleSubmit(saveElement)}>
    <div>
        <label htmlFor="name">Имя:</label>
        <input 
            {...register('name', {
                required: "Поле обязательно для заполнения",
                minLength: {
                    value: 5,
                    message: "Нужно больше символов"
                }
            })}
        />
        <div>{errors.name?.message}</div>
    </div>
    <div>
        <label htmlFor="number">Номер телефона:</label>
        <input 
            {...register('number', {
                required: "Поле обязательно для заполнения",
                minLength: {
                    value: 5,
                    message: "Нужно больше символов"
                },
                pattern: {
                    value: /^\+7\d{10}$/,
                    message: "Введите номер в формате +7XXXXXXXXXX"
                }
            })}
        />
        <div>{errors.number?.message}</div>
    </div>
    <div>
        <label htmlFor="flower">Цветок:</label>
        <input 
            {...register('flower', {
                required: "Поле обязательно для заполнения",
                minLength: {
                    value: 5,
                    message: "Нужно больше символов"
                }
            })}
        />
        
    </div>
    <button disabled={!isValid} type="submit">Сохранить</button>
</form>

{tasks.map((task) => 
    <p key={task.number}>
        Имя: {task.name} - Номер: {task.number} - Цветок: {task.flower}
    </p>
)}
        </FeedbackForm>


 <div className="text-div">
        <h2>Добро пожаловать в наш магазин цветов!</h2>
        <p>Мы с удовольствием поможем вам с выбором прекрасных цветов и оформлением букетов для любого случая.</p>
      </div>
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
    </div>
    </div>
  );
};

export default Contact;
