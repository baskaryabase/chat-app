import React from "react";
import "./login.css"

export default class Login extends React.Component{
    componentDidMount(){
        document.getElementById('loginform').addEventListener('submit', function(e){
            e.preventDefault();
        })
    }
    submit(){
        document.getElementById("loader").innerHTML="<i class='fas fa-spinner fa-spin'></i>"
    }    
    render(){
        return(
            <div>
               <div className="login">
                    <h1>Login</h1>
                    <form id="loginform" method="post">
                        <input type="text" name="username" placeholder="Username" required="required" />
                        <input type="password" name="password" placeholder="Password" required="required" />
                        <button type="submit" onClick={this.submit.bind(this)} className="btn btn-primary btn-block btn-large">Let me in.<span id="loader"/></button>
                    </form>
                    <a style={{textDecoration:"none",color:"#fff",fontSize:12}} href="/signup">Not Yet Registered?, Click here to Signup.</a>
                </div>
            </div>
        )
    }
}