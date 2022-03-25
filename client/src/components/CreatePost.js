import React,{Component} from "react";
import axios from 'axios';
import './Styles/Home.scss'
import "../components/Styles/navbar.scss"
import Swal from 'sweetalert2'

export default class CreatePost extends Component{
  
  constructor(props){
    super(props);
    this.state={
      fname:"",
      lname:"",
      emailadd:"",
      mobileno:"",
      address:"",
      idcard:"",
      dateofb:"",
      password:"",
      role:"",
      statuss:"",
      idtype:"",
      Eid:"",
      salary:"0.00",
      salarym:"January",
      salarys:"Pending"

    };
  }
 
handleInputChange =(e)=>{
  const {name,value} =e.target;

  this.setState({
    ...this.state,
    [name]:value
  })
}

onSubmit =(e) =>{
  e.preventDefault();
  const {fname,lname,emailadd,mobileno,address,idcard,dateofb,password,role,statuss,idtype,Eid,salary,salarym,salarys}=this.state;
  

  const data ={
    fname:fname,
    lname:lname,
    emailadd:emailadd,
    mobileno:mobileno,
    address:address,
    idcard:idcard,
    dateofb:dateofb,
    password:password,
    role:role,
    statuss:statuss,
    idtype:idtype,
    Eid:Eid,
    salary:salary,
    salarym:salarym,
    salarys:salarys
   
  }
  console.log(data)
   
  axios.post("/post/save",data).then((res) =>{
    if(res.data.success){
     Swal.fire(
        'New Employee Add Successfully!',
        'click Ok button to Continue!',
        'success'
      )
      this.setState({
        fname:fname,
    lname:lname,
    emailadd:emailadd,
    mobileno:mobileno,
    address:address,
    idcard:idcard,
    dateofb:dateofb,
    password:password,
    role:role,
    statuss:statuss,
    idtype:idtype,
    Eid:Eid,
    salary:salary,
    salarym:salarym,
    salarys:salarys
    
      })
    }
  })
  
}
onChangestatus=(e)=>{
  this.setState({statuss:e.target.value})
  
}
onchangestatus=(e)=>{
  
  this.setState({idtype:e.target.value})
}



   render(){
      return(
       <><nav className="navbar">
       <a href="/home"><i className="fa fa-fw fa-home"></i>Dashboard</a>
       <a href="/settings"><i className="fa fa-fw fa-xing"></i>Settings</a>

       <a href="/adminlogin"><i className="fa fa-fw fa-user"></i>Log Out</a>


     </nav><div className="head1">Create Employee</div><div className="form">


          <div className="col-md-8 mt-4 mx-auto">

            <form className="needs-validation" >
              <div className="form-group" style={{ marginBottom: '15px' }}>
                <label style={{ marginBottom: '15px' }}>First Name</label>
                <input type="text"
                  className="form-control"
                  name="fname"
                  placeholder="Enter First Name"
                  value={this.state.fname}
                  onChange={this.handleInputChange} />
              </div>

              <div className="form-group" style={{ marginBottom: '15px' }}>
                <label style={{ marginBottom: '5px' }}>Last Name</label>
                <input type="text"
                  className="form-control"
                  name="lname"
                  placeholder="Last Name"
                  value={this.state.lname}
                  onChange={this.handleInputChange} />
              </div>

              <div className="form-group" style={{ marginBottom: '15px' }}>
                <label style={{ marginBottom: '5px' }}>Email</label>
                <input 
                  type="email"
                  className="form-control"
                  name="emailadd"
                  placeholder="Email"
                  value={this.state.emailadd}
                  onChange={this.handleInputChange} />
              </div>

              <div className="form-group" style={{ marginBottom: '15px' }}>
                <label style={{ marginBottom: '5px' }}>Employee ID</label>
                <input type="text"
                  className="form-control"
                  name="Eid"
                  placeholder="Employee ID"
                  value={this.state.Eid}
                  onChange={this.handleInputChange} />
              </div>

              <div className="form-group" style={{ marginBottom: '15px' }}>
                <label style={{ marginBottom: '5px' }}>Mobile No</label>
                <input type="text"
                  className="form-control"
                  name="mobileno"
                  placeholder="Mobile No"
                  value={this.state.mobileno}
                  onChange={this.handleInputChange} />
              </div>

              <div className="form-group" style={{ marginBottom: '15px' }}>
                <label style={{ marginBottom: '5px' }}>Address</label>
                <input type="text"
                  className="form-control"
                  name="address"
                  placeholder="Address"
                  value={this.state.address}
                  onChange={this.handleInputChange} />
              </div>

              <div className="form-group" style={{ marginBottom: '15px' }}>
                <label style={{ marginBottom: '5px' }}>Id CardNumber</label>
                <input type="text"
                  className="form-control"
                  name="idcard"
                  placeholder="id number"
                  value={this.state.idcard}
                  onChange={this.handleInputChange} />
              </div>

              <div className="form-group" style={{ marginBottom: '15px' }}>
                <label style={{ marginBottom: '5px' }}>Date Of Birthday</label>
                <input type="date"
                  className="form-control"
                  name="dateofb"
                  placeholder="Birthday"
                  value={this.state.dateofb}
                  onChange={this.handleInputChange} />
              </div>

              <div className="form-group" style={{ marginBottom: '15px' }}>
                <label style={{ marginBottom: '5px' }}>Password</label>
                <input type="password"
                  className="form-control"
                  name="password"
                  placeholder="Password"
                  value={this.state.password}
                  onChange={this.handleInputChange} />
              </div>
              <div className="form-group" style={{ marginBottom: '15px' }}>
                <label style={{ marginBottom: '5px' }}>Role</label>
                <input type="text"
                  className="form-control"
                  name="role"
                  placeholder="Role"
                  value={this.state.role}
                  onChange={this.handleInputChange} />
              </div>

              <div className="form-group" style={{ marginBottom: '15px' }}>
                <label style={{ marginBottom: '5px' }}>Status</label>
                <select value={this.state.statuss} onChange={this.onChangestatus}
                  className="form-control"
                  name="Status">

                  <option>Choose</option>
                  <option value="Active" onChange={this.onChangestatus}>Active</option>
                  <option value="Deactive" onChange={this.onChangestatus}>Deactive</option>


                </select>

              </div>

              <div className="form-group" style={{ marginBottom: '15px' }}>
                <label style={{ marginBottom: '5px' }}>ID Type</label>
                <select value={this.state.idtype} onChange={this.onchangestatus}
                  className="form-control"
                  name="idtype">

                  <option>Choose</option>
                  <option value="national identity card" onChange={this.onchangestatus}>national identity card</option>
                  <option value="driving licence" onChange={this.onchangestatus}>driving licence</option>
                  <option value="Passport" onChange={this.onchangestatus}>Passport</option>


                </select>

              </div>




            </form>
          </div>

          <div className="createbuts2">
            <button className="btn-btn-success" type="submit" style={{ marginTop: '15px' }} onClick={this.onSubmit}>

              &nbsp; ADD Employee
            </button>
          </div>


        </div></>
      )
    }
  }