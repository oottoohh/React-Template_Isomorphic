import React, { Component } from 'react';
import LayoutContentWrapper from '../components/utility/layoutWrapper';
import LayoutContent from '../components/utility/layoutContent';
import Captcha from "demos-react-captcha";

export default class extends Component {
  onChange(value) {
    console.log(value);
  }
  render() {
    return (
      <LayoutContentWrapper style={{ height: '100vh' }}>
        <LayoutContent>
          <div className="App">
            <Captcha onChange={this.onChange} placeholder="Enter captcha" />
          </div>
        </LayoutContent>
      </LayoutContentWrapper>
    );
  }
}
