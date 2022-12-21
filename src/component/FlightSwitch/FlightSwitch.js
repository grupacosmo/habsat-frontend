import React, {useContext} from 'react'
import { DownOutlined } from '@ant-design/icons';
import { Button, Dropdown, Space } from 'antd';
import "./FlightSwitch.css";
import { FlightsContext } from "../../container/FlightsProvider/FlightsProvider";


const FlightSwitch = () => {
  const {flights, currentFlight, switchCurrentFlight} = useContext(FlightsContext);
  
  const items = flights.slice().reverse();
  //console.log("flightsswitch",items)
  // Ant design key name fix
  if (items.length > 0) {
  items.forEach((flightObj, index) => {
    flightObj['label'] = flightObj['date'].slice(0,10);
    flightObj['key'] = items.length-1-index;
  })
}
  const handleMenuClick = ( {key}) => {
    switchCurrentFlight(key);
  };

  const menuProps = {
    items,
    onClick: handleMenuClick,
    selectable: true,
        defaultSelectedKeys: [`${items.length-1}`],
        //defaultSelectedKeys: [`0`],
  };
  

  return (
    <div className="switch-flights">
        <span>
            Lot nr. { !isNaN(currentFlight.key) ? currentFlight.key+1 : null }
        </span>
        <Space wrap className="switch-flights-button-wrapper">
            <Dropdown 
              menu={menuProps}
              trigger={['click']}
              getPopupContainer={() => document.querySelector('.switch-flights')}
              overlayClassName="switch-flights-dropdown"
            >
                <Button>
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

export default FlightSwitch