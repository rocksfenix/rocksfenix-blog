import styled from 'styled-components'

export default styled.button`
  display: block;
  border: none;
  text-align: center;
  box-sizing: border-box;
  text-decoration: none;
  padding: 10px 25px;
  cursor: pointer;
  text-transform: uppercase;
  letter-spacing: 2px;

  background: ${props => props.background || 'black'};
  color: ${props => props.color || 'rgb(255, 255, 255)'};
  font-size: ${props => props.fontSize || '15px'};
  font-weight: ${props => props.fontWeight || '600'};
  border-radius: ${props => props.radius || '6px'};
  margin-top: ${props => props.marginTop};
  margin-bottom: ${props => props.marginBottom};

  &:hover {
    box-shadow: inset 0 0 100px 100px rgba(255, 255, 255, 0.25);
  }
`
