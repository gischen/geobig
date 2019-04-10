import React, { Component } from 'react';
import './index.scss';

export default class SlideBanner extends Component {
  static displayName = 'SlideBanner';

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: 0,
    };
  }

  isSelected = (selected) => (selected ? ' selected' : '');

  onMouseEnter = (event) => {
    const { index } = event.currentTarget.dataset;
    const selectedIndex = parseInt(index, 10);
    if (!isNaN(selectedIndex)) {
      this.setState({
        selectedIndex,
      });
    }
  };

  render() {
    const { selectedIndex } = this.state;
    return (
      <div className="hy-friends-list">
        <a
          href="#"
          className={`hy-friends-item ${selectedIndex === 0 ? 'selected' : ''}`}
          data-index="0"
          onMouseEnter={this.onMouseEnter}
        >
          <img
            className="hy-friends-img"
            src={require('./images/CdqiMTPofpGZyLcJkDHX.jpg')}
            alt=""
          />
          <h4>应急案例</h4>
          {/*<span>适用场景：物业缴费</span>*/}
          <p>
            正在建设...
          </p>
          <img
            className="hy-friends-qr"
            src={require('./images/MhShJeukuJNkenGytSiq.svg')}
            alt=""
          />
        </a>

        <a
          href="#"
          className={`hy-friends-item ${selectedIndex === 1 ? 'selected' : ''}`}
          data-index="1"
          onMouseEnter={this.onMouseEnter}
        >
          <img
            className="hy-friends-img"
            src={require('./images/ZWoRmVSYImddLaRYyQog.jpg')}
            alt=""
          />
          <h4>自然资源案例</h4>
          {/*<span>适用场景：小区主页，物业缴费</span>*/}
          <p>
            正在建设...
          </p>
          <img
            className="hy-friends-qr"
            src={require('./images/cONkAwDeKdlzkcgchJLT.png')}
            alt=""
          />
        </a>

        <a
          href="#"
          className={`hy-friends-item ${selectedIndex === 2 ? 'selected' : ''}`}
          data-index="2"
          onMouseEnter={this.onMouseEnter}
        >
          <img
            className="hy-friends-img"
            src={require('./images/MHiDpDgUNShsjTCQXKKd.jpg')}
            alt=""
          />
          <h4>物联网案例</h4>
          <span></span>
          <p>
            正在建设...
          </p>
          <img
            className="hy-friends-qr"
            src={require('./images/cONkAwDeKdlzkcgchJLT.png')}
            alt=""
          />
        </a>

        <a
          href="#"
          className={`hy-friends-item ${selectedIndex === 3 ? 'selected' : ''}`}
          data-index="3"
          onMouseEnter={this.onMouseEnter}
        >
          <img
            className="hy-friends-img"
            src={require('./images/JQBQcVBtAiyTGINHQNzh.jpg')}
            alt=""
          />
          <h4>大数据案例</h4>
          {/*<span>适用场景：物业缴费、物业理财</span>*/}
          <p>
            正在建设...
          </p>
          <img
            className="hy-friends-qr"
            src={require('./images/cONkAwDeKdlzkcgchJLT.png')}
            alt=""
          />
        </a>
      </div>
    );
  }
}
