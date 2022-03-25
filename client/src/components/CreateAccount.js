import React,{Component} from "react";
import axios from 'axios';
import './Styles/Home.scss'
import "../components/Styles/navbar.scss"
import Swal from 'sweetalert2'

export default class CreateAccount extends Component{
  constructor(props){
    super(props);
    this.state={
      errors:{},
      fname:"",
      lname:"",
      emailadd:"",
      mobileno:"",
      address:"",
      idcard:"",
      dateofb:"",
      password:"",
      role:"",
      idtype:"",
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
  let errors =this.validateAll();
  if (this.isValid(errors)){

  const {fname,lname,emailadd,mobileno,address,idcard,dateofb,password,role,idtype,salary,salarym,salarys}=this.state;
 

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
    idtype:idtype,
    salary:salary,
    salarym:salarym,
    salarys:salarys
   
  }
  console.log(data)
   
  axios.post("/post/save",data).then((res) =>{
    if(res.data.success){
      Swal.fire(
        'Registration Succesful!',
        'click Ok button to Continue!',
        'success'
      )
      this.setState(
        {
        fname:fname,
    lname:lname,
    emailadd:emailadd,
    mobileno:mobileno,
    address:address,
    idcard:idcard,
    dateofb:dateofb,
    password:password,
    role:role,
    idtype:idtype,
    salary:salary,
    salarym:salarym,
    salarys:salarys
    
      }
      )
    }
  })
}
    else{
      let s1 ={...this.stste};
      s1.errors =errors;
      this.setState(s1);
    
    
    }}
  
  
  
 


isValid = (errors) => {
  //errors would have keys with non empty string as values
  let keys = Object.keys(errors); //keys in an array
  let count = keys.reduce((acc,curr) => errors[curr] ? acc+1 : acc,0);
  return count === 0;
};
validateAll = (e) => {
  let {fname,lname,emailadd,mobileno,address,idcard,dateofb,password} = this.state;
  let errors = {};
  errors.fname = this.validatefname(fname);
  errors.lname = this.validatelname(lname);
  errors.mobileno = this.validatemobileno(mobileno);
  errors.emailadd = this.validateemailadd(emailadd);
  errors.address = this.validateaddress(address);
  errors.idcard = this.validateidcard(idcard);

  errors.dateofb = this.validatedateofb(dateofb);
  errors.password = this.validatepassword(password);
  

  return errors;
};
validatefname = (fname) => 
        !fname 
        ? "First Name is Required" 
  

  
        :"";
        

    validatelname = (lname) => 
        !lname
        ? "Last Name is Required"
        :"";
    
    validatepassword = (password) =>
        !password
        ? "Password is Required"
        : "";
        validateaddress = (address) =>
        !address
        ? "Address is Required"
        : "";
        validatemobileno = (mobileno) =>
        !mobileno
        ? "Mobile Number is Required"
        : "";
        validatedateofb = (dateofb) =>
        !dateofb
        ? "BirthDay is Required"
        : "";
        validateemailadd= (emailadd) =>
        !emailadd
        ? "Email Address is Required"
        : "";
        validateidcard = (idcard) =>
        !idcard
        ? "ID Card is Required"
        : "";
        
        
onChangestatus=(e)=>{
  this.setState({idtype:e.target.value})
}

    
   render(){
    let {errors} = this.state;
      return(

        <><div className="head1">Create New Account</div><div className="form">


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
                   {errors.fname ? ( <span className="text-danger">{errors.fname}</span>
                            ) : (
                            "")}
              </div>

              <div className="form-group" style={{ marginBottom: '15px' }}>
                <label style={{ marginBottom: '5px' }}>Last Name</label>
                <input type="text"
                  className="form-control"
                  name="lname"
                  placeholder="Last Name"
                  value={this.state.lname}
                  onChange={this.handleInputChange} />
                  {errors.lname ? ( <span className="text-danger">{errors.lname}</span>
                            ) : (
                            "")}
              </div>

              <div className="form-group" style={{ marginBottom: '15px' }}>
                <label style={{ marginBottom: '5px' }}>Email</label>
                <input type="text"
                  className="form-control"
                  name="emailadd"
                  placeholder="Email"
                  value={this.state.emailadd}
                  onChange={this.handleInputChange} />
                  {errors.emailadd ? ( <span className="text-danger">{errors.emailadd}</span>
                            ) : (
                            "")}
              </div>

              <div className="form-group" style={{ marginBottom: '15px' }}>
                <label style={{ marginBottom: '5px' }}>Mobile No</label>
                <input type="text"
                  className="form-control"
                  name="mobileno"
                  placeholder="Mobile No"
                  value={this.state.mobileno}
                  onChange={this.handleInputChange} />
                  {errors.mobileno ? ( <span className="text-danger">{errors.mobileno}</span>
                            ) : (
                            "")}
              </div>

              <div className="form-group" style={{ marginBottom: '15px' }}>
                <label style={{ marginBottom: '5px' }}>Address</label>
                <input type="text"
                  className="form-control"
                  name="address"
                  placeholder="Address"
                  value={this.state.address}
                  onChange={this.handleInputChange} />
                  {errors.address ? ( <span className="text-danger">{errors.address}</span>
                            ) : (
                            "")}
              </div>

              <div className="form-group" style={{ marginBottom: '15px' }}>
                <label style={{ marginBottom: '5px' }}>Id CardNumber</label>
                <input type="text"
                  className="form-control"
                  name="idcard"
                  placeholder="id number"
                  value={this.state.idcard}
                  onChange={this.handleInputChange} />
                  {errors.idcard ? ( <span className="text-danger">{errors.idcard}</span>
                            ) : (
                            "")}
              </div>

              <div className="form-group" style={{ marginBottom: '15px' }}>
                <label style={{ marginBottom: '5px' }}>Date Of Birthday</label>
                <input type="date"
                  className="form-control"
                  name="dateofb"
                  placeholder="Birthday"
                  value={this.state.dateofb}
                  onChange={this.handleInputChange} />
                  {errors.dateofb ? ( <span className="text-danger">{errors.dateofb}</span>
                            ) : (
                            "")}
                 
              </div>

              <div className="form-group" style={{ marginBottom: '15px' }}>
                <label style={{ marginBottom: '5px' }}>Password</label>
                <input type="password"
                  className="form-control"
                  name="password"
                  placeholder="Password"
                  value={this.state.password}
                  onChange={this.handleInputChange} />
                  {errors.password ? ( <span className="text-danger">{errors.password}</span>
                            ) : (
                            "")}
              </div>


              <div className="form-group" style={{ marginBottom: '15px' }}>
                <label style={{ marginBottom: '5px' }}>ID Type</label>
                <select value={this.state.idtype} onChange={this.onChangestatus}
                  className="form-control"
                  name="idtype">
                    

                  <option>Choose</option>
                  <option value="national identity card" onChange={this.onChangestatus}>national identity card</option>
                  <option value="driving licence" onChange={this.onChangestatus}>driving licence</option>
                  <option value="Passport" onChange={this.onChangestatus}>Passport</option>


                </select>

              </div>






            </form>
          </div>

          <div className="createbuts2">
            <button className="btn-btn-success" type="submit" style={{ marginTop: '15px' }} onClick={this.onSubmit}>

              &nbsp; Create Account
            </button>
          </div>


        </div></>
      )
    }
  }