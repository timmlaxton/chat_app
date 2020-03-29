import React, { Component } from 'react';
import FormField from '../utils/Form/formfield';
import {update, generateData, isFormValid} from '../utils/Form/formActions';

import { connect } from 'react-redux';
import {loginUser} from '../../actions/user_actions';


class Register extends Component {

    state = {
        formError: false,
        formSuccess: '',
        formdata: {
            name: {
                element: "input",
                value: "",
                config: {
                name: 'name_input',
                type: 'text',
                placeholder: "Enter your name"
            },
                validation: {
                required: true,
                
                
                },
                valid: false,
                touched: false,
                validationMessage: ''

            },

                surname: {
                element: "input",
                value: "",
                config: {
                name: 'surname_input',
                type: 'text',
                placeholder: "Enter your surname"
                },

                validation: {
                required: true,
                    
                    
                },
                    valid: false,
                    touched: false,
                    validationMessage: ''
                
                },
                
                email: {
                element: "input",
                value: "",
                config: {
                name: 'email_input',
                type: 'email',
                placeholder: "Enter your email"
            },

                validation: {
                required: true,
                email:true
                    
            },
                valid: false,
                touched: false,
                validationMessage: ''
                
            },

                confirmPassword: {
                element: "input",
                value: "",
            
                config: {
                name: 'confirm_password_input',
                type: 'password',
                placeholder: "Confirm your password"
            
                },
                validation: {
                required: true,
                confirm: 'password'
                
                },
                valid: false,
                touched: false,
                validationMessage: ''
                },
                password: {
                 element: "input",
                 value: "",
        
                 config: {
                 name: 'password_input',
                 type: 'password',
                 placeholder: "Enter your password"
        
            },
                 validation: {
                required: true,
            
            },
                valid: false,
                touched: false,
                validationMessage: ''
        }

    }

}

updateForm = (element) => {
    const newFormdata = update(element, this.state.formdata, 'register');
    this.setState({
        formError: false,
        formdata: newFormdata

    })
}



submitForm = (event) => {
    event.preventDefault();

    let dataToSubmit = generateData(this.state.formdata, 'register');
    let formIsValid = isFormValid(this.state.formdata, 'register')

    if(formIsValid){
                console.log(dataToSubmit);
            }else{
                this.setState({
                    formError: true
                })

            }
        }

    
    render() {
        return (
            <div className="page_wrapper">
                <div className="container">
                    <div className="register_login_container">
                        <div className="left">
                            <form onSubmit={(event) => this.submitForm(event)}>
                            <h2> Personal Information</h2>
                            <div className="form_block_two">
                                <div className="block">
                            <FormField
                                id={'name'}
                                formdata={this.state.formdata.name}
                                change={(element)=> this.updateForm(element)}
                            />   
                            </div>
                            <div className="block">
                            <FormField
                                id={'surname'}
                                formdata={this.state.formdata.surname}
                                change={(element)=> this.updateForm(element)}
                            />   
                                </div>
                                </div>
                                <div>
                                <FormField
                                    id={'email'}
                                    formdata={this.state.formdata.email}
                                    change={(element)=> this.updateForm(element)}
                                />  
                                </div>
                                <h2>Verify Password</h2>
                                <div className="form_block_two">
                                
                                <div className="block">
                            <FormField
                                id={'password'}
                                formdata={this.state.formdata.password}
                                change={(element)=> this.updateForm(element)}
                            />   
                            </div>
                            <div className="block">
                            <FormField
                                id={'confirmPassword'}
                                formdata={this.state.formdata.confirmPassword}
                                change={(element)=> this.updateForm(element)}
                            />   
                                </div>
                            </div>
                            <div>

                {this.state.formError ?
                <div className="error_label">  
                    Please check your data
                </div>
                :null}

                <button onClick={(event) => this.submitForm(event)}>
                    Create An Account
                </button>


                            </div>




                         </form>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}

export default connect()(Register);
    
    