import { styled } from 'styled-components';

const HomeStyled = styled.div`
  padding: 0;
  margin: 0;
  /* background-color: #6e6d6a; */
  background-image: linear-gradient(
      rgba(227, 26, 130, 0.8),
      rgba(18, 205, 232, 0.8)
    ),
    url('../../../public/main_img.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 100%;
  * {
    color: white;
  }

  span {
    color: rgba(38, 227, 58, 0.8);
  }

  h1,
  h2,
  h3 {
    margin-bottom: 12px;
    margin-top: 5px;
  }
  div {
    height: 100%;
    padding: 15px;
  }
`;

export default HomeStyled;
