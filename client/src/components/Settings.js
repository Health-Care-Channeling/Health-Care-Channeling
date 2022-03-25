import React,{Component} from "react";
import "../components/Styles/navbar.scss"

export default class Settings extends Component{
    render(){
        return(
            
                    <><nav className="navbar">
                <a href="/home"><i className="fa fa-fw fa-home"></i>Dashboard</a>
        <a href="/settings"><i className="fa fa-fw fa-xing"></i>Settings</a>

        <a href="/adminlogin"><i className="fa fa-fw fa-user"></i>Log Out</a>



            </nav><dev>
                Settings
                
                
                
                
                </dev></>
                )
            }
        }
        
