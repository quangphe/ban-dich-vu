import React from "react";
import clsx from "clsx";
import { Link } from "react-router-dom";
import Button from "../Button";
import styles from "./ServiceList.module.scss";

function ServiceList() {
    const listService_ss_1_0_0 = clsx(styles.listService_ss_1_0_0);
    const listService_ss_1_0_0__box = clsx(styles.listService_ss_1_0_0__box);
    const listService_ss_1_0_0__header = clsx(styles.listService_ss_1_0_0__header);
    const listService_ss_1_0_0__title = clsx(styles.listService_ss_1_0_0__title);
    const listService_ss_1_0_0__table = clsx(styles.listService_ss_1_0_0__table);
    const listService_ss_1_0_0__tableBox = clsx(styles.listService_ss_1_0_0__tableBox);
    const listService_ss_1_0_0__pic = clsx(styles.listService_ss_1_0_0__pic);
    const listService_ss_1_0_0__icon = clsx(styles.listService_ss_1_0_0__icon);
    const listService_ss_1_0_0__iconEdit = clsx(styles.listService_ss_1_0_0__iconEdit);
    const listService_ss_1_0_0__iconDelete = clsx(styles.listService_ss_1_0_0__iconDelete);
    return (
        <section className={listService_ss_1_0_0}>
            <div className={listService_ss_1_0_0__box}>
                <div className={listService_ss_1_0_0__header}>
                    <h2 className={listService_ss_1_0_0__title}>Danh sách dịch vụ</h2>
                    <div>
                        <Link to="../add-service">
                            <Button submitAdd>Thêm</Button>
                        </Link>
                    </div>
                </div>
                <div className={`${listService_ss_1_0_0__table} table-responsive`}>
                    <table className={`${listService_ss_1_0_0__tableBox} table`}>
                        <tr>
                            <th>Hình ảnh</th>
                            <th>Tên dịch vụ</th>
                            <th>Giá niêm yết</th>
                            <th>Giá khuyến mãi</th>
                            <th>Hành động</th>
                        </tr>
                        <tr>
                            <td>
                                <div className={listService_ss_1_0_0__pic}>
                                    <img src={`${process.env.PUBLIC_URL}/images/page4-pic1.jpg`} alt="" />
                                </div>
                            </td>
                            <td>Nâng mũi</td>
                            <td>200000</td>
                            <td>100000</td>
                            <td>
                                <div className={listService_ss_1_0_0__icon}>
                                    <Link to="../edit-service">
                                        <i className={`${listService_ss_1_0_0__iconEdit} icon-edit`}></i>
                                    </Link>
                                    <Link to="#">
                                        <i className={`${listService_ss_1_0_0__iconDelete} icon-trash-empty`}></i>
                                    </Link>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div className={listService_ss_1_0_0__pic}>
                                    <img src={`${process.env.PUBLIC_URL}/images/page4-pic1.jpg`} alt="" />
                                </div>
                            </td>
                            <td>Nâng mũi</td>
                            <td>200000</td>
                            <td>100000</td>
                            <td>
                                <div className={listService_ss_1_0_0__icon}>
                                    <Link to="../edit-service">
                                        <i className={`${listService_ss_1_0_0__iconEdit} icon-edit`}></i>
                                    </Link>
                                    <Link to="#">
                                        <i className={`${listService_ss_1_0_0__iconDelete} icon-trash-empty`}></i>
                                    </Link>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div className={listService_ss_1_0_0__pic}>
                                    <img src={`${process.env.PUBLIC_URL}/images/page4-pic1.jpg`} alt="" />
                                </div>
                            </td>
                            <td>Nâng mũi</td>
                            <td>200000</td>
                            <td>100000</td>
                            <td>
                                <div className={listService_ss_1_0_0__icon}>
                                    <Link to="../edit-service">
                                        <i className={`${listService_ss_1_0_0__iconEdit} icon-edit`}></i>
                                    </Link>
                                    <Link to="#">
                                        <i className={`${listService_ss_1_0_0__iconDelete} icon-trash-empty`}></i>
                                    </Link>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div className={listService_ss_1_0_0__pic}>
                                    <img src={`${process.env.PUBLIC_URL}/images/page4-pic1.jpg`} alt="" />
                                </div>
                            </td>
                            <td>Nâng mũi</td>
                            <td>200000</td>
                            <td>100000</td>
                            <td>
                                <div className={listService_ss_1_0_0__icon}>
                                    <Link to="../edit-service">
                                        <i className={`${listService_ss_1_0_0__iconEdit} icon-edit`}></i>
                                    </Link>
                                    <Link to="#">
                                        <i className={`${listService_ss_1_0_0__iconDelete} icon-trash-empty`}></i>
                                    </Link>
                                </div>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        </section>
    )
}

export default ServiceList;