import clsx from 'clsx';
import React from "react";
import Button from "../../components/Button";
import Input from "../../components/Input";
import styles from "./Login.module.scss";

function LoginForm() {
    const loginBox = clsx(styles.login_ss_1_0_0__loginBox);
    const login__field = clsx(styles.login_ss_1_0_0__field);
    const login__icon = clsx(styles.login_ss_1_0_0__icon);
    const login__input = clsx(styles.login_ss_1_0_0__input);
    const login__submit = clsx(styles.login_ss_1_0_0__submit);
    const button__icon = clsx(styles.button__icon);
    return (
        <form className={loginBox}>
            <div className={login__field}>
                <i className={`${login__icon} icon-user`}></i>
                <Input type="text" className={login__input} placeholder="User name / Email"></Input>
            </div>
            <div className={login__field}>
                <i className={`${login__icon} icon-lock`}></i>
                <Input type="password" className={login__input} placeholder="Password"></Input>
            </div>
            <Button btnLoginSubmit className={`${login__submit} button`}>
                <span className="button__text">Log In Now</span>
                <i className={`${button__icon} icon-right-open`}></i>
            </Button>
        </form>
    )
}

export default LoginForm;