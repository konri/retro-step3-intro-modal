import React, { useCallback, useState } from 'react';
import styled from 'styled-components';

const CommentContainer = styled.div`
  border-radius: 5px;
  box-shadow: inset 0 1px 1px 0 rgb(30 34 47 / 4%), inset 0 1px 2px 1px rgb(30 34 47 / 4%);
  border: solid 1px #e7eaea;
  background-color: #ffffff;
  font-size: 11px;
  font-weight: bold;
  line-height: 1.45;
  letter-spacing: normal;
  color: #1e222f;
  padding: 15px 12px;
`;

const CommentTextArea = styled.textarea`
  color: #1e222f !important;
  font-size: 14px;
  color: #979fa6;
  font-family: "Verdana";
  display: inline-block;
  clear: both;
  border: none;
  background: none;
  box-shadow: none;
  width: 100%;
  padding: 0;
  margin: 0;
`;

export interface CommentTextareaProps {
  onCommentSave: (comment: string) => void;
}

export function CommentTextarea({ onCommentSave }: CommentTextareaProps) {
  const [text, setText] = useState('');

  const handleKeyPress = useCallback((event: any) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      if (text.length > 0) {
        onCommentSave(text);
        setText('');
      }
    }
  }, [text]);

  return (
    <CommentContainer>
      <CommentTextArea
        value={text}
        onChange={(event ) => setText(event.target.value) }
        placeholder='Press Enter to Add Comment'
        rows={2}
        maxLength={2000}
        onKeyPress={handleKeyPress}
      />
    </CommentContainer>
  );
}
