import React from 'react';

export class ErrorBoundary extends React.Component {
  state = { error: false };

  static getDerivedStateFromError() {
    return { error: true };
  }

  componentDidCatch(error, info) {
    // The error could also be sent to an error tracker like Sentry.
    console.error(error);
    console.error(info);
  }

  render() {
    if (this.state.error) {
      return <p>Oups something went wrong</p>;
    }

    return this.props.children;
  }
}
