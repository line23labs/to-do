import React from "react";
import axios from 'axios';

export class Login extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      formFields :{Email: '',Password: ''}
};
  }
  inputChangeHandler(e) {
    let formFields = {...this.state.formFields};
    formFields[e.target.name] = e.target.value;
    formFields[e.target]
    this.setState({
     formFields
    });
   }
   formHandler(formFields) {
    axios.post('/api/register/user', formFields)
      .then(function(response){
        console.log(response);
        //Perform action based on response
    })
      .catch(function(error){
        console.log(error);
        //Perform action based on error
      });
   }

  render() {
    return (
      <div className = "limiter">
      <div className = "container-login100">
        <div className = 'wrap-login100 p-l-50 p-r-50 p-t-77 p-b-30'>
      <form action = '/api/register/user' method = 'get' onSubmit = {this.formHandler(this.state.formFields)}className = 'login100-form'>
      <span className="signup100-form-title p-b-66 p-t-30">
              <strong>Login</strong>
            </span>
      <div className = 'wrap-input100'>
              <input className = 'input100' onChange={(e) => this.inputChangeHandler.call(this, e)} value={this.state.formFields.Email}
                type="text"
                name="Email"
                placeholder="email / Username"
                required = 'ex@abc.xyz'
              ></input>

            </div>
            <div className = 'wrap-input100'>
              <input className = 'input100' type="text" name="pass" placeholder="Password" onChange={(e) => this.inputChangeHandler.call(this, e)} value={this.state.formFields.Password} required></input>
            </div>
            <div>
            <input className="input-checkbox100" id="ckb1" type="checkbox" name="remember-me"></input>
            <label className="label-checkbox100" for="ckb1">
							Remember me
						</label>
</div>
      <div className = 'container-login100-form-btn p-t-25'>
        <button id="send" type = 'submit' className = 'SignUp100-form-btn'>LOGIN</button>
        </div>
        <div class="text-center w-full p-t-42 p-b-22">
						<span class="txt1">
							Or login with
						</span>
					</div>

					<a href="#" class="btn-face m-b-10">
						<i className="fa fa-facebook-official"></i>
						Facebook
					</a>

					<a href="#" class="btn-google m-b-10">
						Google
					</a>

        <div className = "text-center w-full p-t-115">
              <span className = "txt1 ">Do not have an account?</span>

              <a className = "txt1 bo1 hov1 text-center" href="./SignUp">
                SignUp
              </a>
            </div>
      </form>
      </div>
      </div>
      </div>
    );
  }
};
