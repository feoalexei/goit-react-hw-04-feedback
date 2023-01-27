import React, { useState } from 'react';

import Section from '../Section';
import FeedbackOptions from '../FeedbackOptions';
import Statistics from '../Statistics';
import Notification from '../Notification';
import css from './App.module.css';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const feedbackOptions = { good, neutral, bad };

  const countTotalFeedback = () => {
    return Object.values(feedbackOptions).reduce(
      (total, value) => total + value,
      0
    );
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.round((good / countTotalFeedback()) * 100);
  };

  const countFeedbackRate = option => {
    // eslint-disable-next-line default-case
    switch (option) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      case 'bad':
        setBad(prevState => prevState + 1);
        break;
    }
  };

  const total = countTotalFeedback();
  const positive = countPositiveFeedbackPercentage();

  return (
    <div className={css.app}>
      <div className={css.feedbackBox}>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={feedbackOptions}
            handleFeedback={countFeedbackRate}
          />
        </Section>
        <Section title="Statistics">
          {total > 0 ? (
            <Statistics
              options={feedbackOptions}
              total={total}
              positive={positive}
            />
          ) : (
            <Notification message="There is no feedback"></Notification>
          )}
        </Section>
      </div>
    </div>
  );
};
