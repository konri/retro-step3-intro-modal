import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { useOutsideAlerter } from './hooks/useOutsideAlerter';

const Container = styled.div`
  position: relative;
`
const ColorPickerSelector = styled.div<{ color: string }>`
  display: flex;
  position: relative;
  width: 30px;
  height: 30px;
  border-radius: 32px;
  margin: 5px;
  background-color: ${(props) => props.color};
  cursor: pointer;
`;

const ColorPickerContainer = styled.div`
  position: absolute;
  display: flex;
  flex-wrap: wrap;
  top: 0px;
  left: 0px;
  width: 240px;
  border-radius: 10px;
  padding: 10px;
  background-color: #eeeeee;
`;

const colors = [
  '#f44336', '#e91e63', '#9c27b0', '#673ab7', '#3f51b5', '#2196f3',
  '#03a9f4', '#00bcd4', '#009688', '#4caf50', '#8bc34a', '#cddc39',
  '#ffeb3b', '#ffc107', '#ff9800', '#ff5722', '#795548', '#607d8b'
];

export interface ColorPickerProps {
  color: string;
  selectColor: (color: string) => void;
}

export function ColorPicker({ color, selectColor }: ColorPickerProps) {
  const wrapperRef = useRef(null);
  const [showColors, setShowColor] = useState(false);
  useOutsideAlerter(wrapperRef, () => {
    setShowColor(false);
  });

  return (
    <Container>
      <ColorPickerSelector color={color} onClick={() => {
        setShowColor(true);
      }}/>

      {showColors && (
        <ColorPickerContainer ref={wrapperRef}>
          {
            colors.map((selectedColor: string) => (
              <ColorPickerSelector color={selectedColor} onClick={() => {
                setShowColor(false);
                selectColor(selectedColor);
              }}/>
            ))
          }
        </ColorPickerContainer>
      )}
    </Container>
  );
}
