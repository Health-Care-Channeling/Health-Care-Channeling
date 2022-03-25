import React,{Component} from "react";

import { BrowserRouter as Router,Route} from 'react-router-dom';
import CreatePost from "./components/CreatePost";
import EditPost from "./components/EditPost";
import Home from "./components/Home";
import DeleteEmployee from "./components/DeleteEmployee";
import EmployeeDetails from "./components/EmployeeDetails";
import EmployeeList from "./components/EmployeeList";
import EditEmployeeDetails from "./components/EditEmployeeDetails";
import EmployeeLogin from "./components/EmployeeLogin";
import AdminLogin from "./components/adminlogin/AdminLogin";
import EmployeeProfile from "./components/EmployeeProfile";
import Settings from "./components/Settings";
import Upload from "./components/upload";
import EditSalary from "./components/EditSalary";
import LostPassword from "./components/LostPassword";
import CreateAccount from "./components/CreateAccount";
import LeaveList from "./components/leaveList";
import LeaveEdit from "./components/LeaveEdit";
import Leavereq from "./components/Leavereq";
import LeaveHome from "./components/LeaveHome";
import Footer from "./components/footer/footer";
import Salary from "./components/Salary";
import salaryhome from "./components/SalaryHome";
import EmployeeLeaveView from "./components/EmployeeLeaveView";
import UpdateSalary from "./components/UpdateSalary";
import Main from "./components/Main";
import EditProfile from "./components/editprofile";
import updateemployee from "./components/updateemployeeprofile";














export default class App extends Component{
  render(){
    return(
      <><div className="container">
        <Router>
        <Route path="/editprofile" exact component={EditProfile} />
        <Route path="/employeeupdate/:id" exact component={updateemployee} />
        <Route path="/" exact component={Main} />
        <Route path="/main" exact component={EmployeeLogin} />
                <Route path="/adminlogin" exact component={AdminLogin} />
          <Route path="/empolyeeprofile" exact component={EmployeeProfile} />
          <Route path="/home" exact component={Home} />
          <Route path="/add" exact component={CreatePost} />
          <Route path="/edit/:id" exact component={EditEmployeeDetails} />
          <Route path="/editemployee" exact component={EditPost} />
          <Route path="/post/:id" exact component={EmployeeDetails} />
          <Route path="/list" exact component={EmployeeList} />
          <Route path="/delete/:id" exact component={DeleteEmployee} />
          <Route path="/settings" exact component={Settings} />
          <Route path="/upload" exact component={Upload} />
          <Route path="/salary/:id" exact component={Salary} />
          <Route path="/editsalary" exact component={EditSalary} />
          <Route path="/lost" exact component={LostPassword} />
          <Route path="/create" exact component={CreateAccount} />
          <Route path="/leaveedit/:id" exact component={LeaveEdit} />
          <Route path="/leavelist" exact component={LeaveList} />
          <Route path="/leavereq" exact component={Leavereq} />
          <Route path="/leavehome" exact component={LeaveHome} />
          <Route path="/salaryhome" exact component={salaryhome} />
          <Route path="/emview/:id" exact component={EmployeeLeaveView} />
          <Route path="/upsalary/:id" exact component={UpdateSalary} />
       
       
        





        </Router>
      </div><Footer /></>
    )
    }
  }
  

