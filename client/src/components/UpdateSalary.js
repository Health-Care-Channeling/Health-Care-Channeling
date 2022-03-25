import React,{Component} from "react";
import axios from 'axios';
import "../components/Styles/navbar.scss"
import Swal from 'sweetalert2'
export default class UpdateSalary extends Component{
  
  constructor(props){
    super(props);
    this.state={
     salary:"",
     salarym:"",
     salarys:""
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
  const {salary,salarym,salarys}=this.state;

  const data ={
    salary:salary,
     salarym:salarym,
     salarys:salarys
    
  }
  console.log(data)
   
  axios.put(`/post/update/${id}`,data).then((res) =>{
    if(res.data.success){
      Swal.fire(
        'Employee Payment Updated!',
        'click Ok button to Continue!',
        'success'
      )
      
      this.setState({
        salary:salary,
        salarym:salarym,
        salarys:salarys
        
      })
    }
  })
  
}

  componentDidMount(){
    const id = this.props.match.params.id;

    axios.get(`/post/${id}`).then((res) => {
        if(res.data.success){
            this.setState({
                salary:res.data.post.salary,
                salarym:res.data.post.salarym,
               salarys:res.data.post.salarys,
                
             
            });
            console.log(this.state.post);
        }
    });
  }
    
  onChangestatus=(e)=>{
    this.setState({salarys:e.target.value})
  }
  onchangestatus=(e)=>{
  
    this.setState({salarym:e.target.value})
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
                  <label style={{ marginBottom: '5px' }}>Salary</label>
                  <input type="text"
                    className="form-control"
                    name="salary"
                    placeholder="Price"
                    value={this.state.salary}
                    onChange={this.handleInputChange} />
                </div>

                <div className="form-group" style={{ marginBottom: '15px' }}>
                  <label style={{ marginBottom: '5px' }}>Salary Status</label>
                  <select value={this.state.salarys} onChange={this.onChangestatus}
                    className="form-control"
                    name="salarys">

                    <option>Pending</option>
                   
                    <option value="Paid" onChange={this.onChangestatus}>Pay</option>
                    <option value="UnPaid" onChange={this.onChangestatus}>UnPay</option>

                  </select>

                </div>

               
                <div className="form-group" style={{ marginBottom: '15px' }}>
                <label style={{ marginBottom: '5px' }}>Salary Month</label>
                <select value={this.state.salarym} onChange={this.onchangestatus}
                  className="form-control"
                  name="salarym">

                  <option>Choose</option>
                  <option value="January" onChange={this.onchangestatus}>January</option>
                  <option value="February" onChange={this.onchangestatus}>February</option>
                  <option value="March" onChange={this.onchangestatus}>March</option>
                  <option value="April" onChange={this.onchangestatus}>April</option>
                  <option value="May" onChange={this.onchangestatus}>May</option>
                  <option value="June" onChange={this.onchangestatus}>June</option>
                  <option value="July" onChange={this.onchangestatus}>July</option>
                  <option value="August" onChange={this.onchangestatus}>August</option>
                  <option value="September" onChange={this.onchangestatus}>September</option>
                  <option value="October" onChange={this.onchangestatus}>Octoberr</option>

                  <option value="November" onChange={this.onchangestatus}>November</option>

                  <option value="December" onChange={this.onchangestatus}>December</option>



                </select>

              </div>
              </form>
            </div>

            <div className="createbuts2">
              <button className="btn-btn-success" type="submit" style={{ marginTop: '15px' }} onClick={this.onSubmit}>

                &nbsp; Update Salary
              </button></div>
          </div></>
            
            )
        }
}