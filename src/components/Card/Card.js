import React, { Component } from 'react'
import PropTypes from 'prop-types';
import './Card.scss';

class Card extends Component {
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

    return (
      <div styleName='card'>
        <div styleName='image' style={background}>
          <div styleName='subtitle'>
            {subtitle}
          </div>
        </div>
        <div styleName='name'>
          {name}!
        </div>
        <div styleName='bio'>
          <span styleName='title'>Top Trumps File</span>
          <p styleName='text'>{bio}</p>
        </div>
        <div styleName='stats'>
          {stats.map(this.renderStats)}
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