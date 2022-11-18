import React from 'react';
import SyntheticAlertConditionsNerdlet from './conditions';
import { NerdletStateContext } from 'nr1';
// https://docs.newrelic.com/docs/new-relic-programmable-platform-introduction

export default class UsageDetails extends React.Component {
  render() {
    return (
      <NerdletStateContext.Consumer>
        {(nerdletState) => (
          <SyntheticAlertConditionsNerdlet nerdletState={nerdletState} />
        )}
      </NerdletStateContext.Consumer>
    );
  }
}
