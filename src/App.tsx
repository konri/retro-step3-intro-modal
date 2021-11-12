import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import AghLogo from './assets/agh-logo.png';
import QualtricsLogo from './assets/Qualtrics-logo.svg';
import styled from 'styled-components';
import { Workspace } from './app/components/Workspace/Workspace';

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: white;
  height: 100px;
  width: 100%;
  padding: 10px 20px;
`

const AppName = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-size: 32px;
  color: #282c34;
`

function App() {
  return (
    <div>
      <Header>
        <AppName>
          <img src={AghLogo} className="logo" alt="AghLogo" />
          Retrospective application
        </AppName>
        <img src={QualtricsLogo} className="logo" alt="QualtricsLogo" />
      </Header>

    <Router>
      <div>
        <Switch>
          <Route path="/">
            <Workspace />
          </Route>
        </Switch>
      </div>
    </Router>
    </div>
  );
}

export default App;
