import React, { Component } from 'react';
import { Button } from '@alifd/next';
import { Link } from 'react-router-dom';
import styles from './index.module.scss';

export default class ProductIntro extends Component {
  static displayName = 'ProductIntro';

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className={styles.wrapper}>
        <div className={styles.productContent}>
          <div className={styles.productInfo}>
            <h3 className={styles.title}>物联网大数据平台</h3>
            <div className={styles.titleLine}>
              <div className={styles.titleHighlightLine} />
            </div>
            <p className={styles.desc}>
              极快科技物联网大数据平台（GeokiotPlat）提供多类传感器设备实时监测数据的接入、存储、处理、分析、可视化与智能决策等应用；尤其对带有空间位置的传感器数据，基于自主研发的实时大数据分析引擎，提供实时的快速的智能分析和可视化，支持从监控大屏到手机端的多端响应式访问。
            </p>
            <Link to="">
              <Button type="secondary" className={styles.extraButton}>了解更多 &gt;</Button>
            </Link>
          </div>
          <div className={styles.productSnapshot}>
            <img
              width={696}
              height={527}
              src={require('./images/TB1SbvpgQyWBuNjy0FpXXassXXa-1392-1054.png')}
              alt=""
            />
          </div>
        </div>
        <div className={styles.clipBackground} />
      </div>
    );
  }
}
