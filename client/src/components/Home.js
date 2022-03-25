import React, {Component} from 'react';
import "../components/Styles/navbar.scss"
import './Styles/Home.scss'




export default class Home extends Component{

  constructor(){
    super()
    this.state={time:new Date()}
  }
  currentTime(){
    this.setState({
      time:new Date()
    })
  }
  componentWillMount(){
    setInterval(()=>this.currentTime(),1000)
  }
    
  render(){
  
      
  
      return(<><><nav className="navbar">
        <a href="/home"><i className="fa fa-fw fa-home"></i>Dashboard</a>
        <a href="/settings"><i className="fa fa-fw fa-xing"></i>Settings</a>

        <a href="/adminlogin"><i className="fa fa-fw fa-user"></i>Log Out</a>


      </nav><div>
          <div><h1>Welcome To Admin Dashboard</h1></div>
          <div className="time">{this.state.time.toLocaleTimeString()}</div>
          <div className="buttoncontainer">
            <div className="btn1"><button className="btn btn-primary"><a href="/add" style={{ TextDecoration: 'none', color: 'white' }}>ADD Employee</a></button></div>
            <div className="btn2"><button className="btn btn-primary"><a href="/delete/:id" style={{ TextDecoration: 'none', color: 'white' }}>Delete Employee</a></button></div>
            <div className="btn3"><button className="btn btn-primary"><a href="/editemployee" style={{ TextDecoration: 'none', color: 'white' }}>Edit Employee</a></button></div>
            <div className="btn4"><button className="btn btn-primary"><a href="/list" style={{ TextDecoration: 'none', color: 'white' }}>View Employee List</a></button></div>
          
          </div>


        </div></><div ><a href="/editsalary"><button className="mass">Edit Employee Salary</button></a>
        <a href="/leavelist"><button className="mass">Leave Request</button></a></div>
        
 
        
        
        </>
        
        
        
        
      )}
}


