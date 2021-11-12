import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import logo from '../../../assets/team.png';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { setUserName } from '../../store/user.slice';
import { useHistory } from 'react-router-dom';

const IntroModalContainer = styled.div`
  display: flex;
  width: 40%;
  min-height: 25%;
  flex-direction: column;
  padding: 20px;
  background-color: #fff;
  box-shadow: rgb(0 0 0 / 20%) 0px 2px 4px -1px, rgb(0 0 0 / 14%) 0px 4px 5px 0px, rgb(0 0 0 / 12%) 0px 1px 10px 0px;
  border-radius: 8px;
  align-items: center;
  justify-content: space-between;
`;

const IntroModalHeader = styled.div`
  display: flex;
  padding-top: 20px;
  align-items: center;
`;

const HeaderImage = styled.img`
  width: 50px;
  height: 50px;
  margin-right: 20px;
`;

const HeaderText = styled.span`
  font-family: Verdana;
  font-weight: bold;
  color: #282c34;
  font-size: 20px;
`;

const NameInput = styled.input<{ error?: boolean }>`
  width: 90%;
  min-height: 36px;
  padding: 10px 14px;
  margin: 20px;
  line-height: 20px;
  font-size: 18px;
  color: #32363a;
  caret-color: #5899da;
  background-color: #f5f5f5;
  border: 1px solid #f5f5f5;
  border-radius: 4px;
  outline: none;

  ${props =>
          props.error &&
          css`
            background: #e21554;
            color: white;

            ::placeholder {
              color: white;
            }
          `};
`;

const TermsContainer = styled.div<{ error?: boolean }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  user-select: none;

  ${props =>
          props.error &&
          css`
            border-bottom: 1px solid #e21554;
          `};
`;

const CheckboxTerms = styled.input`
  margin-right: 10px;
`;

const SignInButton = styled.button`
  width: 95%;
  background-color: #0b6ed0;
  padding: 10px 14px;
  color: #fff;
  fill: #fff;
  font-size: 18px;
  margin-top: 20px;
  border: 1px solid #fff;
  border-radius: 4px;
  min-height: 36px;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  transition: border .2s, background .2s, color .2s;
`;

export function IntroModal() {
  const userName = useSelector((state: RootState) => state.user.name);
  const dispatch = useDispatch();

  const history = useHistory();

  const [clicked, setClicked] = useState<boolean>(false);
  const [terms, setTerms] = useState<boolean>(false);
  return (
    <IntroModalContainer>
      <IntroModalHeader>
        <HeaderImage src={logo} alt="logo"/>
        <HeaderText>Retrospective app - AGH workshop</HeaderText>
      </IntroModalHeader>
      <NameInput placeholder='Guest Username'
                 value={userName}
                 error={clicked && userName.length === 0}
                 onChange={(event) => dispatch(setUserName(event.target.value))}/>
      <TermsContainer error={clicked && !terms}>
        <CheckboxTerms onChange={(event) => setTerms(!!event.target.value)}
                       type='checkbox'
                       id='terms_check'
                       name='terms_check'/>
        <label htmlFor='terms_check'>By signing in you agree to our Workshop terms.</label>
      </TermsContainer>
      <SignInButton onClick={() => {
        setClicked(true);
        if (userName.length > 0 && terms) {
          history.push('/retro');
        }
      }}>
        Sign in
      </SignInButton>
    </IntroModalContainer>
  );
}
