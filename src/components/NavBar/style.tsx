import styled from 'styled-components';
import { Menu, Button } from 'antd';

export const StyledMenu = styled(Menu)`
  margin-bottom: 2em;
  display: flex;
  justify-content: space-between;
  background-color: var(--bg-color);
  color: var(--text-color);

  .ant-menu-item {
    &:hover {
      background-color: #f0f0f0;
    }
  }

  .ant-btn {
    margin-right: 8px;
    &:hover {
      background-color: #ffffff;
      border-color: #1890ff;
    }
  }
`;

export const StyledButton = styled(Button)`
  margin-right: 8px;
  &:hover {
    background-color: #ffffff;
    border-color: #1890ff;
  }
`;
