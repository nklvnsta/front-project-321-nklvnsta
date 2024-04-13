import styled from 'styled-components';
import { Table, Button } from 'antd';

export const StyledContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

export const StyledTable = styled(Table)`
  margin-top: 20px;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

export const NavigationButtons = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

export const NavigationButton = styled(Button)`
  margin: 0 8px;
`;
