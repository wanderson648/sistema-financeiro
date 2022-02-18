import styled from 'styled-components';

export const Table = styled.table`
  width: 100%;
  background: #fff;
  padding: 20px;
  box-shadow: 0 0 05px #ccc;
  border-radius: 10px;
  margin-top: 20px;
`;

export const TableHeadeColumn = styled.th<{ width?: number }>`
  width: ${prop => prop.width ? `${prop.width}px`: 'auto'};
  padding: 10px 0;
  text-align: left;

`;