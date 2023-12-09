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
    border-bottom: 1px solid gray;
    background-color: #9eb8d9;
  }

  nav > a {
    margin-top: 20px;
    height: 100%;
  }
`;

export default StyledApp;
