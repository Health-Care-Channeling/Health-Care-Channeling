import React,{Component} from "react";
import "../components/Styles/navbar.scss"
import axios from 'axios';

export default class LeaveHome extends Component{

    constructor(props){
        super(props);
    
        this.state={
          posts:[]
        };
      }
     
    
      componentDidMount(){
        this.retrievePosts();
      }
      
      retrievePosts(){
         axios.get("/Leave").then(res =>{
          if(res.data.success){
            this.setState({
              posts:res.data.existingPosts
            });
            console.log(this.state.posts);
          }
        });
    
      }

      filterData(posts,searchKey){
        const result=posts.filter((post)=>
        post.fname.toLowerCase().includes(searchKey)
      
        )
        this.setState({posts:result})
      }
     
      handleSearchArea =(e)=>{
        const searchKey=e.currentTarget.value;
        axios.get("/posts").then(res =>{
          if(res.data.success){
            this.filterData(res.data.existingPosts,searchKey)
            
            
          }
        });
          }
       
           
     
    render(){
        return(
            
                    <><nav className="navbar">
          
                    <a href="/empolyeeprofile"><i className="fa fa-fw fa-xing"></i>Profile</a>
                    <a href="/salaryhome"><i className="fa fa-github-alt"></i>Salary</a>
                     
                     
                      <a href="/main"><i className="fa fa-fw fa-user"></i>Log Out</a>
          
          
                  </nav><dev>
                 <a href="/leavereq"><button className="mass2">Request Leave</button></a>
               
                
                
                
                
                </dev><dev className="container"> <div className="col-lg-3 mt-2 mb-2">
              <input
                className="form-control"
                type="search"
                placeholder="Search"
                name="searchQuery"
                onChange={this.handleSearchArea}>
              </input>
            </div>
          <dev className="row">
            <dev className="col-lg-9 mt-2 mb-2">

            </dev>

            <div className="col-lg-3 mt-2 mb-2">
             
            </div>
          </dev>
        </dev><table className="table" style={{ marginTop: '40px' }}>
              <thead>
                <tr>
                  <th Scope="col">Num</th>
                  <th Scope="col">Employee Name</th>
                  <th Scope="col">Employee ID</th>
                  <th Scope="col">Email address</th>
                  <th Scope="col">Mobile Number</th>
                  
                  <th Scope="col">Status</th>
                </tr>
              </thead>
              <tbody>
                {this.state.posts.map((posts, index) => (
                  <tr>
                    <th scope="row">{index + 1}</th>
                    <td>
                    <a href={`/emview/${posts._id}`} style={{ color:'green' }}>
                        {posts.name}
                      </a>
                     
                   

                    </td>
                    <th scope="row" style={{ color:'black' }}>{posts.Employeeid}</th>
                    <th scope="row">{posts.email}</th>
                    <th scope="row">{posts.mobile}</th>
                 
                    <th scope="row" style={{ color:'red' }}>{posts.pending}</th>



                  </tr>
                ))}



              </tbody>
            </table></>
   

        )
        
    }
}
                
