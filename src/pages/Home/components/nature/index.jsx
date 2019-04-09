import React, { Component } from 'react';
import { Button } from '@alifd/next';
import { Link } from 'react-router-dom';
import styles from './index.module.scss';

export default class IntroWithBackground extends Component {
  static displayName = 'IntroWithBackground';

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className={styles.wrapper}>
        <div className={styles.inntroContent}>
          <h3 className={styles.title}>自然资源大数据平台</h3>
          <div className={styles.titleLine}>
            <div className={styles.titleHighlightLine} />
          </div>
          <p className={styles.desc}>
            极快科技自然资源大数据平台（GeokNaturePlat）面向自然资源领域，基于时空大数据技术，建设山水林湖田草全类别自然资源大数据的管理、整合、处理、分析，支持国土空间全要素的可视化、分析、规划、决策应用。
          </p>
          <Link to="">
            <Button className={styles.extraButton}>了解更多 &gt;</Button>
          </Link>
        </div>
        <div className={styles.background}>
          <div className={styles.grayOverlay} />
          <div className={styles.backgroundImage} />
        </div>
        <div className={styles.topClipTriange} />
        <div className={styles.bottomClipTriange} />
      </div>
    );
  }
}
