import * as React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default ({ children }) => (
  <Wrapper>
    <Side>
      <List>
        <ListItem><Link to="/">Top</Link></ListItem>
        <ListItem><Link to="/about">About</Link></ListItem>
        <ListItem><Link to="/users">Users</Link></ListItem>
      </List>
    </Side>
    <Main>
      {children}
    </Main>
  </Wrapper>
);

const Wrapper = styled.div`
  position: relative;
  display: flex;
`;
const Side = styled.div`
  position: fixed;
  height: 100%;
  width: 160px;
  background-color: #fff;
  border-right: 1px solid #606e85;
  z-index: 10;
`;
const Main = styled.div`
  flex: 1;
  margin-left: 160px;
`;
const List = styled.ul`
  margin-top: 0;
`;
const ListItem = styled.li`
  a {
    padding: 15px 20px;
    display: block;
    font-size: 14px;
    font-weight: bold;
    color: #606e85;

    &:hover {
      background-color: #e9e9e9;
    }
  }
`;
