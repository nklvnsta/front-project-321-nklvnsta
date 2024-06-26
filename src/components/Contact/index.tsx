import React, { FC, useState, useEffect } from "react";
import { Card, Skeleton, Avatar, Typography } from "antd";
import { ClockCircleOutlined, EnvironmentOutlined, PhoneOutlined } from "@ant-design/icons";
import styled from "styled-components";
import { SubmitHandler, useForm } from "react-hook-form";
import MyDocument from "../FileDcument/index";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { FeedbackForm } from "./style";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { IDocument } from "../FileDcument/types";

const { Meta } = Card;
const { Paragraph } = Typography;

const StyledCard = styled(Card)`
  margin-bottom: 15px;
  margin-top: 20px;
`;

interface IMyForm {
  name: string;
  number: string; // Changed number to string for consistency
  flower: string;
  picture: File | string;
}

interface IContact {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const Contact: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm<IMyForm>({
    mode: "onBlur",
  });
  const [isLoading, setLoading] = useState<boolean>(true);
  const [created, setCreated] = useState<boolean>(false);
  const [tasks, setTasks] = useState<IMyForm[]>([]);
  const workingHours = "Пн-Вс: 15:00 - 20:00";

  const contacts: IContact[] = [
    {
      title: "Адрес",
      description: "ул. Михалковская, 7к3",
      icon: <EnvironmentOutlined />,
    },
    {
      title: "Телефон",
      description: "+7 (977) 118-1899",
      icon: <PhoneOutlined />,
    },
  ];

  const delay = async (ms: number) => await new Promise((resolve) => setTimeout(resolve, ms));

  useEffect(() => {
    delay(2000).then(() => {
      setLoading(false);
    });
  }, []);

  const saveElement: SubmitHandler<IMyForm> = (data) => {
    const reader = new FileReader();
    const { picture, name, number, flower } = data;

    reader.readAsDataURL(picture as File);

    reader.onload = () => {
      const newTask = {
        flower,
        name,
        number,
        picture: reader.result as string,
      };
      reset();
      setTasks((prev) => [newTask, ...prev]);
      setCreated(true);
    };
  };

  return (
    <div className="container">
      {contacts.map(({ title, description, icon }) => (
        <StyledCard key={title} className="contact-card">
          <Skeleton loading={isLoading} avatar active>
            <Meta avatar={<Avatar icon={icon} />} title={title} description={description} />
          </Skeleton>
        </StyledCard>
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
      <FeedbackForm>
        <h2>Форма обратной связи:</h2>
        <form onSubmit={handleSubmit(saveElement)}>
          <label htmlFor="name">Имя:</label>
          <input {...register("name", { required: "Поле обязательно для заполнения", minLength: 5 })} />
          <div>{errors?.name?.message}</div>
          <label htmlFor="number">Номер телефона:</label>
          <input
            {...register("number", {
              required: "Поле обязательно для заполнения",
              pattern: {
                value: /^\+7\d{10}$/,
                message: "Введите номер в формате +7XXXXXXXXXX",
              },
            })}
          />
          <div>{errors?.number?.message}</div>
          <label htmlFor="flower">Цветок:</label>
          <input {...register("flower", { required: "Поле обязательно для заполнения", minLength: 5 })} />
          <label htmlFor="picture">Картинка:</label>
          <input
            id="picture"
            type="file"
            accept="image/*"
            {...register("picture", { required: "Please select picture!" })}
          />
          <button disabled={!isValid} type="submit">
            Сохранить
          </button>
        </form>
        {created && tasks.length > 0 && (
          <PDFDownloadLink document={<MyDocument document={tasks[0]} />} fileName="post.pdf">
            {({ loading }) => (loading ? "Loading..." : "Download")}
          </PDFDownloadLink>
        )}
        {tasks.map((task, index) => (
          <div key={index}>
            <p>
              Имя: {task.name} - Номер: {task.number} - Цветок: {task.flower}
            </p>
            <img
              src={task.picture as string}
              alt="картинка"
              height={180}
              style={{ width: "100%", objectFit: "cover", objectPosition: "center" }}
            />
          </div>
        ))}
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
  );
};

export default Contact;
