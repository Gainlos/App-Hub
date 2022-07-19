import {Route, BrowserRouter as Router} from "react-router-dom";
import {Routes} from "react-router-dom";
import React from "react";
import ReactDOM from 'react-dom/client';
import {Switch} from "react-router-dom";
import HomeView from "../views/HomeView";
import AlgorithmView from "../views/AlgorithmView";
import UploadView from "../views/UploadView";
import CrawlerView from "../views/CrawlerView";
import * as PropTypes from "prop-types";

function Routs(props) {
    return null;
}



class MainRouter extends React.Component{
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <Router>
<Routes>
    <Route path="/" element={<HomeView/>} />
    <Route  path="/algorithm" element={<AlgorithmView/>} />
    <Route  path="/upload" element={<UploadView/>} />
    <Route  path="/crawler" element={<CrawlerView/>}/>
</Routes>






            </Router>
        );
    }
}


export default MainRouter;
