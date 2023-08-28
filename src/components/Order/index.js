import React from "react";
import clsx from "clsx";
import styles from "./Order.module.scss";

function Order() {
    const order_ss_1_0_0 = clsx(styles.order_ss_1_0_0);
    const order_ss_1_0_0__box = clsx(styles.order_ss_1_0_0__box);
    const order_ss_1_0_0__header = clsx(styles.order_ss_1_0_0__header);
    const order_ss_1_0_0__boxSearch = clsx(styles.order_ss_1_0_0__boxSearch);
    const order_ss_1_0_0__search = clsx(styles.order_ss_1_0_0__search);
    const order_ss_1_0_0__filter = clsx(styles.order_ss_1_0_0__filter);
    const order_ss_1_0_0__title = clsx(styles.order_ss_1_0_0__title);
    const order_ss_1_0_0__table = clsx(styles.order_ss_1_0_0__table);
    const order_ss_1_0_0__tableBox = clsx(styles.order_ss_1_0_0__tableBox);
    const order_ss_1_0_0__icon = clsx(styles.order_ss_1_0_0__icon);
    const order_ss_1_0_0__iconDelete = clsx(styles.order_ss_1_0_0__iconDelete);
    return (
        <section className={order_ss_1_0_0}>
            <div className={order_ss_1_0_0__box}>
                <div className={order_ss_1_0_0__header}>
                    <h2 className={order_ss_1_0_0__title}>Đơn hàng</h2>
                    <div className={order_ss_1_0_0__boxSearch}>
                        <div className={order_ss_1_0_0__search}>
                            <input type="text" placeholder="Tìm kiếm" />
                            <i className="icon-search-1"></i>
                        </div>
                        <div className={order_ss_1_0_0__filter}>
                            <input type="date" />
                        </div>
                    </div>
                </div>
                <div className={`${order_ss_1_0_0__table} table-responsive`}>
                    <table className={`${order_ss_1_0_0__tableBox} table`}>
                        <tr>
                            <th>Tên khách hàng</th>
                            <th>Số điện thoại</th>
                            <th>Email</th>
                            <th>Dịch vụ đăng ký</th>
                            <th>Ngày đăng ký</th>
                            <th>Thành tiền</th>
                            <th>Hành động</th>
                        </tr>
                        <tr>
                            <td>
                                Minh Anh
                            </td>
                            <td>0987654321</td>
                            <td>minhanh@gmail.com</td>
                            <td>Nâng mũi, Cắt mí</td>
                            <td>12/05/2023</td>
                            <td>5000000</td>
                            <td>
                                <div className={order_ss_1_0_0__icon}>
                                    <i className={`${order_ss_1_0_0__iconDelete} icon-trash-empty`}></i>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Minh Anh
                            </td>
                            <td>0987654321</td>
                            <td>minhanh@gmail.com</td>
                            <td>Nâng mũi, Cắt mí</td>
                            <td>12/05/2023</td>
                            <td>5000000</td>
                            <td>
                                <div className={order_ss_1_0_0__icon}>
                                    <i className={`${order_ss_1_0_0__iconDelete} icon-trash-empty`}></i>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Minh Anh
                            </td>
                            <td>0987654321</td>
                            <td>minhanh@gmail.com</td>
                            <td>Nâng mũi, Cắt mí</td>
                            <td>12/05/2023</td>
                            <td>5000000</td>
                            <td>
                                <div className={order_ss_1_0_0__icon}>
                                    <i className={`${order_ss_1_0_0__iconDelete} icon-trash-empty`}></i>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Minh Anh
                            </td>
                            <td>0987654321</td>
                            <td>minhanh@gmail.com</td>
                            <td>Nâng mũi, Cắt mí</td>
                            <td>12/05/2023</td>
                            <td>5000000</td>
                            <td>
                                <div className={order_ss_1_0_0__icon}>
                                    <i className={`${order_ss_1_0_0__iconDelete} icon-trash-empty`}></i>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Minh Anh
                            </td>
                            <td>0987654321</td>
                            <td>minhanh@gmail.com</td>
                            <td>Nâng mũi, Cắt mí</td>
                            <td>12/05/2023</td>
                            <td>5000000</td>
                            <td>
                                <div className={order_ss_1_0_0__icon}>
                                    <i className={`${order_ss_1_0_0__iconDelete} icon-trash-empty`}></i>
                                </div>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        </section>
    )
}

export default Order;