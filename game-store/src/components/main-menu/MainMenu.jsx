import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const MainMenuWrapper = styled.nav``;

const MainMenuList = styled.ul`
  display: flex;
  flex-direction: row;
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

const MainMenuButton = styled.li`
  margin-left: 32px;
  margin-right: 32px;
  padding: 0;
  font: inherit;
  background-color: transparent;
  border: 0;
  cursor: pointer;
  &:last-child {
    margin-right: 0;
  }
`;

const Hyperlink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

const MainMenu = () => {
  const menuItems = ['About store', 'Catalog', 'News', 'Login'];

  return (
    <>
      <MainMenuWrapper>
        <MainMenuList>
          {menuItems.map((item) => (
            <MainMenuButton key={item}>
              <Hyperlink to={item}>{item}</Hyperlink>
            </MainMenuButton>
          ))}
        </MainMenuList>
      </MainMenuWrapper>
    </>
  )
};

export default MainMenu;
