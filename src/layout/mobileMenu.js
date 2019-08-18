import React from 'react';
import logo from '../image/logo.png';
import { NavLink } from 'react-router-dom'

export default class MobileMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showSideMenu: "none",
      sideMenuWidth: "0",
      blurColor: "",
      showMenuBlur:false,
      isServiceSelected: false
    }
    this.showSideMenu = this.showSideMenu.bind(this);
    this.hideSideMenu = this.hideSideMenu.bind(this);
    this.onScreenClick = this.onScreenClick.bind(this);
    this.onServiceSelect = this.onServiceSelect.bind(this);
  }


  showSideMenu() {
    this.setState({
      showSideMenu: "inline-block",
      sideMenuWidth: "35rem",
      blurColor: "rgba(11, 108, 199, 0.829)",
      showMenuBlur:true
    })
  }
  onServiceSelect() {
    let serviceSelect = this.state.isServiceSelected;
    this.setState({ isServiceSelected: !serviceSelect });
  }
  hideSideMenu() {
    this.setState({
      showSideMenu: "none",
      sideMenuWidth: "0",
      blurColor: "",
      showMenuBlur:false,
      isServiceSelected: false
    })
  }
  onScreenClick() {
    this.setState({
      blurColor: '',
      showMenuBlur:false,
      showSideMenu: 'none'
    }
    );
  }
  render() {
    let pathName = this.props && this.props.location && this.props.location.pathname;
    let isServiceSelected = pathName && (pathName == "/software" || pathName == "/pump" || pathName == "/epc" || pathName == "/solar");
    return (
      <div id="mainMobileHeader">
        <div id="mainMenu" className={`${this.state.showMenuBlur ===true? 'showMobileBlur': 'hideMobileBlur'}`} onClick={this.onScreenClick}></div>
        <div className="mobileMenu">
          <div className="mobileMenu__sidebar" style={{ display: `${this.state.showSideMenu}`, width: `${this.state.sideMenuWidth}` }}>
            <div className="mobileMenu__sidebar__closebtn" onClick={this.hideSideMenu}><span>X</span></div>
            <ul>
              <li>
                <NavLink to="/" exact={true} onClick={this.hideSideMenu}> home</NavLink>
              </li>

              <li className="mobileMenu__subMenu">
                <a onClick={this.onServiceSelect} className={isServiceSelected ? "mobileMenu__subMenu__service" : ""}>service</a>
                <div className="mobileMenu__subMenu__content" style={{ display: `${!this.state.isServiceSelected ? "none" : "inline-block"}` }}>
                  <li>
                    <NavLink onClick={this.hideSideMenu} className="mobileMenu__subMenu__content--link" to="/software" exact={true}> Software</NavLink>
                    <NavLink onClick={this.hideSideMenu} className="mobileMenu__subMenu__content--link" to="/pump" exact={true}> Pump</NavLink>
                    <NavLink onClick={this.hideSideMenu} className="mobileMenu__subMenu__content--link" to="/epc" exact={true}> EPC</NavLink>
                    <NavLink onClick={this.hideSideMenu} className="mobileMenu__subMenu__content--link" to="/solar" exact={true}> Solar</NavLink>
                  </li>
                </div>
              </li>


              <li>
                <NavLink onClick={this.hideSideMenu} to="/about" exact={true}> about</NavLink>
              </li>
              <li>
                <NavLink onClick={this.hideSideMenu} to="/contact" exact={true}> contact</NavLink>
              </li>
            </ul>
          </div>
          <div className={(!this.props.visible ? "mobileMenu__hidden" : null)}>
          <div className="mobileMenu__header">
            <img src={logo} alt="logo" className="mobileMenu__header--logo" />
            <span className="mobileMenu__header--openbtn" onClick={this.showSideMenu}> ☰</span>
          </div>
          </div>      
        </div>
      </div>


    )
  }
}
