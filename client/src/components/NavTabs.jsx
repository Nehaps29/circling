// NavTabs.js

import React, { useEffect, useState } from 'react';
import { Tabs, Tab, AppBar, Toolbar, Typography } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import classNames from 'classnames';
import './NavTabs.css'; // Import the CSS file

function NavTabs() {
  const location = useLocation();
  const [currentPage, setCurrentPage] = useState(location.pathname);

  useEffect(() => {
    setCurrentPage(location.pathname);
  }, [location]);

  const tabData = [
    { label: 'About', path: '/About' },
    { label: 'Videos', path: '/Videos' },
  ];

  return (
    <AppBar position="sticky">
      <Toolbar>
          <div style={{ marginLeft: 'auto' }}>
          <Tabs value={currentPage}>
            {tabData.map((tab) => (
              <Tab
                key={tab.path}
                label={tab.label}
                value={tab.path}
                component={Link}
                to={tab.path}
                className={classNames('custom-tab', { active: currentPage === tab.path })}
              />
            ))}
          </Tabs>
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default NavTabs;
