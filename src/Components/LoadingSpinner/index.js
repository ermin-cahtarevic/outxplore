import React from 'react';
import Loader from 'react-loader-spinner';

import './loading-spinner.css';

const LoadingSpinner = () => (
  <div className="loading-spinner-wrap">
    <Loader
      type="Oval"
      color="rgb(21, 127, 31)"
    />
  </div>
);

export default LoadingSpinner;
