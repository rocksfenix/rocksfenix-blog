import React from 'react'
import { Link, graphql } from 'gatsby'
import { rhythm } from '../utils/typography'
import Layout from '../components/layout'
import Seo from '../components/seo'

const siteTitle = 'RocksFenix'
const keyword = ['blog', 'gerardo gallegos', 'javascript', 'react', 'tecs.ninja']

const HomePage = ({ location, data }) => {
  const posts = data.allMdx.edges

  React.useEffect(() => {
    const getData = async () => {
      const res = await fetch('https://jsonplaceholder.typicode.com/photos')
      const data = await res.json()
      const photosFiltered = data.slice(0, 3)

      console.log(filterData)
    }

    getData()
  }, [])

  return (
    <Layout location={location} title={siteTitle}>
      <Seo
        title='Home'
        keywords={keyword}
      />
      <p>Blog personal de <a href='https://mobile.twitter.com/rocksFenix'>Gerardo Gallegos</a></p>
      <p>
        Soy un desarrollador web fullstack que me apasiona trabajar con tecnologias basadas en Javascript tal como React, Vue, Angular, Babel, Webpack y amigos :) Me apasiona aprender y enseñar todos los dias.
      </p>
      <p>
        <span role='img' aria-label='Person'> 🧔 </span>
        Mi lema y filosofia de vida es <em>"Prefiero intentarlo y al final fracasar que fracasar por defecto por miedo a no intentarlo"</em>
      </p>

      <hr />
      <div style={{ margin: '20px 0 40px' }}>
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          return (
            <div key={node.fields.slug} style={{ margin: '50px 0' }}>
              <h3
                style={{
                  marginBottom: rhythm(1 / 4)
                }}
              >
                <Link
                  style={{ boxShadow: 'none' }}
                  to={`blog${node.fields.slug}`}
                >
                  {title}
                </Link>
              </h3>
              <small>{node.frontmatter.date}</small>
              <p
                style={{ margin: '1.3em 0 2em 0' }}
                dangerouslySetInnerHTML={{
                  __html: node.frontmatter.description || node.excerpt
                }}
              />
            </div>
          )
        })}
      </div>
    </Layout>
  )
}

export default HomePage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`
