import React from "react";
import clsx from "clsx";
import Button from "../Button";
import styles from "./UserAdd.module.scss";

function UserAdd() {
    const addUser_ss_1_0_0 = clsx(styles.addUser_ss_1_0_0);
    const addUser_ss_1_0_0__box = clsx(styles.addUser_ss_1_0_0__box);
    const addUser_ss_1_0_0__header = clsx(styles.addUser_ss_1_0_0__header);
    const addUser_ss_1_0_0__title = clsx(styles.addUser_ss_1_0_0__title);
    const addUser_ss_1_0_0__item = clsx(styles.addUser_ss_1_0_0__item);
    const addUser_ss_1_0_0__btn = clsx(styles.addUser_ss_1_0_0__btn);
    return (
        <section className={addUser_ss_1_0_0}>
            <div className={addUser_ss_1_0_0__box}>
                <div className={addUser_ss_1_0_0__header}>
                    <h2 className={addUser_ss_1_0_0__title}>Thêm tài khoản</h2>
                </div>
                <div className={addUser_ss_1_0_0__item}>
                    <label>Email</label>
                    <input type="text" />
                </div>
                <div className={addUser_ss_1_0_0__item}>
                    <label>Password</label>
                    <input type="text" />
                </div>
                <div className={addUser_ss_1_0_0__item}>
                    <label>Quyền hạn</label>
                    <select name="" id="">
                        <option value="admin">Admin</option>
                        <option value="editor">Editor</option>
                        <option value="sale">Sale</option>
                    </select>
                </div>
                <div className={addUser_ss_1_0_0__btn}>
                    <Button submitAdd>Thêm</Button>
                </div>
            </div>
        </section>
    )
}

export default UserAdd;