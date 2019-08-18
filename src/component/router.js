import React from 'react';
import { Route } from 'react-router-dom';
import home from './home';
import about from './about';
import contact from './contact';
import pump from "./pump";
import software from "./software";
import solar from "./solar";
import epc from "./epc";

const Layout = () => {
    return (
        <div>
            <Route exact path="/" component={home} />
            <Route exact path="/software" component={software} />
            <Route exact path="/pump" component={pump} />
            <Route exact path="/solar" component={solar} />
            <Route exact path="/epc" component={epc} />
            <Route exact path="/contact" component={contact} />
            <Route exact path="/about" component={about} />

        </div>
    )
}
export default Layout;