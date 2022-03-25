import React,{Component} from "react";
import axios from 'axios';
import "../components/Styles/navbar.scss"
import jsPDF from 'jspdf';
import 'jspdf-autotable'

export default class SalaryHome extends Component{
  genPDF =() => {
    const doc = new jsPDF()
    doc.setFontSize(20);
    doc.text("Payment Details", 80,10);
    
    
    doc.autoTable({
    html: '#content'
    })
    
    doc.setFontSize(12);
    doc.text(" - ", 10,272);
    doc.setFontSize(10);
    doc.text(" Payment Details Report", 82,272);
    doc.save('Payment Details.pdf')
    
    }
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
      
        return(  <> <nav className="navbar">

        <a href="/empolyeeprofile"><i className="fa fa-fw fa-xing"></i>Profile</a>
        <a href="/salaryhome"><i className="fa fa-github-alt"></i>Salary</a>


        <a href="/main"><i className="fa fa-fw fa-user"></i>Log Out</a>


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
        </dev><table className = "table" class="table table-striped table-bordered" id="content"style={{ marginTop: '40px' }}>
              <thead>
                <tr>
                  <th Scope="col">Num</th>
                  <th Scope="col">Employee Name</th>
                  <th Scope="col">Employee ID</th>
                  <th Scope="col">Payment</th>
                  <th Scope="col">Month</th>
                  <th Scope="col">Status</th>
                </tr>
              </thead>
              <tbody>
                {this.state.posts.map((posts, index) => (
                  <><tr>
                    <th scope="row">{index + 1}</th>
                    <td>
                      <a href={`/salary/${posts._id}`} style={{ color: 'black' }}>
                        {posts.fname}
                      </a>

                    </td>

                    <th scope="row">{posts.Eid}</th>
                    <th scope="row">Rs/={posts.salary}</th>
                    <th scope="row">{posts.salarym}</th>
                    <th scope="row" style={{ color: 'green' }}>{posts.salarys}</th>


                  </tr><div></div></>
                  
                ))}



              </tbody>
              <button type="button" className="btn btn-danger" style={{width:'250px',position:"absolute",right:"1100px",marginTop:'300px'}}><i href="#" onClick={() =>this.genPDF()} style={{textDecoration:'none', color:'white'}}> Download Payment Details </i></button>
&nbsp;&nbsp;&nbsp;&nbsp;

            </table></></>   
   

        )
        
    }
}