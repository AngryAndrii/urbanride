import { styled } from 'styled-components';

const CatalogStyled = styled.div`
  display: flex;
  flex-direction: column;

  .list {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    column-gap: 29px;
    row-gap: 50px;
  }

  .loadMoreBtn {
    margin-top: 100px;
    margin-bottom: 150px;
    text-decoration: underline;
    font-size: 16px;
    font-weight: 500;
    color: #3470ff;
    background-color: rgba(0, 0, 0, 0);
    border: none;
    &:is(:hover, :focus) {
      color: #0b44cd;
    }
  }
`;

export default CatalogStyled;
