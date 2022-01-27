import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${(props) => props.backgroundColor || 'white'};
  padding: 0px ${(props) => props.fluid ? '0px' : props.paddingHorizontal || '10%'};
  width: ${(props) => props.width}px;
`;
