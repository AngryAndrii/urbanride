import { styled } from 'styled-components';

const StyledCard = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 274px;
  height: 426px;
  border-radius: 14px;
  /* &:hover {
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.12), 0 2px 2px rgba(0, 0, 0, 0.12),
      0 4px 4px rgba(0, 0, 0, 0.12), 0 8px 8px rgba(0, 0, 0, 0.12),
      0 16px 16px rgba(0, 0, 0, 0.12);
  } */
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
    flex-wrap: nowrap;
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
    white-space: nowrap;
    overflow: hidden;
  }

  .info_button {
    border: none;
    border-radius: 12px;
    color: white;
    background-color: #3470ff;
    width: 100%;
    height: 44px;
    margin-bottom: 0;
    font-size: 14px;
    font-weight: 600;
  }

  .info_button:is(:hover, :focus) {
    background-color: #0b44cd;
  }
`;

export default StyledCard;
