import React, { Component } from 'react';

class ConnectionStatus extends Component {
  state = {
    onLine: 'Online',
  };

  statusChange = () => {
    this.setState({
      onLine: navigator.onLine ? 'Online' : 'Offline',
    });
  };

  componentDidMount() {
    window.addEventListener('online', this.statusChange);
    window.addEventListener('offline', this.statusChange);
  }

  componentWillUnmount() {
    window.removeEventListener('online', this.statusChange);
    window.removeEventListener('offline', this.statusChange);
  }

  render() {
    let onLineStatus = 'status';
    if (!navigator.onLine) {
      onLineStatus += ' status_offline';
    }
    return <div className={onLineStatus}>{this.state.onLine}</div>;
  }
}

export default ConnectionStatus;
