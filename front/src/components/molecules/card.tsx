import * as React from 'react'
import styled from 'styled-components'

interface CardType {
  title: string;
  url?: string;
  isBlank?: boolean;
}

export default ({ title, url, isBlank }: CardType) => {
  return (
    <Wrapper>
      <Inner href={url} target={isBlank && '_blank'}>
        {title}
      </Inner>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
`;
const Inner = styled.a`
  display: block;
  padding: 20px;
`;
