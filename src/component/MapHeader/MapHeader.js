import React, { useContext, useState, useEffect, useCallback } from 'react'
import { DownOutlined } from '@ant-design/icons';
import { Button, Dropdown, Space } from 'antd';
import "./MapHeader.css";
import { FlightsContext } from "../../container/FlightsProvider/FlightsProvider";


const MapHeader = () => {
  const { flights, currentFlight, switchCurrentFlight } = useContext(FlightsContext);

  const items = flights.slice().reverse();
  
  // Ant design key name fix
  if (items.length > 0) {
    items.forEach((flightObj, index) => {
      flightObj['label'] = flightObj['date'].slice(0, 10);
      flightObj['key'] = items.length - 1 - index;
    })
  }

  const handleMenuClick = ({ key }) => {
    switchCurrentFlight(key);
  };

  const menuProps = {
    items,
    onClick: handleMenuClick,
    selectable: true,
    defaultSelectedKeys: [`${items.length - 1}`],
    //defaultSelectedKeys: [`0`],
  };

  return (
    <div className="switch-flights">
      <div>
        <span className="switch-flights-title">
          {!isNaN(currentFlight.key) ? currentFlight.title : null} 
        </span>
      </div>
      <Space wrap className="switch-flights-button-wrapper">
        <Dropdown
          menu={menuProps}
          trigger={['click']}
          getPopupContainer={() => document.querySelector('.switch-flights')}
          overlayClassName="switch-flights-dropdown"
        >
          <Button className="switch-button">
            <Space>
              {currentFlight.label}
              <DownOutlined />
            </Space>
          </Button>
        </Dropdown>
      </Space>
    </div>
  )
}

export default MapHeader