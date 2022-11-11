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
    return <div className="status">{this.state.onLine}</div>;
  }

  // render() {
  //   return (
  //     <>
  //       {this.state.onLine ? (
  //         <div className="status">Online</div>
  //       ) : (
  //         <div className="status status_offline">Offline</div>
  //       )}
  //     </>
  //   );
  // }
}

export default ConnectionStatus;
