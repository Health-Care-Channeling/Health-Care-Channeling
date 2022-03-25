import React,{Component} from "react";
import axios from 'axios';
import "../components/Styles/style.scss"
import "../components/Styles/navbar.scss"


export default class EmployeeLogin extends Component{
    constructor(props) {
        super(props);
        this.state = {
           emailadd: "",
           password: "",
        };
        // this.state = { user };
    }
    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };
    handleSumbit = (e) => {
        e.preventDefault();
        const data = {
            emailadd: this.state.emailadd,
            password: this.state.password,
        }
        console.log("Data sent ", data);

        axios
            .post("/post/adminlogin", data)
            .then((res) => {
                if((res.data.emailadd = this.state.emailadd) && (res.data.password = this.state.password)) {
                    window.location = "/empolyeeprofile";
                }
                else {
                    window.location = "/empolyeeprofile";
                    // localStorage.setItem("name", res.data.name);
        //   window.location = "/bookingList";
                }

                // localStorage.setItem("name", res.data.name);
                // window.location = "/home"
            });

            // this.props.history.push('/home')

        // this.setState({
        //     email: "",
        //     password: ""
        // })
    }

    render(){
        return (<><nav className="navbar">
            <a href="/main"><i className="fa fa-fw fa-xing"></i>Employee Login</a>

            <a href="/adminlogin"><i className="fa fa-fw fa-user"></i>Admin Area</a>


        </nav><div className="base-container">


                    <div className="box"><form onSubmit={this.handleSumbit}>
                        <dev className="header">
                            <div className="header1">Employee Account Login</div>

                            <div className="header2">welcome to your Employee Portal Login</div></dev>

                        <div className="content">

                            <div className="form">
                                <div className="form-group">

                                    <input className="un" type="email" name="emailadd" placeholder="Email" required value={this.state.emailadd} onChange={this.handleChange}></input>

                                </div>
                                <div className="form-group">

                                    <input className="pass" type="password" name="password" placeholder="Password" required value={this.state.password} onChange={this.handleChange}></input>

                                </div>
                            </div>


                        </div>


                        <div className="loginbuts" ><button className="loginbuts" type="submit">Log in </button></div></form>


                       

                        <div className="buth">
          <a className="ref1" href="/lost">Lost your password?</a>
             
          </div>
          <div className="buth2">
         
          <a className="ref2" href="/create">Create New Account</a>     
          </div>

                    </div>
                </div></>
        )}
}