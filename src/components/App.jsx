import React, { Component } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';
import { Statistics } from './Statistics/Statistics';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countFeedbacks = params => {
    this.setState(prevState => ({
      [params]: prevState[params] + 1,
    }));
  };

  render() {
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions countFeedbacks={this.countFeedbacks} />
        </Section>
        <Section title="Statistics">
          <Statistics state={this.state} message="There is no feedback" />
        </Section>
      </>
    );
  }
}
