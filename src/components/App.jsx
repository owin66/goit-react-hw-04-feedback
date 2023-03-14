import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Section from './Section/Section';
import FeedbackOptions from './Feedback/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';

export const App = () => {
  const [good, setGood] = useState(
    JSON.parse(localStorage.getItem('good')) || 0
  );
  const [bad, setBad] = useState(JSON.parse(localStorage.getItem('bad')) || 0);
  const [neutral, setNeutral] = useState(
    JSON.parse(localStorage.getItem('neutral')) || 0
  );

  const onLeaveFeedback = option => {
    switch (option) {
      case 'good':
        return setGood(good + 1);
      case 'neutral':
        return setNeutral(neutral + 1);
      case 'bad':
        return setBad(bad + 1);
      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    return total === 0 ? 0 : Math.round((good / total) * 100);
  };

  useEffect(() => {
    localStorage.setItem('good', JSON.stringify(good));
    localStorage.setItem('bad', JSON.stringify(bad));
    localStorage.setItem('neutral', JSON.stringify(neutral));
  }, [good, bad, neutral]);

  const totalFeedback = countTotalFeedback();
  const positiveFeedbackPercentage = countPositiveFeedbackPercentage();

  return (
    <div>
      <Section title={'Please leave feedback'}>
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={onLeaveFeedback}
        />
      </Section>

      {totalFeedback === 0 ? (
        <Notification message="There is no feedback" />
      ) : (
        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalFeedback}
            percentage={positiveFeedbackPercentage}
          />
        </Section>
      )}
    </div>
  );
};

App.propTypes = {
  children: PropTypes.node.isRequired,
};
