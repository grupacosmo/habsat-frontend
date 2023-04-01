import React, { useContext, useState, useEffect, useCallback } from 'react'
import { DownOutlined } from '@ant-design/icons';
import { Button, Dropdown, Space } from 'antd';
import "./FlightSwitch.css";
import { FlightsContext } from "../../container/FlightsProvider/FlightsProvider";


const FlightSwitch = () => {
  const { flights, currentFlight, switchCurrentFlight } = useContext(FlightsContext);
  const [textRef, setTextRef] = useState(null);
  const [isSquashed, setIsSquashed] = useState(false);
  const [width, setWidth] = useState(0);

  const items = flights.slice().reverse();

  const handleResize = () => {
    console.log("handle", textRef)
    if (textRef) {
      console.log(textRef.getBoundingClientRect().width, width)
      const logo = textRef.closest(".NavbarContainer").querySelector(".logo-title").getBoundingClientRect().right;
      const button = textRef.closest(".NavbarContainer").querySelector(".switch-flights-button-wrapper").getBoundingClientRect().left;
      const isSquashed = (button - logo) < width + 20;
      console.log(isSquashed, logo, button)
      setIsSquashed(isSquashed);
    }
  }

  useEffect(() => {
    handleResize();
  }, [textRef]);

  const measuredRef = useCallback(node => {
    console.log("callback", currentFlight)
    if (node !== null) {
      setTextRef(node);
      setWidth(node.getBoundingClientRect().width);
    }
  }, [textRef]);

  useEffect(() => {
    window.addEventListener("resize", handleResize, false);

    return () => window.removeEventListener("resize", handleResize, false);
  }, [textRef]);

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
        <span className="switch-flights-title" ref={measuredRef}>
          {!isNaN(currentFlight.key) && !isSquashed ? currentFlight.title : "a"}
          {/* {isSquashed ? "no" : "assasdasasdasdssssss"} */}
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

export default FlightSwitch