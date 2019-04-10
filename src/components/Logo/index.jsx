import React, { Component } from 'react';

const LIGHT =
  require('./images/geok_logo.png');
const DARK =
  require('./images/geok_logo.png');

export default class Logo extends Component {
  render() {
    const { isDark } = this.props;
    const logo = isDark ? DARK : LIGHT;
    return (
      <div
        className="logo"
        style={{
          height: 32,
          color: '#f40',
          textAlign: 'left',
        }}
      >
        <a href="/" style={{ display: 'block', position: 'relative' }}>
          <img src={logo} width="200" height="30" alt="logo" />
        </a>
      </div>
    );
  }
}
