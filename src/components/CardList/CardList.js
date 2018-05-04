import React, { Component } from 'react';
import Card from '../Card/Card';

class CardList extends Component {
  constructor() {
    super();
    this.state = {
      people: [
        {
          name : 'Captain America',
          subtitle : 'Loyal to the dream..',
          image: '../../../assets/basket.jpg',
          bio : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam iaculis, leo eu eleifend ultricies, orci mauris laoreet elit, non viverra augue velit sit amet metus.',
          stats : [
            { title: 'Friendliness', value: 90},
            { title: 'Appetite', value: 20},
            { title: 'Work Ethic', value: 80},
            { title: 'Crankiness', value: 10 }
          ]
        },
        {
          name : 'The Hulk',
          subtitle : 'I am changing into..',
          image: '../../../assets/basket.jpg',
          bio : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam iaculis, leo eu eleifend ultricies, orci mauris laoreet elit, non viverra augue velit sit amet metus.',
          stats : [
            { title: 'Friendliness', value: 5},
            { title: 'Appetite', value: 90},
            { title: 'Work Ethic', value: 60},
            { title: 'Crankiness', value: 100 }
          ]
        },
        {
          name : 'Iron Man',
          subtitle : 'The invincible..',
          image: '../../../assets/basket.jpg',
          bio : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam iaculis, leo eu eleifend ultricies, orci mauris laoreet elit, non viverra augue velit sit amet metus.',
          stats : [
            { title: 'Friendliness', value: 30},
            { title: 'Appetite', value: 30},
            { title: 'Work Ethic', value: 100},
            { title: 'Crankiness', value: 60 }
          ]
        },
      ]
    }
  }

  renderPerson(person) {
    return (
      <Card 
        key={person.name}
        name={person.name}
        subtitle={person.subtitle}
        image={person.image}
        bio={person.bio}
        stats={person.stats}
      />
    )
  }

  render () {
    return (
      <div>
        { this.state.people.map(this.renderPerson) }
      </div>
    )
  }
}

export default CardList;