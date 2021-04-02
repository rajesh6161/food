import React from 'react';

const Loader = () => {
  return (
    <div style={{ width: 100, height: 100, margin: 'auto', display: 'block' }}>
      <div className="spinner-border" role="status"></div>
    </div>
  );
};

export default Loader;
