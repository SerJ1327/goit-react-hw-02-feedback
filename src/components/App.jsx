import React, { Component } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';
import { Statistics } from './Statistics/Statistics';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    positiveFeedback: 0,
  };

  countTotalFeedback = () => {
    this.setState(prevState => ({
      total: prevState.good + prevState.neutral + prevState.bad,
    }));
  };
  countGoodFeedbacks = () => {
    this.setState(prevState => ({ good: prevState.good + 1 }));
    this.countTotalFeedback();
    this.countPositiveFeedbackPercentage();
  };

  countNeutralFeedbacks = () => {
    this.setState(prevState => ({ neutral: prevState.neutral + 1 }));
    this.countTotalFeedback();
    this.countPositiveFeedbackPercentage();
  };

  countBadFeedbacks = () => {
    this.setState(prevState => ({ bad: prevState.bad + 1 }));
    this.countTotalFeedback();
    this.countPositiveFeedbackPercentage();
  };

  countPositiveFeedbackPercentage = () => {
    this.setState(prevState => ({
      positiveFeedback: Math.round((prevState.good / prevState.total) * 100),
    }));
  };

  render() {
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            countGoodFeedbacks={this.countGoodFeedbacks}
            countNeutralFeedbacks={this.countNeutralFeedbacks}
            countBadFeedbacks={this.countBadFeedbacks}
          />
        </Section>
        <Section title="Statistics">
          <Statistics state={this.state} message="There is no feedback" />
        </Section>
      </>
    );
  }
}
