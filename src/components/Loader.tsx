import React from "react";

const Loader: React.FC = () => {
  return (
    <div className="site-loader" aria-hidden="true">
      <div className="spinner" />
    </div>
  );
};

export default Loader;
