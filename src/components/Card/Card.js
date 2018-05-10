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

  // Why you renderStats is not an arrow function? There is a reason?
  // Using the arrow one I wouldn't have the need to bind the function in the render.
  expandCardHandler() {
    if (this.state.expandCard === false) this.setState({expandCard: true});
    if (this.state.expandCard === true)  this.setState({expandCard: false});
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
      <div styleName='card' onClick={this.expandCardHandler.bind(this)}>
        <div styleName='image' style={background}>
          <div styleName='subtitle'>
            {subtitle}
          </div>
        </div>
        <div styleName='name'>
          {name}!
        </div>
        {bioDiv}
        {statDiv}
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
