import React from 'react';

const layoutStyles = {
  width: '100%', 
  height: '100vh',
  margin: '0 auto', 
  backgroundColor: "rgb(255,254,200)"
};

const Layout = ({ children }) => (
  <div style={layoutStyles}>
    {children}
  </div>
);

export default Layout;
