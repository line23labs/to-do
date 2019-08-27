import React from "react";

export class Login extends React.Component{
  render() {
    return (
      <form role = 'form' method = 'post'>
      <div>
        <label>Email:</label>
          <input type="email" id="email" placeholder="Email" />
          </div>
          <div>
            <label>Password:</label>
          <input type="password" id="password" placeholder="Password" />
          </div>
      <div><button id="send" type = 'submit'>Send</button></div>
      </form>

    );
  }
};
