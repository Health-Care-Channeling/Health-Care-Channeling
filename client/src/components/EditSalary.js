import React,{Component} from "react";
import axios from 'axios';
import "../components/Styles/navbar.scss"

export default class EditSalary extends Component{
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
         axios.get("/posts").then(res =>{
          if(res.data.success){
            this.setState({
              posts:res.data.existingPosts
            });
            console.log(this.state.posts);
          }
        });
    
      }
      filterData(posts,searchKey){
        const result =posts.filter((post)=>
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
        return(<><nav className="navbar">
          <a href="/home"><i className="fa fa-fw fa-home"></i>Dashboard</a>
          <a href="/settings"><i className="fa fa-fw fa-xing"></i>Settings</a>

          <a href="/adminlogin"><i className="fa fa-fw fa-user"></i>Log Out</a>


        </nav><><dev className="container">
          <dev className="row">
            <dev className="col-lg-9 mt-2 mb-2">

            </dev>

            <div className="col-lg-3 mt-2 mb-2">
              <input
                className="form-control"
                type="search"
                placeholder="Search"
                name="searchQuery"
                onChange={this.handleSearchArea}>
              </input>
            </div>
          </dev>
        </dev>
            <table className="table">
              <thead>
                <tr>
                  <th Scope="col">Num</th>
                  <th Scope="col">Name</th>
                  <th Scope="col">Employee ID</th>
                  <th Scope="col">Price</th>
                  <th Scope="col">Status</th>
                </tr>
              </thead>
              <tbody>
                {this.state.posts.map((posts, index) => (
                  <tr key={index}>
                    <th scope="row">{index + 1}</th>
                    <td>

                      <th scope="row">{posts.fname}</th>


                    </td>

                    <th scope="row">{posts.Eid}</th>
                    <th scope="row">Rs/={posts.salary}</th>
                    <th scope="row">{posts.salarys}</th>

                    <td>
                      <a className="btn btn-success" href={`upsalary/${posts._id}`}>
                        <i className="fas fa-edit" ></i>&nbsp;Update
                      </a>

                    </td>

                  </tr>
                ))}



              </tbody>
            </table></></>
          
        )}
}