import React,{Component} from "react";
import axios from 'axios';
import "../components/Styles/navbar.scss"
import Swal from 'sweetalert2'
export default class updateemployee extends Component{
  
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
      role:"",
      statuss:"",
      Eid:"",
      idtype:""
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
  const id = this.props.match.params.id;
  const {fname,lname,emailadd,mobileno,address,idcard,dateofb,role,statuss,Eid,idtype}=this.state;

  const data ={
    fname:fname,
    lname:lname,
      emailadd:emailadd,
      mobileno:mobileno,
      address:address,
      idcard:idcard,
      dateofb:dateofb,
      role:role,
      statuss:statuss,
      Eid:Eid,
      idtype:idtype
    
  }
  console.log(data)
   
  axios.put(`/post/update/${id}`,data).then((res) =>{
    if(res.data.success){
      Swal.fire(
        'Employee Details Updated!',
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
      role:role,
      statuss:statuss,
      Eid:Eid,
      idtype:idtype
      })
    }
  })
  
}

  componentDidMount(){
    const id = this.props.match.params.id;

    axios.get(`/post/${id}`).then((res) => {
        if(res.data.success){
            this.setState({
                fname:res.data.post.fname,
                lname:res.data.post.lname,
                emailadd:res.data.post.emailadd,
                mobileno:res.data.post.mobileno,
                address:res.data.post.address,
                idcard:res.data.post.idcard,
                dateofb:res.data.post.dateofb,
                role:res.data.post.role,
                statuss:res.data.post.statuss,
                Eid:res.data.post.Eid,
                idtype:res.data.post.idtype

            });
            console.log(this.state.post);
        }
    });
  }
    
  onChangestatus=(e)=>{
    this.setState({statuss:e.target.value})
  }
  onchangestatus=(e)=>{
  
    this.setState({idtype:e.target.value})
  }
  
    render(){
     
        return(<><nav className="navbar">
          <a href="/home"><i className="fa fa-fw fa-home"></i>Dashboard</a>
          <a href="/settings"><i className="fa fa-fw fa-xing"></i>Settings</a>

          <a href="/adminlogin"><i className="fa fa-fw fa-user"></i>Log Out</a>


        </nav><div>

            <div className="col-md-8 mt-4 mx-auto">
              <h1 className="h3 mb-3 font-weight-normal">Edit EmployeeDetails</h1>
              <form className="needs-validation" noValidate>
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
                    placeholder="Enter Last Name"
                    value={this.state.lname}
                    onChange={this.handleInputChange} />
                </div>

                <div className="form-group" style={{ marginBottom: '15px' }}>
                  <label style={{ marginBottom: '5px' }}>Email Address</label>
                  <input type="text"
                    className="form-control"
                    name="emailadd"
                    placeholder="Enter Email Address"
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
                  />
              </div>

                <div className="form-group" style={{ marginBottom: '15px' }}>
                  <label style={{ marginBottom: '5px' }}>Mobile Number</label>
                  <input type="text"
                    className="form-control"
                    name="mobileno"
                    placeholder="Enter Mobile Number"
                    value={this.state.mobileno}
                    onChange={this.handleInputChange} />
                </div>

                <div className="form-group" style={{ marginBottom: '15px' }}>
                  <label style={{ marginBottom: '5px' }}>ID CARD Number</label>
                  <input type="text"
                    className="form-control"
                    name="idcard"
                    placeholder="Enter ID Number"
                    value={this.state.idcard}
                     />
                </div>

                <div className="form-group" style={{ marginBottom: '15px' }}>
                  <label style={{ marginBottom: '5px' }}>Date Of BirthDay</label>
                  <input type="text"
                    className="form-control"
                    name="dateofb"
                    placeholder="Enter Birthday"
                    value={this.state.dateofb}
                    onChange={this.handleInputChange} />
                </div>

                <div className="form-group" style={{ marginBottom: '15px' }}>
                  <label style={{ marginBottom: '5px' }}>Address</label>
                  <input type="text"
                    className="form-control"
                    name="address"
                    placeholder="Enter Address"
                    value={this.state.address}
                    onChange={this.handleInputChange} />
                </div>

                <div className="form-group" style={{ marginBottom: '15px' }}>
                  <label style={{ marginBottom: '5px' }}>Status</label>
                  <select value={this.state.statuss} 
                    className="form-control"
                    name="Status">

                    <option>Choose</option>
                    <option value="Deactive" >Deactive</option>
                    <option value="Active" >Active</option>

                  </select>

                </div>

                <div className="form-group" style={{ marginBottom: '15px' }}>
                  <label style={{ marginBottom: '5px' }}>Role</label>
                  <input type="text"
                    className="form-control"
                    name="role"
                    placeholder="Enter Role"
                    value={this.state.role}
                   />
                </div>
                <div className="form-group" style={{ marginBottom: '15px' }}>
                <label style={{ marginBottom: '5px' }}>ID Type</label>
                <select value={this.state.idtype} 
                  className="form-control"
                  name="idtype">

                  <option>Choose</option>
                  <option value="national identity card" >national identity card</option>
                  <option value="driving licence" >driving licence</option>
                  <option value="Passport" >Passport</option>


                </select>

              </div>
              </form>
            </div>

            <div className="createbuts2">
              <button className="btn-btn-success" type="submit" style={{ marginTop: '15px' }} onClick={this.onSubmit}>

                &nbsp; Update Employee
              </button></div>
          </div></>
            
            )
        }
}