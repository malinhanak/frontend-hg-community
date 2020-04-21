import React from 'react';
import styled from 'styled-components';

export const FancyButton = ({ onClick, children, className }) => {
  return (
    <ButtonStyle className={className} onClick={onClick}>
      <div class='btn btn-two'>
        <span>{children}</span>
      </div>
    </ButtonStyle>
  );
};

const ButtonStyle = styled.div`
  font-family: 'Roboto', sans-serif;
  font-size: 0.9rem;

  .btn {
    line-height: 50px;
    height: 50px;
    text-align: center;
    width: 250px;
    cursor: pointer;
  }
  .btn-two {
    color: #fff;
    transition: all 0.5s;
    position: relative;
  }
  .btn-two span {
    z-index: 2;
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
  }
  .btn-two::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    transition: all 0.5s;
    border: 1px solid rgba(252, 186, 3, 0.2);
    background-color: rgba(252, 186, 3, 0.1);
  }
  .btn-two::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    transition: all 0.5s;
    border: 1px solid rgba(255, 255, 255, 0.2);
    background-color: rgba(255, 255, 255, 0.1);
  }
  .btn-two:hover::before {
    transform: rotate(-45deg);
    background-color: rgba(255, 255, 255, 0);
  }
  .btn-two:hover::after {
    transform: rotate(45deg);
    background-color: rgba(255, 255, 255, 0);
  }
`;
