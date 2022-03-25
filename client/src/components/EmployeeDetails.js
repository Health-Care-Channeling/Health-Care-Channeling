import React,{Component} from "react";
import axios from "axios";
import "../components/Styles/navbar.scss"

export default class EmployeeDetails extends Component{
    constructor(props){
        super(props);
    
        this.state={
          post:{}
        };
      }
     
    
      componentDidMount(){
        const id = this.props.match.params.id;

        axios.get(`/post/${id}`).then((res) => {
            if(res.data.success){
                this.setState({
                    post:res.data.post
                });
                console.log(this.state.post);
            }
        });
      }
      
     
    render(){
       const {fname,lname,Eid,role,statuss,address,dateofb,idcard,mobileno,emailadd,idtype,salary,salarym,salarys}=this.state.post;
       
       return(<><nav className="navbar">
         <a href="/home"><i className="fa fa-fw fa-home"></i>Dashboard</a>
         <a href="/settings"><i className="fa fa-fw fa-xing"></i>Settings</a>

         <a href="/adminlogin"><i className="fa fa-fw fa-user"></i>Log Out</a>


       </nav><dev>
         <hr />

           <dl className="row">
          
             <dt className="col-sm-3">First Name</dt>
              <dd className="col-sm-9">{fname}</dd>
             <hr />
             <dt className="col-sm-3">Last Name</dt>
             <dd className="col-sm-9">{lname}</dd>
             <hr />
             <dt className="col-sm-3">Employee ID</dt>
             <dd className="col-sm-9">{Eid}</dd>
             <hr />
             <dt className="col-sm-3">Role</dt>
             <dd className="col-sm-9">{role}</dd>
             <hr />
             <dt className="col-sm-3">Date Of BirthDay</dt>
             <dd className="col-sm-9">{dateofb}</dd>
             <hr />
             <dt className="col-sm-3">ID Number</dt>
             <dd className="col-sm-9">{idcard}</dd>
             <hr />
             <dt className="col-sm-3">Email Address</dt>
             <dd className="col-sm-9">{emailadd}</dd>
             <hr />
             <dt className="col-sm-3">Mobile Number</dt>
             <dd className="col-sm-9">{mobileno}</dd>
             <hr />
             <dt className="col-sm-3">Address</dt>
             <dd className="col-sm-9">{address}</dd>
             <hr />
             <dt className="col-sm-3">Status</dt>
             <dd className="col-sm-9">{statuss}</dd>
             <hr />
             <dt className="col-sm-3">ID Type</dt>
             <dd className="col-sm-9">{idtype}</dd>
             <hr />
             <dt className="col-sm-3">Salary</dt>
             <dd className="col-sm-9">{salary}</dd>
             <hr />
             <dt className="col-sm-3">Salary Month</dt>
             <dd className="col-sm-9">{salarym}</dd>
             <hr />
             <dt className="col-sm-3">Salary Status</dt>
             <dd className="col-sm-9">{salarys}</dd>
             <hr />
           </dl>



         </dev></>
       )
    
       }}