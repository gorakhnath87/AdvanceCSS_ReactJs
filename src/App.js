import React, { Component } from 'react';
import Header from './layout/header';
import Footer from './layout/footer';
import './style/style.css';
import Layout from './component/router';
import scrollTop from "./component/scrollTop";
import { withRouter } from "react-router-dom";

const App = (props) => {
  return (
    <div className="app">
      <Header {...props} />
      <scrollTop>
        <Layout />
        </scrollTop>
        <Footer />
    </div>
      );
    }
    
    export default withRouter(App);
