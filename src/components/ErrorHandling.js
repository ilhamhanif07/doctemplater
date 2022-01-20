import React, { Component } from 'react';

class ErrorHandling extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ display: 'grid', placeItems: 'center' }}>
          <h1>Oops, Something went wrong.</h1>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorHandling;