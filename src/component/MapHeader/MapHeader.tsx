import { useContext, FC } from 'react'
import { DownOutlined } from '@ant-design/icons';
import { Button, Dropdown, MenuProps, Space } from 'antd';
import "./MapHeader.css";
import { FlightsContext } from "../../container/FlightsProvider/FlightsProvider";

const MapHeader: FC = () => {
  const { flights, currentFlight, switchCurrentFlight } = useContext(FlightsContext);

  const items: MenuProps['items']
    = flights?.slice().reverse().map((flightObj, index) => {
        return {
          key: flights.length - 1 - index,
          label: flightObj['date'].slice(0, 10)
        }
    });

  const handleMenuClick: MenuProps['onClick'] = ({ key }) => {
    switchCurrentFlight(parseInt(key));
  };

  const menuProps: MenuProps = {
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
          {!currentFlight.title ? currentFlight.title : null}
        </span>
      </div>
      <Space wrap className="switch-flights-button-wrapper">
        <Dropdown
          menu={menuProps}
          trigger={['click']}
          getPopupContainer={() => document.querySelector('.switch-flights')!}
          overlayClassName="switch-flights-dropdown"
        >
          <Button className="switch-button">
            <Space>
              {currentFlight['date'].slice(0, 10)}
              <DownOutlined />
            </Space>
          </Button>
        </Dropdown>
      </Space>
    </div>
  )
}

export default MapHeader