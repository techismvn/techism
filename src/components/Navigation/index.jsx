import React, { Fragment, useEffect, useState } from 'react';
import { Button, Menu } from 'antd';
import Logo from '../Logo';
import wda from '../../assets/images/white-down-arrow.png';
import data from './data';
import './navigation.modules.css';
import {
  BACKGROUND_COLOR,
  SELECTED_TEXT_COLOR,
  UNSELECTED_TEXT_COLOR,
} from '../../commons/constants';

const Navigation = () => {
  const [current, setCurrent] = useState({});

  useEffect(() => {
    setCurrent((prev) => ({ ...prev, isSelected: data[0].name }));
    return () => setCurrent({});
  }, []);

  const handleClick = (e) => {
    setCurrent((prev) => ({ ...prev, isSelected: e.key }));
  };

  return (
    <div
      style={{
        alignItems: 'center',
        display: 'flex',
        height: 77,
      }}
    >
      <Logo width={258} height={28} />
      <Menu
        mode="horizontal"
        onClick={handleClick}
        selectedKeys={[current.isSelected]}
        style={{
          backgroundColor: BACKGROUND_COLOR,
          borderBottom: 'none',
          fontSize: 16,
          fontWeight: 'bold',
          flex: 1,
          justifyContent: 'flex-end',
          paddingRight: 24,
        }}
      >
        {data.map((item) => (
          <Fragment key={item.id}>
            <Menu.Item
              className="nav"
              key={item.name}
              style={{
                color:
                  item.name === current?.isSelected
                    ? SELECTED_TEXT_COLOR
                    : UNSELECTED_TEXT_COLOR,
              }}
            >
              {item.text}{' '}
              {item.collapse && <img src={wda} alt="white down arrow" />}
            </Menu.Item>
          </Fragment>
        ))}
      </Menu>
      <Button style={{ fontWeight: 'bold' }}>NHẬN TƯ VẤN</Button>
    </div>
  );
};

export default Navigation;
