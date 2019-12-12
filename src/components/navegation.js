import React, { useContext } from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import Headrom from 'react-headroom'
// import AppContext from '../AppContext'

const Nav = styled.nav`
  width: 100%;
  height: 55px;
  background: #100f13;
  display: flex;
  align-items: center;
  justify-content: space-around;
  font: 800 1.2em 'Open Sans',sans-serif;
`

const NavLink = styled(Link)`
  color: #999;
  text-decoration: none;
`

const activeStyles = {
  color: '#FFF'
}

const Navigation = () => {
  // const { isLoggedIn, user, logout } = useContext(AppContext)

  return (
    <Headrom>
      <Nav>
        <NavLink to='/' activeStyle={activeStyles} exact>
          RocksFenix
        </NavLink>
        {/* <NavLink to='/cursos' activeStyle={activeStyles}>
          Cursos
        </NavLink>
        <NavLink to='/signup' activeStyle={activeStyles}>
          Signup
        </NavLink> */}
      </Nav>
    </Headrom>
  )
}

export default Navigation
