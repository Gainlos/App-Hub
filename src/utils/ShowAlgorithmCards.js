import React from "react";
import 'antd/dist/antd.min.css';
// import {Link} from "react-router-dom";
import ShowCards from "../components/ShowCards";
import "../css/ShowCrawlerCards.css"
class ShowAlgorithmCards extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            cards:this.props.cards,
        }
    }
    render(){
        return(
            <React.Fragment>
                <div className="showTitle">
                    <h1>
                        算法
                    </h1>
                    <h2>
                        <a href="/algorithm">全部展示</a>
                    </h2>

                </div>
                <div className="Clear"/>


                <ShowCards cards={this.state.cards}/>
            </React.Fragment>

        );
    }
}
export default ShowAlgorithmCards;