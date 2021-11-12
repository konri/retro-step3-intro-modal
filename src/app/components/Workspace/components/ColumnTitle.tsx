import React, { useCallback, useState } from 'react';
import styled from 'styled-components';

const Title = styled.div`
  font-family: Verdana;
  font-weight: bold;
  font-size: 15px;
  line-height: 16px;
  letter-spacing: -0.37px;
  color: #1e222f;
  margin-top: 0;
`;

const InputTitle = styled.input`
  min-width: 60px;
  height: 25px;
  color: #1e222f !important;
  font-size: 14px;
  font-family: "Verdana";
  display: inline-block;
  clear: both;
  border: solid 1px #e7eaea;
  background: none;
  box-shadow: inset 0 1px 1px 0 rgb(30 34 47 / 4%), inset 0 1px 2px 1px rgb(30 34 47 / 4%);
  width: 100%;
  padding: 0;
  margin: 0;
`;


export interface ColumnTitleProps {
  title: string;
  onSave: (title: string) => void;
}

export function ColumnTitle({ title, onSave }: ColumnTitleProps) {
  const [showInput, setShowInput] = useState(false);
  const [text, setText] = useState('');

  const handleKeyPress = useCallback((event: any) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      if (text.length > 0) {
        onSave(text);
        setShowInput(false);
        setText('');
      }
    }
  }, [text]);


  if (showInput) {
    return <InputTitle placeholder={title}
                       autoFocus
                       onChange={(event) => setText(event.target.value)}
                       onKeyPress={handleKeyPress}/>;
  }
  return <Title onClick={() => setShowInput(true)}>{title}</Title>;
}
