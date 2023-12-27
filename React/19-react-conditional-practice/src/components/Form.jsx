import React from "react";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";

function Form(props) {

    return props.isRegistered?<SignupForm/> : (props.isLoggedin ? <h1>Hello</h1> : <LoginForm/>)
}

export default Form;