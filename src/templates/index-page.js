import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import MainBanner from '../components/Banner/MainBanner'
import ImageToRight from '../components/CallToActions/ImageToRight'
import ImageToLeft from '../components/CallToActions/ImageToLeft'
import Image from '../img/flames.jpg'
import CTA1 from '../img/personalizado.svg'
import CTA2 from '../img/responsive.svg'

import Layout from '../components/Layout'
import Features from '../components/Features'
import BlogRoll from '../components/BlogRoll'

export const IndexPageTemplate = ({
  image,
  title,
  heading,
  subheading,
  mainpitch,
  description,
  intro,
}) => (
  <div>
    <MainBanner
      imageSrc={Image}
      title="Teve aquela idéia de aplicativo, sistema ou página, mas não sabe como tirar do papel?"
      subtitle="Entre em contato comigo e vamos torná-la real!"
      customSubtitle
      buttonText="Entrar em contato"
      buttonLink="www.google.com.br"
    />
    <ImageToRight
      title="Landing Pages"
      subtitle={`Em uma tradução livre, página de aterrissagem. É uma página que tem o objetivo de fazer o usuário "aterrissar" e efetuar uma ação. Geralmente são utilizadas para obter informações do usuário, como e-mail por exemplo, ou vender algum produto.`}
      image={CTA1}
    />

    <ImageToLeft
      title="Sites Institucionais"
      subtitle={`A vitrine do seu negócio ou empresa na internet. Um site institucional tem por ojetivo expôr e promover sua marca, produtos ou serviços e atrair mais clientes que geralmente não estão ao alcance físico.`}
      image={CTA1}
    />

    <ImageToRight
      title="Sistemas Web"
      subtitle={`Esse tipo de sistema geralmente são desenvolvidos para facilitar e automatizar processos manuais, tornando-os mais simples, rápidos e escaláveis. Praticamente qualquer processo pode ser automatizado.`}
      image={CTA1}
    />

    <ImageToLeft
      title="Aplicativos"
      subtitle={`Atualmente quase todas as pessoas possuem um dispositivo móvel. Transforme sua ideia em um aplicativo e alcance um número maior de pessoas.`}
      image={CTA1}
    />
    
  </div>
)

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        subheading
        mainpitch {
          title
          description
        }
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
          }
          heading
          description
        }
      }
    }
  }
`
