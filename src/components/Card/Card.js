import React, { Component } from 'react'
import PropTypes from 'prop-types';
import './Card.scss';

class Card extends Component {
  constructor() {
    super();
    this.state = {
      expandCard : false,
    }
  };

  // Why don't you use arrow functions? There is a reason?
  expandCardHandler() {
    this.state.expandCard ? this.setState({ expandCard: false}) : this.setState({ expandCard: true })
  }

  renderStats(stat) {
    return (
      <div styleName='statistic' key={stat.title}>
        <div styleName='stat'>
          {stat.title} <span styleName='dots'>...</span>
        </div>
        <div styleName='value'>
          {stat.value}
        </div>
      </div>
    )
  }

  render () {
    const { name, subtitle, bio, stats, image } = this.props;
    const background = { backgroundImage: `url(${image})` };
    // TRANSITION for CARD, BIO AND STATS
    const cardStyle = this.state.expandCard ? 'card card-expanded' : 'card';
    const statsBioStyle = this.state.expandCard ? 'stats-bio stats-bio-appear' : 'stats-bio';
    //

    //BIO AND STATS TOGGLE
    let bioDiv = null
    let statDiv = null

    if (this.state.expandCard) {
      bioDiv = (
        <div styleName='bio'>
          <span styleName='title'>Top Trumps File</span>
          <p styleName='text'>{bio}</p>
        </div>
      )

      statDiv = (
        <div styleName='stats'>
          {stats.map(this.renderStats)}
        </div>
      )
    }

    return (
      <div styleName={cardStyle} onClick={this.expandCardHandler.bind(this)}>
        <div styleName='image' style={background}>
          <div styleName='subtitle'>
            {subtitle}
          </div>
        </div>
        <div styleName='name'>
          {name}!
        </div>
        <div styleName={statsBioStyle}>
          {bioDiv}
          {statDiv}
        </div>
      </div>
    )
  }
}

Card.propTypes = {
  name: PropTypes.string,
  subtite: PropTypes.string,
  image: PropTypes.string,
  bio: PropTypes.string,
  stats: PropTypes.array
}

export default Card;
