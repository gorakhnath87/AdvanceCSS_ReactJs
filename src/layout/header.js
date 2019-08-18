import React from 'react';
import logo from '../image/logo.png';
import { NavLink } from 'react-router-dom'
import MobileHeader from "./mobileMenu";

class Header extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            prevScrollpos: window.pageYOffset,
            visible: true,
            scrollWidth: '100%'
        };
        this.handleScroll = this.handleScroll.bind(this);

    }
    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
    }
    handleScroll(e) {
        const { prevScrollpos } = this.state;

        const currentScrollPos = window.pageYOffset;
        const visible = prevScrollpos > currentScrollPos;


        const { scrollHeight, clientHeight, scrollTop } = document.documentElement;
        const winScroll = document.body.scrollTop || scrollTop;
        const winHeight = scrollHeight - clientHeight;
        const scrollWidth = `${(winScroll / winHeight) * 100}%`;
        this.setState({
            prevScrollpos: currentScrollPos,
            visible,
            scrollWidth
        });

    };
    render() {
        let pathName = this.props && this.props.location && this.props.location.pathname;
        let isServiceSelected = pathName && (pathName == "/software" || pathName == "/pump" || pathName == "/epc" || pathName == "/solar");
        return (
            <div>
                <div className={"header " + (!this.state.visible ? "header__hidden" : null)}>
                    <img src={logo} alt="logo" className="header__logo" />
                    <span className="header__mainMenu">
                        <ul>
                            <li>
                                <NavLink to="/" exact={true} > home</NavLink>
                            </li>
                            <li className="dropDownMenu">
                                <a className={isServiceSelected ? "dropDownMenu__service" : ""}>service</a>
                                <div className="dropDownMenu__content hideSubMenu">
                                    <NavLink className="dropDownMenu__content--link" to="/software" exact={true}> Software</NavLink>
                                    <NavLink className="dropDownMenu__content--link" to="/pump" exact={true}> Pump</NavLink>
                                    <NavLink className="dropDownMenu__content--link" to="/epc" exact={true}> EPC</NavLink>
                                    <NavLink className="dropDownMenu__content--link" to="/solar" exact={true}> Solar</NavLink>

                                </div>
                            </li>

                            <li>
                                <NavLink to="/about" exact={true}> about</NavLink>
                            </li>
                            <li>
                                <NavLink to="/contact" exact={true}> contact</NavLink>
                            </li>
                        </ul>
                    </span>

                    <div className={!this.state.visible ? "header__Scroll" : null} style={{ width: `${this.state.scrollWidth}` }} ></div>
                </div>
                <MobileHeader {...this.props} visible={this.state.visible} scrollWidth={this.state.scrollWidth}/>
            </div>


        )
    }
};
export default Header;