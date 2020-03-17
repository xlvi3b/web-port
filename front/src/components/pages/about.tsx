import * as React from 'react'
import styled from 'styled-components';
import Card from '../molecules/card';

export default () => {
  return (
    <Wrapper>
      <Section>
        <Lead>About XLVI3</Lead>
        <p>hello</p>
      </Section>
      <Section>
        <Lead>Feature</Lead>
        <List>
          <Item>study 1</Item>
          <Item>study 2</Item>
          <Item>study 3</Item>
          <Item>study 4</Item>
        </List>
      </Section>
      <Section>
        <Lead>Timeline</Lead>
        <List>
          <Item>addition 1</Item>
          <Item>addition 2</Item>
          <Item>addition 3</Item>
          <Item>addition 4</Item>
        </List>
      </Section>
      <Section>
        <Lead>Contact</Lead>
        <List>
          <Card title="github" url="https://github.com/xlvi3b" isBlank={true} />
          <Card title="mail" />
          <Card title="twitter" />
        </List>
      </Section>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-top: 40px;
`;
const Section = styled.section`
  margin: 0 40px 40px;
  padding-bottom: 80px;

  &:not(:last-child) {
    border-bottom: 1px solid #cecece;
  }
`;
const Lead = styled.h2`
  margin-bottom: 20px;
  font-size: 28px;
  font-weight: bold;
  color: #383838;
`;
const List = styled.ul`
  list-style: none;
`;
const Item = styled.li`
  &:not(:last-child) {
    margin-bottom: 20px;
  }
`;
