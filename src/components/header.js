import { Link } from "gatsby"
import React from "react"
import styled from 'styled-components'
import {GiCrystalBars} from 'react-icons/gi'
import { menuData } from '../data/MenuData'
import { Button } from "./Button"


const Header = () => {
  return(
    <Nav>
      <NavLinkMain to="/">Nicholas Ventures</NavLinkMain>
      <Bars />
      <NavMenu>
        {menuData.map((item, index) => (
          <NavLink to={item.link} key={index}>
            {item.title}
          </NavLink>
        ))}
      </NavMenu>
      <NavBtn>
        <Button primary="true" round="true" to="/trips">
          Recent Trips
        </Button>
      </NavBtn>
    </Nav>
  )
}


export default Header

const Nav = styled.nav`
  background: rgba(0, 0, 0, 0.5);
  height: 80px;
  display: flex;
  justify-content: space-between;
  padding: .05rem calc((100vw - 1300px) / 2);
  z-index: 100;
  position: relative
`

const NavLinkMain = styled(Link)`
  color: #ffffff;
  display: flex;
  flex-box: flex-start;
  margin-top: 20px;
  margin-left: 15px;
  font-size: 30px;
  // align-items: center;
  text-decoration: none;
  height: 100%;
  cursor: pointer;
`

const NavLink = styled(Link)`
  color: #ffffff;
  display: flex;
  flex-box: flex-start;
  margin: 20px;
  font-size: 20px;
  align-items: center;
  text-decoration: none;
  height: 100%;
  cursor: pointer;
`

const Bars = styled(GiCrystalBars)`
  display: none;
  color: #000000;
  height: 50px;
  width: 50px;
  

  @media screen and (max-width: 795px){
    display: inline-flex;
    color: #000000;
    position: relative;
    top: -20px;
    bottom: 100px;
    height: 50px;
    width: 50px;
    right: -20px;
    transform: translate(-100%, 75%);
    font-size: 1.8rem
    cursor: pointer
  }
`

const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: --48px;

  @media screen and (max-width: 795px) {
    display: none;
  }
`

const NavBtn = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;
  // color: #5500cc;

  @media screen and (max-width: 795px) {
    display: none
  }
`