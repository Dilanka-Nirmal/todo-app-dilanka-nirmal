import React from 'react';
import ProfileImg from '../assets/Profile.svg';
import NotificationImg from '../assets/Notifications.svg';
import DownArrowImg from '../assets/Chevron-down.svg';
import styled from 'styled-components';

// Header component
const Header = () => {
  return (
    <HeaderWrapper>
      <h1>Dashboard</h1>
      <HeaderIcons>
        <img src={NotificationImg} alt="Notification" />
        <img src={ProfileImg} alt="User Profile" />
        <img src={DownArrowImg} alt="Down Arrow" />
      </HeaderIcons>
    </HeaderWrapper>
  );
};

// Styled components
const HeaderWrapper = styled.div`
  display: flex;
  font-size: 12px;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  height: 25px;
`;

const HeaderIcons = styled.div`
  img {
    margin-left: 20px;
    border-radius: 50%;
    cursor: pointer;
  }
`;

export default Header;
