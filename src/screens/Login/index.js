import clsx from 'clsx';
import LoginForm from "./LoginForm";
import { Link } from "react-router-dom";
import styles from "./Login.module.scss";

function Login() {
    const classes = clsx(styles.login_ss_1_0_0);
    const screen = clsx(styles.login_ss_1_0_0__screen);
    const content = clsx(styles.login_ss_1_0_0__content);
    const regist = clsx(styles.login_ss_1_0_0__regist);
    const regist__text = clsx(styles.login_ss_1_0_0__registText);
    const login__bg = clsx(styles.login_ss_1_0_0__background);
    const login__shape = clsx(styles.login_ss_1_0_0__shape);
    const login__shape1 = clsx(styles.login_ss_1_0_0__shape1);
    const login__shape2 = clsx(styles.login_ss_1_0_0__shape2);
    const login__shape3 = clsx(styles.login_ss_1_0_0__shape3);
    return (
        <section className={classes}>
            <div className="container">
                <div className={screen}>
                    <div className={content}>
                        <LoginForm></LoginForm>
                        <div className={regist}>
                            <p className={regist__text}>Don't have an account? <Link to="">Sign up</Link></p>
                        </div>
                    </div>
                    <div className={login__bg}>
                        <span className={`${login__shape} ${login__shape3}`}></span>
                        <span className={`${login__shape} ${login__shape2}`}></span>
                        <span className={`${login__shape} ${login__shape1}`}></span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Login;