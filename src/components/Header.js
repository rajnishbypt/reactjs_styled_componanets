import React from 'react'
import { NavLink } from 'react-router-dom'
import Navbar from './Navbar'
import styled from 'styled-components'

const MainHeader = styled.header`
padding:0 4.8rem;
height:4rem;
background-color:${({theme})=>theme.colors.bg};
display: flex;
justify-content: space-between;
align-items: center;
.logo{
  
}
 
`;
const Header = () => {
  return (
    <MainHeader>
        <NavLink to="/"   className="logo" >Logo</NavLink>
        <Navbar />
        
    </MainHeader>
  )
}
;

export default Header