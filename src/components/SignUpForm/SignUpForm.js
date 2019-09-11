import React, { Component } from 'react';

export class SignUpForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            fullName: ''
        };
    }

    render() {
        return (
            <div className='register-box-body'>
                <p className='login-box-msg'>Register a new membership</p>

                <form>
                    <div className='form-group has-feedback'>
                        <input
                            type='text'
                            className='form-control'
                            placeholder='Full name'
                            defaultValue={this.state.fullName}
                            onChange={this.onChange.bind(this)}
                        />
                        <span className='glyphicon glyphicon-user form-control-feedback'></span>
                    </div>
                </form>
            </div>
        );
    }

    onChange(event) {
        this.setState({ fullName: event.target.value});
    }
}
