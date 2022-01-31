import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${(props) => props.backgroundColor || 'white'};
  padding: ${(props) => props.paddingVertical || '0'}px ${(props) => props.fluid ? '0px' : props.paddingHorizontal || '10%'};
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  background-image: ${(props) => 'url(' + props.backgroundImage + ')' || 'none'};
`;

export const Arrow = styled.div`
  border: solid ${(props) => props.color || 'black'};
  border-width: ${(props) => props.arrowThick + 'px 0 0 ' + props.arrowThick + 'px'};
  display: inline-block;
  padding: ${(props) => props.arrowSize}px;
  transform: rotate(${(props) => props.arrowDirection}deg);
  -webkit-transform: rotate(${(props) => props.arrowDirection}deg);
  cursor: ${(props) => props.cursor || 'unset'};
`;