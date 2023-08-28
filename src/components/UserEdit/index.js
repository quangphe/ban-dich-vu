import React from "react";
import clsx from "clsx";
import Button from "../Button";
import styles from "./UserEdit.module.scss";

function UserEdit() {
    const editUser_ss_1_0_0 = clsx(styles.editUser_ss_1_0_0);
    const editUser_ss_1_0_0__box = clsx(styles.editUser_ss_1_0_0__box);
    const editUser_ss_1_0_0__header = clsx(styles.editUser_ss_1_0_0__header);
    const editUser_ss_1_0_0__title = clsx(styles.editUser_ss_1_0_0__title);
    const editUser_ss_1_0_0__item = clsx(styles.editUser_ss_1_0_0__item);
    const editUser_ss_1_0_0__btn = clsx(styles.editUser_ss_1_0_0__btn);
    return (
        <section className={editUser_ss_1_0_0}>
            <div className={editUser_ss_1_0_0__box}>
                <div className={editUser_ss_1_0_0__header}>
                    <h2 className={editUser_ss_1_0_0__title}>Sửa tài khoản</h2>
                </div>
                <div className={editUser_ss_1_0_0__item}>
                    <label>Email</label>
                    <input type="text" />
                </div>
                <div className={editUser_ss_1_0_0__item}>
                    <label>Password</label>
                    <input type="text" />
                </div>
                <div className={editUser_ss_1_0_0__item}>
                    <label>Quyền hạn</label>
                    <select name="" id="">
                        <option value="admin">Admin</option>
                        <option value="editor">Editor</option>
                        <option value="sale">Sale</option>
                    </select>
                </div>
                <div className={editUser_ss_1_0_0__btn}>
                    <Button submitAdd>Lưu</Button>
                </div>
            </div>
        </section>
    )
}

export default UserEdit;