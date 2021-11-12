import React from 'react';
import styled from 'styled-components';
import { Column } from './components/Column';

const WorkspaceContainer = styled.div`
  display: flex;
  background-color: rgba(80, 89, 96, 0.6);
  width: 100%;
  height: 100%;
  min-height: 100vh;
  padding: 40px 20px;
`;
const Content = styled.div`
  display: flex;
  flex-direction: row;
`;


const mockComments = [
  'Great help and engagement from X team in the last week.',
  'Development of feature Y was great',
  'Party from last week was awesome!'
];

export function Workspace() {
  return (
    <WorkspaceContainer>
      <Content>
        <Column title='PLUS' id={1} comments={mockComments} color={'#e5f6d2'}/>
      </Content>
    </WorkspaceContainer>
  );
}
