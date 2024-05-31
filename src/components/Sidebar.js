import React from 'react';
import styled from 'styled-components';
import DashboardImg from '../assets/Dashboard.svg';

// Sidebar component
const Sidebar = () => {
  return (
    <SidebarWrapper>
      <LogoWrapper>
        Acmy Solutions
      </LogoWrapper>
      <Menu>
        <MenuItem>
          <img src={DashboardImg} alt="Dashboard" />
          <span>Dashboard</span>
        </MenuItem>
      </Menu>
    </SidebarWrapper>
  );
};

// Styled components
const SidebarWrapper = styled.div`
  width: 250px;
  height: auto;
  background-color: #33074F;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
`;

const LogoWrapper = styled.div`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 50px;
`;

const Menu = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  width: 100%;
`;

const MenuItem = styled.li`
  display: flex;
  align-items: center;
  padding: 15px 20px;
  cursor: pointer;
  border-radius: 24px;
  margin: 8px 12px;
  &:hover {
    background-color: #EBE6ED1A;
  }
  img {
    margin-right: 10px;
  }
  span {
    margin-left: 10px;
  }
`;

export default Sidebar;
