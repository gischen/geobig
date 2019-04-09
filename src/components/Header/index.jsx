import React, { Component } from 'react';
import Logo from '../Logo';
import './index.scss';

const MENUS = [
  {
    name: '物联网大数据平台',
    path: '#iotPlat',
  },
  {
    name: '公共安全与应急大数据平台',
    path: '#securityPlat',
  },
  {
    name: '自然资源大数据平台',
    path: '#resourcePlat',
  },
  {
    name: '行业案例',
    path: '#industyCase',
  },
];

export default class Header extends Component {
  render() {
    return (
      <div className="header-container">
        <div className="header-content">
          <Logo />
          <div className="header-navbar">
            {
              MENUS.map((item, idx) => {
                return (
                  <a key={idx} className="header-menu-item" href={item.path}>{item.name}</a>
                );
              })
            }
          </div>
        </div>
      </div>
    );
  }
}
