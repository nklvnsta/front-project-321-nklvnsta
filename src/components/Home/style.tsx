// style.tsx
import styled from 'styled-components';
import { Typography } from 'antd';

export const MyTitle = styled(Typography.Title)`
  &.ant-typography {
    color: var(--text-color);
    font-size: 1.5rem;
  }
`;

export const MyParagraph = styled(Typography.Paragraph)`
  &.ant-typography {
    color: var(--text-color);
  }
`;
