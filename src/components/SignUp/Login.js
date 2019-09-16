import React from 'react';
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';

/**
 *
 *
 * @export
 * @class Login
 * @extends {React.Component}
 */

export class Login extends React.Component {
  render() {
    const responseFacebook = (response) => {
      console.log(response);
    };

    const responseGoogle = (response) => {
      console.log(response);
    };

    return (
      <div className= 'Login'>
        <FacebookLogin
          appId= '939256006414261'
          fields= 'name,email,picture'
          callback={responseFacebook}
        />
        <br />
        <br />
        <GoogleLogin
          clientId= '536136095733-v88ka9c6pinaubhpj13drhrck6egp830.apps.googleusercontent.com'
          buttonText = 'login with google'
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
        />

      </div>
    );
  }
}


