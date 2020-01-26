/* globals __PATH_PREFIX__ */
import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
// import typography, { rhythm, scale } from '../utils/typography'
import Navegation from './navegation'
import { GlobalStyles } from '../utils/global'

// export const GlobalStyles = createGlobalStyle`
//   @import url('https://fonts.googleapis.com/css?family=Bowlby+One+SC|Martel|Open+Sans:800,800i&display=swap');

//   html, body {
//     margin: 0;
//     padding: 0;
//     font-family: 'Martel', serif;
//     overflow-x: hidden;
//     overflow-y: auto;
//   }

//   p {
//     margin-top: 2em;
//   }

//   h1, h2, h3 {
//     font-family: 'Bowlby One SC', cursive;
//     font-family: 'Open Sans', sans-serif;
//     text-transform: uppercase;
//     letter-spacing: 1px;
//     color: #333242;
//   }

//   a {
//     color: #ff5200;
//   }

//   a:hover {
//     text-decoration: underline;
//   }

//   h3 a {
//     text-decoration: none;
//     font-family: 'Open Sans', sans-serif;
//     position: relative;
//     font: 800 2rem/1 'Open Sans',sans-serif;
//     font-size: 26px;
//     text-transform: uppercase;
//     color: #34323b;
//     margin-bottom: 5rem;
//     letter-spacing: -1px;
//   }

//   main {
//     margin-top: 2em;
//   }
// `

class Layout extends React.Component {
  render () {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    const blogPath = `${__PATH_PREFIX__}/blog/`
    let header

    if (location.pathname === rootPath || location.pathname === blogPath) {
      header = (
        <h1
          style={{
            marginBottom: '1.45rem',
            marginTop: 0
          }}
        >
          <Link
            style={{
              boxShadow: 'none',
              textDecoration: 'none',
              color: 'inherit'
            }}
            to={location.pathname === blogPath ? '/blog/' : '/'}
          >
            {title}
          </Link>
        </h1>
      )
    } else {
      header = (
        <h3
          style={{
            marginTop: 0
          }}
        >
          <Link
            style={{
              boxShadow: 'none',
              textDecoration: 'none',
              color: 'inherit'
            }}
            to='/'
          >
            {title}
          </Link>
        </h3>
      )
    }
    return (
      <>
        <Navegation />
        <Wrapper>
          <div
            style={{
              marginLeft: 'auto',
              marginRight: 'auto',
              maxWidth: 680,
              padding: 16
            }}
          >
            <GlobalStyles />

            {/* <header>{header}</header> */}
            <main>{children}</main>
          </div>
          <Footer>
          © {new Date().getFullYear()}, Built with
            {' '}
            <a href='https://www.gatsbyjs.org'>Love</a>
          </Footer>
        </Wrapper>
      </>
    )
  }
}

const Wrapper = styled.div`
  min-height: 100vh;
`

const Footer = styled.footer`
  text-align: center;
  margin: 24px;
`

export default Layout
