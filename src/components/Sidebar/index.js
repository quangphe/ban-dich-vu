import React from "react";
import clsx from "clsx";
import { Link } from "react-router-dom";
import styles from "./Sidebar.module.scss";

function Sidebar() {
    const sidebar = clsx(styles.sidebar);
    const sidebar__logo = clsx(styles.sidebar__logo);
    const sidebar__item = clsx(styles.sidebar__item);
    return (
        <div className={sidebar}>
            <div className={sidebar__logo}>
                <Link to="/">
                    <img width="128" height="80" src={`${process.env.PUBLIC_URL}/images/logo.svg`} alt="" />
                </Link>
            </div>
            <ul>
                <li className={sidebar__item}>
                    <Link to="service-list">
                        <i className="icon-list-bullet"></i>
                        Danh sách dịch vụ
                    </Link>
                </li>

                <li className={sidebar__item}>
                    <Link to="price-list">
                        <i className="icon-tag-1"></i>
                        Bảng giá
                    </Link>
                </li>

                <li className={sidebar__item}>
                    <Link to="order">
                        <i className="icon-cart"></i>
                        Đơn hàng
                    </Link>
                </li>

                <li className={sidebar__item}>
                    <Link to="user-list">
                        <i className="icon-user"></i>
                        Danh sách tài khoản
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default Sidebar;