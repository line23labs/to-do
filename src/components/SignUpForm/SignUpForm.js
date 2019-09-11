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
            <div className='card'>
                <div className='card-body register-card-body'>
                    <p className='login-box-msg'>Register a new membership</p>

                    <form>
                        <div className='input-group mb-3'>
                            <input
                                type='text'
                                className='form-control'
                                placeholder='Full name'
                                defaultValue={this.state.fullName}
                                onChange={this.onChange.bind(this)}
                            />
                            <div className='input-group-append'>
                                <div className='input-group-text'>
                                    <span className='fa fa-user'></span>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }

    onChange(event) {
        this.setState({ fullName: event.target.value});
    }
}
