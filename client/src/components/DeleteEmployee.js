import React,{Component} from "react";
import axios from 'axios';
import "../components/Styles/navbar.scss"
import Swal from 'sweetalert2'

export default class DeleteEmployee extends Component{
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
      
onDelete =(id) =>{
  
  axios.delete(`/post/delete/${id}`).then((res)=>{
    let timerInterval
    Swal.fire({
      title: 'Employee Deleting!',
      html: 'Employee Data Deleting <b></b> milliseconds.',
      timer: 2000,
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading()
        const b = Swal.getHtmlContainer().querySelector('b')
        timerInterval = setInterval(() => {
          b.textContent = Swal.getTimerLeft()
        }, 100)
      },
      willClose: () => {
        clearInterval(timerInterval)
      }
    }).then((result) => {
      /* Read more about handling dismissals below */
      if (result.dismiss === Swal.DismissReason.timer) {
        console.log('I was closed by the timer')
      }
    })
    this.retrievePosts();
  })
}
filterData(posts,searchKey){
  const result =posts.filter((post)=>
  post.fname.toLowerCase().includes(searchKey)||
  post.Eid.includes(searchKey)
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
        </dev><table className="table">
              <thead>
                <tr>
                  <th Scope="col">Num</th>
                  <th Scope="col">Name</th>
                  <th Scope="col">Emplyee ID</th>
                  <th Scope="col">Role</th>
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
                    <th scope="row">{posts.role}</th>
                    <th scope="row">{posts.statuss}</th>

                    <td>

                      <a className="btn btn-danger" href="#/" onClick={() => this.onDelete(posts._id)}>
                        <i className="fas fa-trash-alt"></i>&nbsp;Delete
                      </a>
                    </td>

                  </tr>
                ))}



              </tbody>
            </table>    </></> 
      
        )
    }
}