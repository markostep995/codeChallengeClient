import React from 'react';
import Loader from 'react-loader-spinner';

const LoadingIndicator = (props) => {
  return (
    <div
      style={{
        width: '100%',
        height: '100',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Loader
        type="Oval"
        color="#00BFFF"
        height="500"
        width="100"
        justify-content="center"
        align-items="center"
      />
    </div>
  );
};

export default LoadingIndicator;
