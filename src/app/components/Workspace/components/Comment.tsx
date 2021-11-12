import React from 'react';
import styled from 'styled-components';

export interface RetroCommentProps {
  color: string;
  content: string;
}

const CommentContainer = styled.div<{ color: string }>`
  border: solid 1px rgba(30, 34, 47, 0.06);
  background-color: ${(props => props.color)};
  border-radius: 5px;
  padding: 12px;
  text-align: center;
  margin-bottom: 20px;
  margin-top: 4px;
  display: flex;
  flex-direction: column;
  width: 100%;
  box-sizing: border-box;
  
`;

const CommentContent = styled.span`
  font-family: "Verdana";
  font-stretch: normal;
  letter-spacing: normal;
  text-align: center;
  color: #1e222f;
  display: inline-block;
  margin: 14px;
  word-break: break-word;
`;

const CommentFooter = styled.div`
  display: flex;
  justify-content: left;
  align-items: flex-start;
  font-weight: bold;
`

export function Comment({  color, content }: RetroCommentProps) {
  return (
    <CommentContainer color={color}>
      <CommentContent>
        {content}
      </CommentContent>
      <CommentFooter>
        user
      </CommentFooter>
    </CommentContainer>
  );
}
