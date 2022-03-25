import React,{Component} from "react";
import "../components/Styles/navbar.scss"
import axios from 'axios';
export default class EmployeeLeaveView extends Component{
    constructor(props){
        super(props);
        this.state={
          name:"",
          email:"",
          mobile:"",
          pending:"",
          Employeeid:"",
          reason:"",
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
      const id = this.props.match.params.id;
      const {name,email,mobile,pending,Employeeid,reason,date}=this.state;
    
      const data ={
        name:name,
       
          email:email,
          mobile:mobile,
         pending:pending,
         Employeeid:Employeeid,
         reason:reason,
         date:date
        
      }
      console.log(data)
       
      axios.put(`/Leave/update/${id}`,data).then((res) =>{
        if(res.data.success){
          alert("Successfully")
          
          this.setState({
            
            name:name,
      
          email:email,
          mobile:mobile,
          pending:pending,
          Employeeid:Employeeid,
          reason:reason,
          date:date
          })
        }
      })
      
    }
    
      componentDidMount(){
        const id = this.props.match.params.id;
    
        axios.get(`/Leave/${id}`).then((res) => {
            if(res.data.success){
                this.setState({
                    name:res.data.post.name,
                    email:res.data.post.email,
                    mobile:res.data.post.mobile,
                    pending:res.data.post.pending,
                    Employeeid:res.data.post.Employeeid,
                    reason:res.data.post.reason,
                    date:res.data.post.date
                   
                   
    
                });
                console.log(this.state.post);
            }
        });
      }
        
      
      onchangestatus=(e)=>{
      
        this.setState({pending:e.target.value})
        
      }
      
        render(){
         
            return(<><nav className="navbar">
              <a href="/home"><i className="fa fa-fw fa-home"></i>Dashboard</a>
              <a href="/settings"><i className="fa fa-fw fa-xing"></i>Settings</a>
    
              <a href="/adminlogin"><i className="fa fa-fw fa-user"></i>Log Out</a>
    
    
            </nav><div>
    
                <div className="col-md-8 mt-4 mx-auto">
                
                  <form className="needs-validation" noValidate>
                    <div className="form-group" style={{ marginBottom: '15px' }}>
                      <label style={{ marginBottom: '15px' }}> Name</label>
                      <input type="text"
                        className="form-control"
                        name="name"
                        placeholder="Enter First Name"
                        value={this.state.name}
                        />
                    </div>
    
                    <div className="form-group" style={{ marginBottom: '15px' }}>
                      <label style={{ marginBottom: '5px' }}>Email Address</label>
                      <input type="text"
                        className="form-control"
                        name="email"
                        placeholder="Enter Last Name"
                        value={this.state.email}
                        />
                    </div>
    
                    <div className="form-group" style={{ marginBottom: '15px' }}>
                      <label style={{ marginBottom: '5px' }}>Mobile Number</label>
                      <input type="text"
                        className="form-control"
                        name="mobile"
                        placeholder="Enter Email Address"
                        value={this.state.mobile}
                        
                        />
                    </div>
                    <div className="form-group" style={{ marginBottom: '15px' }}>
                    <label style={{ marginBottom: '5px' }}>Employee ID</label>
                    <input type="text"
                      className="form-control"
                      name="Employeeid"
                      placeholder="Employee ID"
                      value={this.state.Employeeid}
                      />
                  </div>
                  
                  <div className="form-group" style={{ marginBottom: '15px' }}>
                      <label style={{ marginBottom: '5px' }}>Reason</label>
                      <input type="text"
                        className="form-control"
                        name="reason"
                        placeholder="Enter Mobile Number"
                        value={this.state.reason}
                        />
                    </div>
    
                    <div className="form-group" style={{ marginBottom: '15px' }}>
                      <label style={{ marginBottom: '5px' }}>Date</label>
                      <input type="text"
                        className="form-control"
                        name="date"
                        placeholder="Enter Mobile Number"
                        value={this.state.date}
                        />
                    </div>
                    
    
                   
                  </form>
                </div>
    
                
              </div></>
                
                )
            }
    }