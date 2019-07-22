import React, { Component } from 'react';
import { ExtensionPoint } from 'vtex.render-runtime';
import { Helmet } from 'render';

import styles from './Washer.css';

import Header from './components/Header';
import SectionOne from './components/SectionOne';
import SectionTwo from './components/SectionTwo';

class Washer extends Component {

  render() {

    return (
      <div style={{paddingTop: "80px"}}>
        <Helmet>
          <link rel="stylesheet" href="../node_modules/@fontawesome/fontawesome-pro/css/all.css" />
        </Helmet>

        <Header/>
        <div style={{background: "#000"}}>
          <SectionOne/>
          <SectionTwo/>
        </div>

        <ExtensionPoint id="footer"/>
      </div>
    )
  }
}

Washer.schema = {
  type: 'object',
  title: 'teste header',
  properties: {
    property1: {
      type: 'string',
      title: 'Title of the property'
    }
  }
}

export default Washer