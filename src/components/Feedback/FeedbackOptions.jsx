import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FeedbackOptionsContainer, Button } from './FeedbackOptions.styled';
class FeedbackOptions extends Component {
  render() {
    const { options, onLeaveFeedback } = this.props;

    return (
      <div>
        <FeedbackOptionsContainer>
          {options.map(option => (
            <Button key={option} onClick={() => onLeaveFeedback(option)}>
              {option}
            </Button>
          ))}
        </FeedbackOptionsContainer>
      </div>
    );
  }
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
export default FeedbackOptions;
