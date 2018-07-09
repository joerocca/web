import React from 'react'
import AcademyNavigation from '../../components/AcademyNavigation'
import { OutboundLink } from 'gatsby-plugin-google-analytics'
import Img from 'gatsby-image'

const Card = ({ id, name, title, children, sizes }) => (
  <div className="card" id={`${id}`}>
    <Img
      sizes={sizes}
      alt={`A portrait of ${name}`}
      title={`A portrait of ${name}`}
    />
    <div className="tab">
      <input id={`tab-${id}`} type="checkbox" name="tabs" />
      <label htmlFor={`tab-${id}`}>
        <h4>{name}</h4>
        <h6>{title}</h6>
        <p className="read-more">
          <a>Read More</a>
        </p>
      </label>
      <p className="tab-content">{children}</p>
    </div>
  </div>
)

const SuccessStoriesPage = props => (
  <div className="AcademyPage Success">
    <AcademyNavigation />
    <div className="wrap">
      <h2>Success Stories</h2>
      <div className="bios">
        <Card
          id="kristen"
          name="Kristen Swan-Grashel"
          sizes={props.data.kristen.sizes}
        >
          "When I first thought about going to a code school to change I knew it
          I knew it would be hard, especially with three young children to care
          for. I also knew it would be worth it in the end. The Iron Yard
          experience turned out to be just as hard as I ever imagined, but also
          just as worth it. I accomplished what I set out to do. And really,
          there are few things better in life than that. Achieving a goal you've
          worked hard for."
        </Card>

        <Card
          id="brandyn"
          name="Brandyn Sullins"
          sizes={props.data.brandyn.sizes}
        >
          "This was one of the most intimidating, exhausting, and stressful
          challenges I have ever taken on and I would not change my decision to
          attend for anything. This gave me a home away from home, it became a
          sanctuary where people of similar mind would share ideas and learn
          from each other."
        </Card>

        <Card
          id="valeria"
          name="Valeria Benetti"
          sizes={props.data.valeria.sizes}
        >
          "Of all the choices I have ever made, coming to this has to be one of
          the greatest choices that my brain came up with. Not one day goes by
          since graduating have I been extremely grateful to the school for
          teaching me the valuable skill sets that I now know."
        </Card>

        <Card id="shaun" name="Shaun Hailey" sizes={props.data.shaun.sizes}>
          "I came to into this with zero programming background whatsoever.
          After over a decade in finance, a layoff put me into a position where
          I could explore a new career. This finally allowed me to do what I had
          wanted to do for many years--learn how to code."
        </Card>
      </div>

      <p className="cta">
        <OutboundLink
          href="http://gallery-gift-card.caleb.surge.sh/"
          target="_blank"
        >
          Read More of our Success Stories
        </OutboundLink>
      </p>
    </div>
  </div>
)

export const pageQuery = graphql`
  query SuccessPageQuery {
    kristen: imageSharp(id: { regex: "/people/kristen/" }) {
      sizes(maxWidth: 416) {
        ...GatsbyImageSharpSizes
      }
    }
    brandyn: imageSharp(id: { regex: "/people/brandyn/" }) {
      sizes(maxWidth: 416) {
        ...GatsbyImageSharpSizes
      }
    }
    valeria: imageSharp(id: { regex: "/people/valeria/" }) {
      sizes(maxWidth: 416) {
        ...GatsbyImageSharpSizes
      }
    }
    shaun: imageSharp(id: { regex: "/people/shaun/" }) {
      sizes(maxWidth: 416) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`

export default SuccessStoriesPage
