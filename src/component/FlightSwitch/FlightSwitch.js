import React, {useContext} from 'react'
import { DownOutlined } from '@ant-design/icons';
import { Button, Dropdown, Space } from 'antd';
import "./FlightSwitch.css";
import { FlightsContext } from "../../container/FlightsProvider/FlightsProvider";


const FlightSwitch = () => {
  const {flights: items, currentFlight, switchCurrentFlight} = useContext(FlightsContext);
  
  const handleMenuClick = ( {key}) => {
    switchCurrentFlight(key);
  };

  const menuProps = {
    items,
    onClick: handleMenuClick,
    selectable: true,
        defaultSelectedKeys: ['0'],
  };
  

  return (
    <div className="switch-flights">
        <span>
            Lot nr. {currentFlight.key+1}
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