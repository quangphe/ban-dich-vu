import React from "react";
import clsx from "clsx";
import Button from "../Button";
import styles from "./UserList.module.scss";

function UserList() {
    const listUser_ss_1_0_0 = clsx(styles.listUser_ss_1_0_0);
    const listUser_ss_1_0_0__box = clsx(styles.listUser_ss_1_0_0__box);
    const listUser_ss_1_0_0__header = clsx(styles.listUser_ss_1_0_0__header);
    const listUser_ss_1_0_0__title = clsx(styles.listUser_ss_1_0_0__title);
    const listUser_ss_1_0_0__table = clsx(styles.listUser_ss_1_0_0__table);
    const listUser_ss_1_0_0__icon = clsx(styles.listUser_ss_1_0_0__icon);
    const listUser_ss_1_0_0__iconEdit = clsx(styles.listUser_ss_1_0_0__iconEdit);
    const listUser_ss_1_0_0__iconDelete = clsx(styles.listUser_ss_1_0_0__iconDelete);
    return (
        <section className={listUser_ss_1_0_0}>
            <div className={listUser_ss_1_0_0__box}>
                <div className={listUser_ss_1_0_0__header}>
                    <h2 className={listUser_ss_1_0_0__title}>Danh sách tài khoản</h2>
                    <div>
                        <Button submitAdd>Thêm</Button>
                    </div>
                </div>
                <div className={`${listUser_ss_1_0_0__table} table-responsive`}>
                    <table className="table">
                        <tr>
                            <th>Email</th>
                            <th>Quyền hạn</th>
                            <th>Hành động</th>
                        </tr>
                        <tr>
                            <td>vananh123@gmail.com</td>
                            <td>Editor</td>
                            <td>
                                <div className={listUser_ss_1_0_0__icon}>
                                    <i className={`${listUser_ss_1_0_0__iconEdit} icon-edit`}></i>
                                    <i className={`${listUser_ss_1_0_0__iconDelete} icon-trash-empty`}></i>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>vananh123@gmail.com</td>
                            <td>Editor</td>
                            <td>
                                <div className={listUser_ss_1_0_0__icon}>
                                    <i className={`${listUser_ss_1_0_0__iconEdit} icon-edit`}></i>
                                    <i className={`${listUser_ss_1_0_0__iconDelete} icon-trash-empty`}></i>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>vananh123@gmail.com</td>
                            <td>Editor</td>
                            <td>
                                <div className={listUser_ss_1_0_0__icon}>
                                    <i className={`${listUser_ss_1_0_0__iconEdit} icon-edit`}></i>
                                    <i className={`${listUser_ss_1_0_0__iconDelete} icon-trash-empty`}></i>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>vananh123@gmail.com</td>
                            <td>Editor</td>
                            <td>
                                <div className={listUser_ss_1_0_0__icon}>
                                    <i className={`${listUser_ss_1_0_0__iconEdit} icon-edit`}></i>
                                    <i className={`${listUser_ss_1_0_0__iconDelete} icon-trash-empty`}></i>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>vananh123@gmail.com</td>
                            <td>Editor</td>
                            <td>
                                <div className={listUser_ss_1_0_0__icon}>
                                    <i className={`${listUser_ss_1_0_0__iconEdit} icon-edit`}></i>
                                    <i className={`${listUser_ss_1_0_0__iconDelete} icon-trash-empty`}></i>
                                </div>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        </section>
    )
}

export default UserList;