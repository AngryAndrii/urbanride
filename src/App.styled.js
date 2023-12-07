import { styled } from 'styled-components';

const StyledApp = styled.div`
  nav {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
    height: 40px;
    column-gap: 15px;
    font-size: 25px;
    margin-bottom: 10px;
  }

  nav > a {
    display: block;
    height: 100%;
  }
`;

export default StyledApp;
