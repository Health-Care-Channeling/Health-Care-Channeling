import React,{Component} from "react";
import axios from 'axios';
import './Styles/Home.scss'
import "../components/Styles/navbar.scss"
import Swal from 'sweetalert2'

export default class Leavereq extends Component{
  constructor(props){
    super(props);
    this.state={
      errors:{},
      name:"",
      email:"",
      mobile:"",
      Employeeid:"",
      reason:"",
      pending:"Pending",
      date:""
    
      

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
  const {name,email,mobile,reason,Employeeid,pending,date}=this.state;
 

  const data ={
    name:name,
    email:email,
    mobile:mobile,
    reason:reason,
    Employeeid:Employeeid,
    pending:pending,
    date:date,  
  
 
  

   
  }
  console.log(data)
   
  axios.post("/Leave/save",data).then((res) =>{
    if(res.data.success){
      Swal.fire(
        'Request Sent!',
        'click Ok button to Continue!',
        'success'
      )
      this.setState({
     date:date,  
    name:name,
    email:email,
    mobile:mobile,
    reason:reason,
    Employeeid:Employeeid,
    pending:pending
    
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
  let {name,email,mobile,Employeeid,date,reason} = this.state;
  let errors = {};
  errors.name = this.validatename(name);
  errors.mobile = this.validatemobile(mobile);
  errors.email = this.validateemail(email);
  errors.Employeeid = this.validateemployeeid( Employeeid);
  errors.date = this.validatedate(date);
  errors.reason = this.validatereason(reason);

  

  return errors;
};
validatename = (name) => 
        !name 
        ? "Name is Required"
        :"";
        
        

        validatemobile = (mobile) => 
        !mobile
        ? "Mobile Number is Required"
        :"";
        validateemail = (email) =>
        !email
        ? "Email Address is Required"
        : "";
        validateemployeeid = (Employeeid) =>
        !Employeeid
        ? "Employee ID is Required"
        : "";
        validatedate= (date) =>
        !date
        ? "Date is Required"
        : "";
        validatereason = (reason ) =>
        !reason 
        ? "Reason is Required"
        : "";
        

   render(){
    let {errors} = this.state;
      return(
        <><nav className="navbar">
          
        <a href="/empolyeeprofile"><i className="fa fa-fw fa-xing"></i>Profile</a>
        <a href="/salaryhome"><i className="fa fa-github-alt"></i>Salary</a>
         
         
          <a href="/main"><i className="fa fa-fw fa-user"></i>Log Out</a>


      </nav><><div className="head1">Request Leave</div><div className="form">


          <div className="col-md-8 mt-4 mx-auto">

            <form className="needs-validation">
              <div className="form-group" style={{ marginBottom: '15px' }}>
                <label style={{ marginBottom: '15px' }}>Name</label>
                <input type="text"
                  className="form-control"
                  name="name"
                  placeholder=" Name"
                  value={this.state.name}
                  onChange={this.handleInputChange} />
                   {errors.name ? ( <span className="text-danger">{errors.name}</span>
                            ) : (
                            "")}
              </div>

              <div className="form-group" style={{ marginBottom: '15px' }}>
                <label style={{ marginBottom: '5px' }}>Email</label>
                <input type="text"
                  className="form-control"
                  name="email"
                  placeholder="Email"
                  value={this.state.email}
                  onChange={this.handleInputChange} />
                   {errors.email ? ( <span className="text-danger">{errors.email}</span>
                            ) : (
                            "")}
              </div>

              <div className="form-group" style={{ marginBottom: '15px' }}>
                <label style={{ marginBottom: '5px' }}>Mobile No</label>
                <input type="text"
                  className="form-control"
                  name="mobile"
                  placeholder="Mobile "
                  value={this.state.mobile}
                  onChange={this.handleInputChange} />
                   {errors.mobile ? ( <span className="text-danger">{errors.mobile}</span>
                            ) : (
                            "")}
              </div>

              <div className="form-group" style={{ marginBottom: '15px' }}>
                <label style={{ marginBottom: '5px' }}>reason</label>
                <input type="text"
                  className="form-control"
                  name="reason"
                  placeholder="Reason"
                  value={this.state.reason}
                  onChange={this.handleInputChange} />
                   {errors.reason ? ( <span className="text-danger">{errors.reason}</span>
                            ) : (
                            "")}
              </div>

              <div className="form-group" style={{ marginBottom: '15px' }}>
                <label style={{ marginBottom: '5px' }}>Employee ID</label>
                <input type="text"
                  className="form-control"
                  name="Employeeid"
                  placeholder="Employee ID"
                  value={this.state.Employeeid}
                  onChange={this.handleInputChange} />
                   {errors.Employeeid ? ( <span className="text-danger">{errors.Employeeid}</span>
                            ) : (
                            "")}
              </div>
              <div className="form-group" style={{ marginBottom: '15px' }}>
                <label style={{ marginBottom: '5px' }}>Date</label>
                <input type="date"
                  className="form-control"
                  name="date"
                  value={this.state.date}
                  onChange={this.handleInputChange} />
                   {errors.date ? ( <span className="text-danger">{errors.date}</span>
                            ) : (
                            "")}
              </div>
             
              

             

            





            </form>
          </div>

          <div className="createbuts3">
            <button className="btn-btn-success" type="submit" style={{ marginTop: '15px' }} onClick={this.onSubmit}>

              &nbsp; Request
            </button>
          </div>


        </div></></>
      )
    }
  }