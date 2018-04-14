import React, { Component } from 'react';
import { withRouter } from "react-router-dom";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {isToggleOn: true};
        this.handleClick = this.handleClick.bind(this);
      }

      handleClick(event) {
        event.preventDefault();
        this.props.history.push('/products')
      }
    
  render() {
    return (
      <div className="row content-center">
        <div className="col-sm-6 col-md-4 col-md-offset-4">
            <h1 className="text-center login-title">La boutique de Fran</h1>
            <div className="account-wall">
                <img className="profile-img" src="https://lh5.googleusercontent.com/-b0-k99FZlyE/AAAAAAAAAAI/AAAAAAAAAAA/eu7opA4byxI/photo.jpg?sz=120"
                    alt=""/>
                <form className="form-signin">
                <input type="text" defaultValue="a@a.com" className="form-control" placeholder="Email" required autoFocus/>
                <input type="password" defaultValue="1234" className="form-control" placeholder="Password" required/>
                
                <button onClick={this.handleClick} className="btn btn-lg btn-primary btn-block" type="submit">
                    Sign in
                </button>
                
                <button className="btn btn-lg btn-primary btn-block" type="submit">
                    Login with Facebook
                </button>
                <label className="checkbox pull-left">
                    <input type="checkbox" value="remember-me"/>
                    Remember me
                </label>
                <br/>
                <a href="" className="pull-right need-help">Need help? </a><span className="clearfix"></span>
                </form>
            </div>
            <a href="" className="text-center new-account">Create an account </a>
        </div>
      </div>
    );
  }
}

export default withRouter(Login);