import React from 'react';
import styled from "styled-components";
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <MainHeader>
        <NavLink to="/">
            <img src="" alt="error" />
        </NavLink>
    </MainHeader>
  )

  const MainHeader = styled.header`
    padding: 0 4.8rem;
    height: 10rem;
    background-color: ${({ theme }) => theme.colors.bg};
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;

    .logo{
        height: 5rem;
    }
  `
}

export default Header