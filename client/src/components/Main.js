import React,{Component} from "react";
import Img1 from "../images/employeemanagment.png";
import Img2 from "../images/surgerymanagement.png";
import Img3 from "../images/adminmanagement.png";
import Img4 from "../images/transactionmanagement.png";
import NavBar from "./NavBar";







export default class Main extends Component{
   
    render(){
        
        return(
        
        
        <><NavBar /><div> <div style={{ marginTop: '190px', marginLeft: '200px' }}>
                <table className="table">
                    <tr>
                        <th><a href="/main"><img src={Img1} width="110" height="210" className="d-inline-block align-top img-thumbnail " alt="" /></a></th>
                        <th><div ><img src={Img2} width="110" height="110" className="d-inline-block align-top img-thumbnail " alt="" /></div></th>
                        <th><div ><img src={Img3} width="110" height="110" className="d-inline-block align-top img-thumbnail " alt="" /></div></th>
                        <th><div ><img src={Img4} width="110" height="110" className="d-inline-block align-top img-thumbnail " alt="" /></div></th>
                    </tr>
                    <tr>
                        <td><h6 className="hcolor">Employee<br />Management</h6></td>
                        <td><h6 className="hcolor">Surgery<br />Management</h6></td>
                        <td><h6 className="hcolor">Admin<br />Management</h6></td>
                        <td><h6 className="hcolor">Transaction/Billing<br />Management</h6></td>
                    </tr>
                </table>
            </div></div></>
       )
    }
}