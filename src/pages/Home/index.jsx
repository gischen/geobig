import React, { Component } from 'react';
import LandingIntroBanner from './components/LandingIntroBanner';
import IceworksInfo from './components/iot';
import DesignLanguage from './components/safe';
import Materials from './components/nature';
import BrandList from './components/BrandList';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import SlideBanner from './components/case';
import BlackFooter from './components/BlackFooter';
import AblityItems from './components/AblityItems';

export default class Home extends Component {
  static displayName = 'Home';

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="home-page" style={{ background: '#fff' }}>
        <Header />
        <LandingIntroBanner />
        <AblityItems />
        <div id="SafePlat">
          <DesignLanguage />
        </div>
        <div id="NaturePlat">
          <Materials />
        </div>
        <div id="IotPlat">
          <IceworksInfo />
        </div>
        <div id="IndustryCase">
          <SlideBanner />
        </div>
        <BlackFooter />
      </div>
    );
  }
}
