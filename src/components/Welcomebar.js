import React from 'react';
import styled from 'styled-components';
import VectorImg from '../assets/Vector.svg';
import CloseImg from '../assets/Close.svg';

// Welcomebar component
const Welcomebar = () => {
  return (
    <WelcomeMessage>
        <div>
        <h2>Welcome back, John Doe</h2>
        <p>The end of the year is coming. Are you planning your performance interviews? You can do this super efficiently with Acmy.</p>
        <a href="https://www.betalaunch.io/">Look here for more information</a>
        </div>
        <img src={VectorImg} alt="Vector" className="content-image" />
        <img src={CloseImg} alt="Close" className="close-icon" />
    </WelcomeMessage>
  );
};

// Styled components
const WelcomeMessage = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;

  a {
    color: #6d4cbb;
  }

  img.content-image {
    margin-left: 40px;
  }

  img.close-icon {
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
  }
  `;

export default Welcomebar;
