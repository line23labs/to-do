import React from "react";

export class Login extends React.Component{
  render() {
    return (
      <div className = "limiter">
      <div className = "container-login100">
        <div className = 'wrap-login100 p-l-50 p-r-50 p-t-77 p-b-30'>
      <form role = 'form' method = 'post' className = 'signup100-form validate-form'>
      <span className="signup100-form-title p-b-66 p-t-30">
              <strong>Login</strong>
            </span>
      <div className = 'wrap-input100'>
              <input className = 'input100'
                type="text"
                name="Email"
                placeholder="email / Username"
                required = 'ex@abc.xyz'
              ></input>
              <span className = "focus-input100"></span>
              <span className = "symbol-input100">
                <span className = "lnr lnr-envelope"></span>
              </span>
            </div>
            <div className = 'wrap-input100'>
              <input className = 'input100' type="text" name="pass" placeholder="Password"></input>
              <span className = "focus-input100"></span>
              <span className = "symbol-input100">
                <span className = "lnr lnr-lock"></span>
              </span>
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
