import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Card extends Component {
  render() {
    const { text } = this.props;
    return (
      <div className={`card is-not-dragging}`}>
        {text}
      </div>
    );
  }
}

Card.propTypes = {
  text: PropTypes.string.isRequired
}

export default Card;