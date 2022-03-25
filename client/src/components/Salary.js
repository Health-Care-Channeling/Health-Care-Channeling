import React,{Component} from "react";
import axios from "axios";
import "../components/Styles/navbar.scss"
import loginIm from "../images/paid.jpg";


export default class Salary extends Component{

 

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
       const {salary,salarym,salarys}=this.state.post;
       
       return(<><nav className="navbar">
         <a href="/home"><i className="fa fa-fw fa-home"></i>Dashboard</a>
         <a href="/settings"><i className="fa fa-fw fa-xing"></i>Settings</a>

         <a href="/adminlogin"><i className="fa fa-fw fa-user"></i>Log Out</a>


       </nav><dev>
         <hr />
         
<div className="paidbox" >
           <dl className="row">
          
             <dt className="col-sm-3" style={{color:'black'}}>Payment Price</dt>
              <dd className="col-sm-9">Rs/={salary}</dd>
          
             <dt className="col-sm-3"style={{color:'black'}}>Payment Month</dt>
             <dd className="col-sm-9">{salarym}</dd>
      
             <dt className="col-sm-3"style={{color:'black'}}>Payment Status</dt>
             <dd className="col-sm-9" >{salarys}</dd>
         
           
           </dl>
           
</div> <div className="image2">
                <img src={loginIm} alt="logo" />
              </div>

         </dev>
              </>
       )
    
       }}