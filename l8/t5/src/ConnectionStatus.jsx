import React, { Component } from 'react';

class ConnectionStatus extends Component {
  state = {
    onLine: 'online',
  };

  statusChange = () => {
    this.setState({
      onLine: navigator.onLine ? 'online' : 'offline',
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
    return (
      <div className={navigator.onLine ? 'status' : 'status status_offline'}>
        {this.state.onLine}
      </div>
    );
  }
}

export default ConnectionStatus;
