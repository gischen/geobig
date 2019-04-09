import React, { Component } from 'react';
import Logo from '../Logo';
import './index.scss';

const MENUS = [
  {
    name: '公共安全与应急大数据平台',
    path: '#SafePlat',
  },
  {
    name: '自然资源大数据平台',
    path: '#NaturePlat',
  },
  {
    name: '物联网大数据平台',
    path: '#IotPlat',
  },
  {
    name: '行业应用案例',
    path: '#IndustryCase',
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
