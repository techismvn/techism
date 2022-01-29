import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${(props) => props.backgroundColor || 'white'};
  padding: ${(props) => props.paddingVertical || '0'}px ${(props) => props.fluid ? '0px' : props.paddingHorizontal || '10%'};
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
`;
