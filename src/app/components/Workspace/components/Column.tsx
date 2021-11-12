import { ColorPicker } from './ColorPicker';
import React, { useState } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { ColumnContainer } from './ColumnContainer';
import { CommentTextarea } from './CommentTextarea';
import { Comment } from './Comment';
import { ColumnTitle } from './ColumnTitle';
import { addComment, RetroComment, setColumnColor, setColumnTitle } from '../../../store/retroWorkspace.slice';

const ColumnHeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
`;

export interface RetroColumnProps {
  id: number;
  title: string;
  comments: Array<RetroComment>;
  color: string;
}

export function Column({ id, title, comments, color }: RetroColumnProps) {
  const name = 'user'

  const dispatch = useDispatch();
  return (
    <ColumnContainer>
      <ColumnHeaderContainer>
        <ColumnTitle title={title} onSave={(title) => dispatch(setColumnTitle({id, title}))}/>
        <ColorPicker color={color} selectColor={(color) => dispatch(setColumnColor({id, color}))}/>
      </ColumnHeaderContainer>

      {comments.map((comment: RetroComment) => <Comment userName={comment.name} color={color} content={comment.text}/>)}

      <CommentTextarea onCommentSave={(text: string) => dispatch(addComment({id, comment: {name, text}}))}/>
    </ColumnContainer>
  );
}
