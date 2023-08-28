import React from "react";
import clsx from "clsx";
import styles from "./PriceList.module.scss";

function PriceList() {
    const listPrice_ss_1_0_0 = clsx(styles.listPrice_ss_1_0_0);
    const listPrice_ss_1_0_0__box = clsx(styles.listPrice_ss_1_0_0__box);
    const listPrice_ss_1_0_0__header = clsx(styles.listPrice_ss_1_0_0__header);
    const listPrice_ss_1_0_0__filter = clsx(styles.listPrice_ss_1_0_0__filter);
    const listPrice_ss_1_0_0__title = clsx(styles.listPrice_ss_1_0_0__title);
    const listPrice_ss_1_0_0__table = clsx(styles.listPrice_ss_1_0_0__table);
    const listPrice_ss_1_0_0__tableBox = clsx(styles.listPrice_ss_1_0_0__tableBox);
    const listPrice_ss_1_0_0__pic = clsx(styles.listPrice_ss_1_0_0__pic);
    const listPrice_ss_1_0_0__icon = clsx(styles.listPrice_ss_1_0_0__icon);
    const listPrice_ss_1_0_0__iconEdit = clsx(styles.listPrice_ss_1_0_0__iconEdit);
    const listPrice_ss_1_0_0__iconDelete = clsx(styles.listPrice_ss_1_0_0__iconDelete);
    return (
        <section className={listPrice_ss_1_0_0}>
            <div className={listPrice_ss_1_0_0__box}>
                <div className={listPrice_ss_1_0_0__header}>
                    <h2 className={listPrice_ss_1_0_0__title}>Bảng giá dịch vụ</h2>
                    <div className={listPrice_ss_1_0_0__filter}>
                        <input type="date" />
                    </div>
                </div>
                <div className={`${listPrice_ss_1_0_0__table} table-responsive`}>
                    <table className={`${listPrice_ss_1_0_0__tableBox} table`}>
                        <tr>
                            <th>Hình ảnh</th>
                            <th>Tên dịch vụ</th>
                            <th>Giá niêm yết</th>
                            <th>Thời gian sửa giá</th>
                            <th>Hành động</th>
                        </tr>
                        <tr>
                            <td>
                                <div className={listPrice_ss_1_0_0__pic}>
                                    <img src={`${process.env.PUBLIC_URL}/images/page4-pic1.jpg`} alt="" />
                                </div>
                            </td>
                            <td>Nâng mũi</td>
                            <td>200000</td>
                            <td>30/04/2023</td>
                            <td>
                                <div className={listPrice_ss_1_0_0__icon}>
                                    <i className={`${listPrice_ss_1_0_0__iconEdit} icon-eye`}></i>
                                    <i className={`${listPrice_ss_1_0_0__iconDelete} icon-trash-empty`}></i>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div className={listPrice_ss_1_0_0__pic}>
                                    <img src={`${process.env.PUBLIC_URL}/images/page4-pic1.jpg`} alt="" />
                                </div>
                            </td>
                            <td>Nâng mũi</td>
                            <td>200000</td>
                            <td>30/04/2023</td>
                            <td>
                                <div className={listPrice_ss_1_0_0__icon}>
                                    <i className={`${listPrice_ss_1_0_0__iconEdit} icon-eye`}></i>
                                    <i className={`${listPrice_ss_1_0_0__iconDelete} icon-trash-empty`}></i>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div className={listPrice_ss_1_0_0__pic}>
                                    <img src={`${process.env.PUBLIC_URL}/images/page4-pic1.jpg`} alt="" />
                                </div>
                            </td>
                            <td>Nâng mũi</td>
                            <td>200000</td>
                            <td>30/04/2023</td>
                            <td>
                                <div className={listPrice_ss_1_0_0__icon}>
                                    <i className={`${listPrice_ss_1_0_0__iconEdit} icon-eye`}></i>
                                    <i className={`${listPrice_ss_1_0_0__iconDelete} icon-trash-empty`}></i>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div className={listPrice_ss_1_0_0__pic}>
                                    <img src={`${process.env.PUBLIC_URL}/images/page4-pic1.jpg`} alt="" />
                                </div>
                            </td>
                            <td>Nâng mũi</td>
                            <td>200000</td>
                            <td>30/04/2023</td>
                            <td>
                                <div className={listPrice_ss_1_0_0__icon}>
                                    <i className={`${listPrice_ss_1_0_0__iconEdit} icon-eye`}></i>
                                    <i className={`${listPrice_ss_1_0_0__iconDelete} icon-trash-empty`}></i>
                                </div>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        </section>
    )
}

export default PriceList;