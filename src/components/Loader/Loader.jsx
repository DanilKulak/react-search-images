import React, { Component } from 'react';
import { TailSpin } from 'react-loader-spinner';

class Loader extends Component {
  render() {
    return (
      <div className="loader">
        <TailSpin type="ThreeDots" color="#00BFFF" height={80} width={80} />
      </div>
    );
  }
}

export default Loader;
