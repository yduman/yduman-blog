import React from 'react'

// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'

import profilePic from './profile-round.png'
import { rhythm } from '../utils/typography'

class Bio extends React.Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          marginBottom: rhythm(2.5),
        }}
      >
        <img
          src={profilePic}
          alt={`Yadullah Duman`}
          style={{
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            width: rhythm(2),
            height: rhythm(2),
          }}
        />
        <p style={{ maxWidth: 330 }}>
          Written by <a href="https://twitter.com/proxyduman">Yadullah Duman</a>
          <br />I love programming &amp; knowledge sharing
        </p>
      </div>
    )
  }
}

export default Bio
