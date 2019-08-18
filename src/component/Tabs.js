import React from 'react';
import Pump from "./Pump";

import Software from "./Software";

export default  class Tabs extends React.Component{
    constructor(){
        super();
        this.state={
          isPump:true
        }
        this.showComponent= this.showComponent.bind(this);
    }
    showComponent(){
        switch (true) {
            case this.state.isPump:
                return <Pump/>;
                break;
        
            default:
                break;
        }
    }
    render(){
        return(
            <div className='tabSection'>
            <div className="tabSection__tabItem">
            <ul>
                <li><a class="active">Pumps</a></li>
                <li><a>Solar</a></li>
                <li><a>Software</a></li>
                <li><a>Transmision</a></li>
                <li><a>Transmision</a></li>
                <li><a>Sewage</a></li>
                
            </ul>
            </div>
            <div className="tabSection__tabComponent">
                {this.showComponent()}

            </div>
            </div>
        )
    }
}