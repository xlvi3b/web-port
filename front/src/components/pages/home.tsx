import * as React from 'react'
import styled from 'styled-components';

export default () => {
  return (
    <Wrapper>
      <Hero>
        <HeroInner>
          <HeroVisual />
        </HeroInner>
      </Hero>
      <Content>
        <Title>Hello, XLVI3</Title>
      </Content>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
`;
const Hero = styled.div`
  height: 480px;
  width: auto;
`;
const HeroInner = styled.div`
  position: relative;
  height: 100%;
  width: auto;
  
  &::before {
    position: absolute;
    display: block;
    content: '';
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(100, 150, 150, 0.2);
    z-index: 2;
  }
`;
const HeroVisual = styled.div`
  background: url(/img/hero_01.jpg) no-repeat;
  background-size: cover;
  background-position: 50% 50%;
  height: 100%;
  width: auto;
  min-width: 780px;
`;
const Section = styled.section`
  margin: 0 40px 40px;
  padding-bottom: 80px;

  &:not(:last-child) {
    border-bottom: 1px solid #cecece;
  }
`;
const Content = styled.div`
  margin-top: 80px;
`;
const Title = styled.h1`
  font-size: 48px;
  font-weight: bold;
  text-align: center;
`;
