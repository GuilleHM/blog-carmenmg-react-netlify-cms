import React from 'react';
import './mainlayout.css';
import Sidebar from '../Sidebar/sidebar';

const MainLayout = (props) => {
  return (
    <React.Fragment>
      <div className="mainLayoutContainer">
        <Sidebar />
        {props.children}
      </div>
    </React.Fragment>
  )
}

export default MainLayout