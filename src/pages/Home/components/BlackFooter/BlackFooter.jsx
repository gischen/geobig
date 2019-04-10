import React from 'react';
import { Grid } from '@alifd/next';

const { Row, Col } = Grid;

export default () => {
  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <Row wrap>
          <Col l="18">
            <p style={styles.title}>关于极快科技</p>
            <p style={styles.desc}>
              北京极快科技信息技术有限公司是一家专注于时空大数据和空间智能的中关村科技园入驻企业；极快科技基于云计算、物联网、大数据、人工智能等最新前沿技术，为行业客户提供专业的时空大数据平台和行业大数据解决方案。
            </p>
            <p style={styles.desc}>
              北京极快科技信息技术有限公司 ©2019 版权所有 京ICP备19010975号
            </p>
          </Col>
          <Col l="6">
            <div style={styles.rightContent}>
              <img
                src={require('./images/geok_weixin.jpg')}
                alt=""
                style={styles.qrcode}
              />
              <div style={styles.textBox}>
                <p style={styles.subtit}>关注极快科技GeoK公众号</p>
                <p style={styles.text}>
                  随时了解极快科技相关产品和行业应用信息
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

const styles = {
  container: {
    background: '#0e0e0e',
    padding: '20px 0 40px',
  },
  content: {
    maxWidth: '1200px',
    margin: ' 0 auto',
  },
  title: {
    fontSize: '18px',
    lineHeight: '26px',
    color: '#fff',
  },
  desc: {
    fontSize: '12px',
    lineHeight: '20px',
    color: '#fff',
    textAlign: 'justify',
    marginTop: '14px',
    maxWidth: '830px',
  },
  link: {
    color: '#00b7d3',
  },
  rightContent: {
    position: 'relative',
  },
  textBox: {
    paddingLeft: '100px',
  },
  qrcode: {
    width: '80px',
    height: '80px',
    position: 'absolute',
    top: '0px',
    left: '0px',
  },
  subtit: {
    fontWeight: '400',
    fontSize: '16px',
    color: '#fff',
    lineHeight: '22px',
  },
  text: {
    fontSize: '12px',
    color: '#666',
    lineHeight: '18px',
    marginTop: '6px',
  },
};
