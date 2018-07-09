import React from 'react'
import Link from 'gatsby-link'
import Icon from './Icon'

const CommunityNavigation = () => (
  <nav>
    <ul>
      <li>
        <Link
          to="/community"
          className="first-icon"
          exact={true}
          activeClassName="active"
        >
          <figure>
            <Icon name="organizations" />
          </figure>
          Member Organizations
        </Link>
      </li>
      <li>
        <Link to="/community/sponsors" activeClassName="active">
          <figure>
            <Icon name="sponsors" />
          </figure>
          Corporate Supporters
        </Link>
      </li>
      <li>
        <Link to="/community/joint-training" activeClassName="active">
          <figure>
            <Icon name="joint-training" />
          </figure>
          Joint Training
        </Link>
      </li>
      <li>
        <a
          target="_blank"
          href="https://us16.campaign-archive.com/?e=[UNIQID]&u=f647da2f01497911d615aea80&id=dc4de93703"
        >
          <figure>
            <Icon name="hiring" />
          </figure>
          Hire Alumni
        </a>
      </li>
    </ul>
    {/* <div className="note">
      Our Summer 2018 cohort begins July 23<sup>rd</sup>!
    </div> */}
  </nav>
)

export default CommunityNavigation
