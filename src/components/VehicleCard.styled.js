import { styled } from 'styled-components';

const StyledCard = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 274px;
  height: 426px;

  .img_div {
    width: 100%;
    height: 268px;
  }

  .img_div > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 14px;
  }

  .main_descr {
    display: flex;
    flex-direction: row;
    font-size: 16px;
    font-weight: 500;
    justify-content: space-between;
  }

  .secondary_descr {
    width: 100%;
  }

  .secondary_descr > ul {
    display: flex;
    flex-wrap: wrap;
    font-weight: 400;
    line-height: 1.5;
  }

  .secondary_descr > ul > li:not(:last-child) {
    border-right: 1px solid rgba(18, 20, 23, 0.1);
    padding-right: 6px;
  }

  .secondary_descr > ul > li:not(:first-child) {
    padding-left: 6px;
  }

  .secondary_descr > ul > li {
    font-size: 12px;
    color: rgba(18, 20, 23, 0.5);
  }

  button {
    border: none;
    border-radius: 12px;
    color: white;
    background-color: #3470ff;
    width: 100%;
    height: 44px;
    margin-bottom: 0;
  }
`;

export default StyledCard;
