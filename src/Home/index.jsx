import React from 'react';
import DocumentTitle from 'react-document-title';
import Header from './Header';
import Banner from './Banner';
import Page1 from './Page1';
import Page3 from './Page3';
import Footer from './Footer';
import './static/style';

class Home extends React.PureComponent {
  render() {
    return (
      <div className="home-page">
        <Header key="header" />
        <Banner key="banner" />
        <Page1 key="page1" />
        {/* <Page2 key="page2" /> */}
        <Page3 key="page3" />
        {/* <Page4 key="page4" />  */}
        <Footer key="footer" />
        <DocumentTitle title="KwikDef - 人工智慧惡意程式監測" />
      </div>
    );
  }
}
export default Home;
