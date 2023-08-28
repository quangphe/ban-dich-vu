import clsx from 'clsx';
import RegisterForm from "./RegisterForm";
import { Link } from "react-router-dom";
import styles from "./Register.module.scss";

function Register() {
    const classes = clsx(styles.register_ss_1_0_0);
    const screen = clsx(styles.register_ss_1_0_0__screen);
    const content = clsx(styles.register_ss_1_0_0__content);
    const regist = clsx(styles.register_ss_1_0_0__regist);
    const regist__text = clsx(styles.register_ss_1_0_0__registText);
    const register__bg = clsx(styles.register_ss_1_0_0__background);
    const register__shape = clsx(styles.register_ss_1_0_0__shape);
    const register__shape1 = clsx(styles.register_ss_1_0_0__shape1);
    const register__shape2 = clsx(styles.register_ss_1_0_0__shape2);
    const register__shape3 = clsx(styles.register_ss_1_0_0__shape3);
    return (
        <section className={classes}>
            <div className="container">
                <div className={screen}>
                    <div className={content}>
                        <RegisterForm></RegisterForm>
                        <div className={regist}>
                            <p className={regist__text}>Have already an account? <Link to="">Login here</Link></p>
                        </div>
                    </div>
                    <div className={register__bg}>
                        <span className={`${register__shape} ${register__shape3}`}></span>
                        <span className={`${register__shape} ${register__shape2}`}></span>
                        <span className={`${register__shape} ${register__shape1}`}></span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Register;