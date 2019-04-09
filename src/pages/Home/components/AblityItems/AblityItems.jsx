import React, { Component } from 'react';

export default class AblityItems extends Component {
  static displayName = 'AblityItems';

  static propTypes = {};

  static defaultProps = {};

  render() {
    return (
      <div className="hy-ability" style={style.hyAbilityStyles}>
        <div className="hy-ability-item" style={style.hyAbilityItemStyle}>
          <img
            alt=""
            src={require('./images/aWimbMGxabytxrRqcnEU.svg')}
            style={style.hyAbilityItemImgStyle}
          />
          <h3 style={style.hyAbilityItemTitleStyle}>海量</h3>
          <p style={style.hyAbilityItemSubtitleStyle}>
            矢量大数据 流式大数据 影像大数据
          </p>
        </div>

        <div className="hy-ability-item" style={style.hyAbilityItemStyle}>
          <img
            alt=""
            src={require('./images/neNAdNbBxUbWpbUQIsJA.svg')}
            style={style.hyAbilityItemImgStyle}
          />
          <h3 style={style.hyAbilityItemTitleStyle}>快速</h3>
          <p style={style.hyAbilityItemSubtitleStyle}>
            快速显示 极速搜索 秒级分析
          </p>
        </div>

        <div className="hy-ability-item" style={style.hyAbilityItemStyle}>
          <img
            alt=""
            src={require('./images/SsStefBxcUWayMyktAwz.svg')}
            style={style.hyAbilityItemImgStyle}
          />
          <h3 style={style.hyAbilityItemTitleStyle}>智能</h3>
          <p style={style.hyAbilityItemSubtitleStyle}>
            时空大数据 人工智能 空间智能
          </p>
        </div>
      </div>
    );
  }
}

const style = {
  hyAbilityStyles: {
    textAlign: 'center',
    background: '#fff',
    padding: '0 0 100px',
  },
  hyAbilityItemStyle: {
    display: 'inline-block',
    width: '360px',
    margin: '35px 0',
    verticalAlign: 'top',
  },
  hyAbilityItemImgStyle: {
    height: '62px',
  },
  hyAbilityItemTitleStyle: {
    fontSize: '20px',
    lineHeight: '26px',
    color: '#333',
    fontWeight: '400',
    margin: '18px 0 10px',
  },
  hyAbilityItemSubtitleStyle: {
    fontSize: '16px',
    color: '#999',
    lineHeight: '21px',
  },
};
