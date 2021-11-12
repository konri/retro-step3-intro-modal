import React  from 'react';
import styled from 'styled-components';
import { ColorPicker } from './ColorPicker';
import { Comment } from './Comment';
import { CommentTextarea } from './CommentTextarea';

const ColumnContainer = styled.div`
  border-radius: 8px;
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 2%), 0 2px 3px 0 rgb(0 0 0 / 2%), 0 2px 7px 0 rgb(0 0 0 / 4%);
  background-color: #ffffff;
  text-align: left;
  padding: 24px 20px;
  margin: 0 12px;
  min-width: 260px;
  max-width: 350px;
  height: fit-content;
`;

const ColumnHeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
`;

const ColumnTitle = styled.div`
  font-family: Verdana;
  font-weight: bold;
  font-size: 15px;
  line-height: 16px;
  letter-spacing: -0.37px;
  color: #1e222f;
  margin-top: 0;
`;


export interface RetroColumnProps {
  id: number;
  title: string;
  comments: Array<string>;
  color: string;
}

export function Column({ id, title, comments, color }: RetroColumnProps) {
  return (
    <ColumnContainer>
      <ColumnHeaderContainer>
        <ColumnTitle>{title}</ColumnTitle>
        <ColorPicker color={color} selectColor={(color) => console.log(color)}/>
      </ColumnHeaderContainer>

      {comments.map((comment: string) => <Comment color={color} content={comment}/>)}

      <CommentTextarea onCommentSave={(text: string) => console.log('tes', text)}/>
    </ColumnContainer>
  );
}
