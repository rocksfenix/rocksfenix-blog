/**
 * Bio component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Image from 'gatsby-image'
import styled from 'styled-components'

import { rhythm } from '../utils/typography'

const Bio = () => {
  return (
    <StaticQuery
      query={bioQuery}
      render={data => {
        const { author, social } = data.site.siteMetadata
        return (
          <Container>
            <Image
              fixed={data.avatar.childImageSharp.fixed}
              alt={author}
              style={{
                marginRight: rhythm(1 / 2),
                marginBottom: 0,
                minWidth: 50,
                borderRadius: '100%'
              }}
              imgStyle={{
                borderRadius: '50%'
              }}
            />
            <p>
              Escrito por <strong>{author}</strong> quien es un apasionadopor el mundo de desarrollo basado en tecnologias Javascript
              {' '}
              <a href={`https://twitter.com/${social.twitter}`}>
                deberias seguirlo en Twitter
                <span role='img' aria-label='wave emoji'>
                  😉
                </span>
              </a>
              <a href='https://www.youtube.com/channel/UCUG3rE3syMzYWCtGmlaU3KQ'>
                O visitar su canal de Yotube
                <span role='img' aria-label='wave emoji'>
                  😉
                </span>
              </a>
            </p>
          </Container>
        )
      }}
    />
  )
}

const bioQuery = graphql`
  query BioQuery {
    avatar: file(absolutePath: { regex: "/profile-pic.png/" }) {
      childImageSharp {
        fixed(width: 50, height: 50) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        author
        social {
          twitter
        }
      }
    }
  }
`

const Container = styled.div`
  display: flex;
`

export default Bio
