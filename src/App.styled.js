import { styled } from 'styled-components';

const StyledApp = styled.div`
  nav {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
    height: 75px;
    column-gap: 15px;
    font-size: 25px;
    border-bottom: 2px solid gray;
    background-color: rgba(18, 205, 232, 0.8);
  }

  nav > a {
    margin-top: 20px;
    height: 100%;
  }
`;

export default StyledApp;
