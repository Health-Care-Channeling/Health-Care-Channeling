import React,{Component} from "react";
import "../components/Styles/style.scss"
import "../components/Styles/navbar.scss"






export default class LostPassword extends Component{

   
    render(){
        return(<div>
            <nav className="navbar">
                         <a href="/"><i className="fa fa-fw fa-xing"></i>Employee Login</a>
                     
                        <a href="/adminlogin"><i className="fa fa-fw fa-user"></i>Admin Area</a>
                       
                        
                    </nav>
            
           <div className="base-container">
          
          
         <div className="box">
             <dev className="header">
            <div className="header3">Forgot Password</div>
            
          </dev>
             
            <div className="content">
               
                    <div className="form">
                        <div className="form-group">
                           
                            <input className="un" type="email" name="emailadd" placeholder="Email"></input> 

                        </div>
                       
                    </div>
                   
               
            </div>
            
            <div >
            <button className="loginbuts">Send
            
 
            </button>
           
          </div>
          
            </div>
           
        </div>
          
               
        </div>)
    }
}