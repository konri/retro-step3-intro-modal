import React from 'react';
import { ColumnContainer } from './ColumnContainer';
import add_icon from '../../../../assets/add.png';
import styled from 'styled-components';

const AddContainer = styled(ColumnContainer)`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 150px;
  cursor: pointer;
`
const AddButton = styled.img`
  width: 50px;
  height: 50px;
`;

export interface AddColumnProps {
  onClick: () => void;
}
export function AddColumn({ onClick }:AddColumnProps) {
  return (
    <AddContainer onClick={onClick}>
      <AddButton src={add_icon}/>
    </AddContainer>
  )
}
