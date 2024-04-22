import styled from "styled-components";
import { Typography, Card } from "antd";

const { Title, Paragraph } = Typography;

export const MyTitle = styled(Title)`
  &.ant-typography {
    color: #00000044;
  }
`;

export const ReviewCard = styled(Card)`
  margin-bottom: 16px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(188, 60, 184, 0.1);
`;
