import React,{Component} from "react";
import Calendar from "react-calendar";
import "../components/Styles/navbar.scss"

import loginImg from "../images/og.jpg";


export default class EmployeeProfile extends Component{
  constructor(props){
    super(props);
    this.state={
     date:""
    };
  }
 

  
    render(){
     
        return(  <>
          
          
          <nav className="navbar">

          <a href="/empolyeeprofile"><i className="fa fa-fw fa-xing"></i>Profile</a>
          <a href="/salaryhome"><i className="fa fa-github-alt"></i>Salary</a>


          <a href="/main"><i className="fa fa-fw fa-user"></i>Log Out</a>
 </nav>

        <div className="header5">
              <div className="image">
                <img src={loginImg} alt="logo" />
              </div>
             <hr/>
        <div className="sms1"> <a href="/leavehome"><button className="mass1">Leave</button></a> 
</div>
        
         <a href="/editprofile"><button className="mass5">Edit Profile Details</button></a>
       
                 <div className="col-md-16 mt-4 mx-auto"> </div>
  <div className="boxx"><Calendar onChange={this.onChange} value={this.state.date} />
              </div>


            </div></>


            )
     }
   }