import React, { Component } from 'react';
import { Button } from '@alifd/next';
import { Link } from 'react-router-dom';
import styles from './index.module.scss';

export default class FeatureList extends Component {
  static displayName = 'FeatureList';

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className={styles.wrapper}>
        <div className={styles.contentWrapper}>
          <div className={styles.titleWrapper}>
            <h3 className={styles.title}>公共安全与应急大数据平台</h3>
            <div className={styles.titleLine}>
              <div className={styles.titleHighlightLine} />
            </div>
          </div>
          <p className={styles.desc}>
            极快科技公共安全与应急大数据平台（GeokSafePlat）面向公共安全与应急领域，基于时空大数据和一张图技术，整合监控资源、救援物资、重点防护目标等，在一张图上完成时空数据接入、分析、可视化、决策与指挥，支持平战结合，提升应急效率。
          </p>
          <div className={styles.featureListWrapper}>
            <div className={styles.featureItem}>
              <img
                src={require('./images/TB1b7O4if5TBuNjSspmXXaDRVXa-172-170.png')}
                alt=""
                style={{ width: 86, height: 85 }}
              />
              <h4 className={styles.featureTitle}>平战结合</h4>
              <p className={styles.featureDesc}>平时练兵 战时应急</p>
            </div>
            <div className={styles.featureItem}>
              <img
                src={require('./images/TB1PnOuik9WBuNjSspeXXaz5VXa-180-146.png')}
                alt=""
                style={{ width: 90, height: 73 }}
              />
              <h4 className={styles.featureTitle}>应急一张图</h4>
              <p className={styles.featureDesc}>静态资源 动态资源 一张图呈现</p>
            </div>
            <div className={styles.featureItem}>
              <img
                src={require('./images/TB1GUF9ibSYBuNjSspiXXXNzpXa-160-136.png')}
                alt=""
                style={{ width: 80, height: 68 }}
              />
              <h4 className={styles.featureTitle}>智能决策</h4>
              <p className={styles.featureDesc}>时空大数据 空间智能 辅助决策</p>
            </div>
          </div>
          <div className={styles.extraInfo}>
            <Link to="">
              <Button type="secondary" className={styles.extraButton}>正在建设 ...</Button>
            </Link>
          </div>
        </div>
        <div className={styles.clipBackground} />
      </div>
    );
  }
}
