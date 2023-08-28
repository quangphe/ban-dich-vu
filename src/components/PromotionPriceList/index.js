import React from "react";
import clsx from "clsx";
import styles from "./PromotionPriceList.module.scss";

function PromotionPriceList() {
    const listPromotionPrice_ss_1_0_0 = clsx(styles.listPromotionPrice_ss_1_0_0);
    const listPromotionPrice_ss_1_0_0__box = clsx(styles.listPromotionPrice_ss_1_0_0__box);
    const listPromotionPrice_ss_1_0_0__header = clsx(styles.listPromotionPrice_ss_1_0_0__header);
    const listPromotionPrice_ss_1_0_0__filter = clsx(styles.listPromotionPrice_ss_1_0_0__filter);
    const listPromotionPrice_ss_1_0_0__title = clsx(styles.listPromotionPrice_ss_1_0_0__title);
    const listPromotionPrice_ss_1_0_0__table = clsx(styles.listPromotionPrice_ss_1_0_0__table);
    const listPromotionPrice_ss_1_0_0__tableBox = clsx(styles.listPromotionPrice_ss_1_0_0__tableBox);
    const listPromotionPrice_ss_1_0_0__pic = clsx(styles.listPromotionPrice_ss_1_0_0__pic);
    const listPromotionPrice_ss_1_0_0__icon = clsx(styles.listPromotionPrice_ss_1_0_0__icon);
    const listPromotionPrice_ss_1_0_0__iconEdit = clsx(styles.listPromotionPrice_ss_1_0_0__iconEdit);
    const listPromotionPrice_ss_1_0_0__iconDelete = clsx(styles.listPromotionPrice_ss_1_0_0__iconDelete);
    return (
        <section className={listPromotionPrice_ss_1_0_0}>
            <div className={listPromotionPrice_ss_1_0_0__box}>
                <div className={listPromotionPrice_ss_1_0_0__header}>
                    <h2 className={listPromotionPrice_ss_1_0_0__title}>Bảng giá khuyến mãi dịch vụ</h2>
                    <div className={listPromotionPrice_ss_1_0_0__filter}>
                        <input type="date" />
                    </div>
                </div>
                <div className={`${listPromotionPrice_ss_1_0_0__table} table-responsive`}>
                    <table className={`${listPromotionPrice_ss_1_0_0__tableBox} table`}>
                        <tr>
                            <th>Hình ảnh</th>
                            <th>Tên dịch vụ</th>
                            <th>Giá khuyến mãi</th>
                            <th>Thời gian áp dụng</th>
                            <th>Thời gian kết thúc</th>
                            <th>Hành động</th>
                        </tr>
                        <tr>
                            <td>
                                <div className={listPromotionPrice_ss_1_0_0__pic}>
                                    <img src={`${process.env.PUBLIC_URL}/images/page4-pic1.jpg`} alt="" />
                                </div>
                            </td>
                            <td>Nâng mũi</td>
                            <td>200000</td>
                            <td>30/04/2023</td>
                            <td>30/05/2023</td>
                            <td>
                                <div className={listPromotionPrice_ss_1_0_0__icon}>
                                    <i className={`${listPromotionPrice_ss_1_0_0__iconEdit} icon-edit`}></i>
                                    <i className={`${listPromotionPrice_ss_1_0_0__iconDelete} icon-trash-empty`}></i>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div className={listPromotionPrice_ss_1_0_0__pic}>
                                    <img src={`${process.env.PUBLIC_URL}/images/page4-pic1.jpg`} alt="" />
                                </div>
                            </td>
                            <td>Nâng mũi</td>
                            <td>200000</td>
                            <td>30/04/2023</td>
                            <td>30/05/2023</td>
                            <td>
                                <div className={listPromotionPrice_ss_1_0_0__icon}>
                                    <i className={`${listPromotionPrice_ss_1_0_0__iconEdit} icon-edit`}></i>
                                    <i className={`${listPromotionPrice_ss_1_0_0__iconDelete} icon-trash-empty`}></i>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div className={listPromotionPrice_ss_1_0_0__pic}>
                                    <img src={`${process.env.PUBLIC_URL}/images/page4-pic1.jpg`} alt="" />
                                </div>
                            </td>
                            <td>Nâng mũi</td>
                            <td>200000</td>
                            <td>30/04/2023</td>
                            <td>30/05/2023</td>
                            <td>
                                <div className={listPromotionPrice_ss_1_0_0__icon}>
                                    <i className={`${listPromotionPrice_ss_1_0_0__iconEdit} icon-edit`}></i>
                                    <i className={`${listPromotionPrice_ss_1_0_0__iconDelete} icon-trash-empty`}></i>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div className={listPromotionPrice_ss_1_0_0__pic}>
                                    <img src={`${process.env.PUBLIC_URL}/images/page4-pic1.jpg`} alt="" />
                                </div>
                            </td>
                            <td>Nâng mũi</td>
                            <td>200000</td>
                            <td>30/04/2023</td>
                            <td>30/05/2023</td>
                            <td>
                                <div className={listPromotionPrice_ss_1_0_0__icon}>
                                    <i className={`${listPromotionPrice_ss_1_0_0__iconEdit} icon-edit`}></i>
                                    <i className={`${listPromotionPrice_ss_1_0_0__iconDelete} icon-trash-empty`}></i>
                                </div>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        </section>
    )
}

export default PromotionPriceList;