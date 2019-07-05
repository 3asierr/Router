import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Food from './food/food'
import Beauty from './food/beauty'
import Health from './food/health'
import New from './food/newArr'
import Clear from './food/clearance'
import '../App.scss';



function Nia() {
    return (
        <Router>
            <div className='block'>
                <div>
                    <ul className="nav">
                        <li className="linav liactive">
                            <Link to="/food"> Food </Link>
                        </li>
                        <li className="linav">
                            <Link to="/beauty"> Beauty</Link>
                        </li>
                        <li className="linav">
                            <Link to="/healthAndBaby"> Health & Baby</Link>
                        </li>
                        <li className="linav">
                            <Link to="/newArrivals"> New Arrivals </Link>
                        </li>
                        <li className="linav">
                            <Link to="/Clearance"> Clearance</Link>
                        </li>
                    </ul>
                </div>
                <Route exact path="/food" component={Food} />
                <Route path="/beauty" component={Beauty} />
                <Route path='/healthAndBaby' component={Health} />
                <Route path='/newArrivals' component={New} />
                <Route path='/Clearance' component={Clear} />
            </div>
        </Router>
    );
}

export default Nia;
