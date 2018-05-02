import React, { Component } from 'react'
import PropTypes from 'prop-types';
import './Card.scss';

class Card extends Component {
  constructor(props) {
    super(props);
  }

  renderStats(stat) {
    return (
      <div styleName='stat' key={stat.title}>
        <div styleName='stat__title'>
          { stat.title } <span>...</span>
        </div>
        <div styleName='stat__value'>
          { stat.value }
        </div>
      </div>
    )
  }

  render () {
    const { name, subtitle, bio, stats, image } = this.props;
    const background = { backgroundImage: `url(${image})` };

    return (
      <div styleName='card'>
        <div styleName='image' style={ background }>
          <div styleName='subtitle'>
            { subtitle }
          </div>
        </div>
        <div styleName='name'>
          { name }!
        </div>
        <div styleName='bio'>
          <span>Top Trumps File</span>
          <p>{ bio }</p>
        </div>
        <div styleName='stats'>
          { stats.map(this.renderStats) }
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