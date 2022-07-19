import React from "react";
import { Breadcrumb, Layout, Menu } from 'antd';
import 'antd/dist/antd.min.css';
import logo from "../assets/logo.jpg";
import "../css/TopMenu.css";
import {push,replace} from "react-router-redux";
const { Header, Content, Footer } = Layout;
class TopMenu extends React.Component{
    constructor(props) {
        super(props);
        this.state={

        };
    }
    render(){
        const Items=[
            {
                label:
                    '数据瓶文档'
                ,
                key:'index',
            },
            {
                label:
                    '爬虫'
                ,
                key:'crawler',
            },
            {
                label:
                    '算法'
                ,
                key:'algorithm',
            },
            {
                label:
                    '搜索'
                ,
                key: 'search',
            },
            {
                label: '上传',
                key: 'upload',
            }

        ];

        function onClick(e) {
            if(e.key=='index'){
                push('/');
                replace('/');
                console.log('index');
            }
            if(e.key=='crawler'){
                push('/crawler');
                replace('/crawler');
                console.log('crawler');
            }
            if(e.key=='algorithm'){
                push('/algorithm');
                replace('/algorithm');
                console.log('algorithm');
            }
            if(e.key=='search'){
                push('/search');
                replace('/search');
                console.log('search');
            }

        }


        return(
                <Header className="header">

                    <div className="logo" style={{float:'left'}}>
                        <img src={logo} alt="logo" style={{width:'50px'}}/>
                    </div>
                    <Menu  onClick={onClick}  theme={"light"} mode={"horizontal"} items={Items}/>
                </Header>
        )
    }
}
export default TopMenu;