import clsx from 'clsx';
import React from "react";
import Button from "../../components/Button";
import Input from "../../components/Input";
import styles from "./Register.module.scss";

function RegisterForm() {
    const registerBox = clsx(styles.register_ss_1_0_0__registerBox);
    const register__field = clsx(styles.register_ss_1_0_0__field);
    const register__icon = clsx(styles.register_ss_1_0_0__icon);
    const register__input = clsx(styles.register_ss_1_0_0__input);
    const register__submit = clsx(styles.register_ss_1_0_0__submit);
    const button__icon = clsx(styles.button__icon);
    return (
        <form className={registerBox}>
            <div className={register__field}>
                <i className={`${register__icon} icon-user`}></i>
                <Input type="text" className={register__input} placeholder="User name / Email"></Input>
            </div>
            <div className={register__field}>
                <i className={`${register__icon} icon-lock`}></i>
                <Input type="password" className={register__input} placeholder="Password"></Input>
            </div>
            <div className={register__field}>
                <i className={`${register__icon} icon-lock`}></i>
                <Input type="password" className={register__input} placeholder="Confirm Password"></Input>
            </div>
            <Button btnLoginSubmit className={`${register__submit} button`}>
                <span className="button__text">Sign Up Now</span>
                <i className={`${button__icon} icon-right-open`}></i>
            </Button>
        </form>
    )
}

export default RegisterForm;