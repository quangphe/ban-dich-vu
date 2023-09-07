import React from "react";
import clsx from "clsx";
import { Link } from "react-router-dom";
import styles from "./Header.module.scss";

function Header() {
    const headerUser = clsx(styles.headerUser);
    const headerUser__box = clsx(styles.headerUser__box);
    const headerUser__btncheck = clsx(styles.headerUser__btncheck);
    const headerUser__hollow = clsx(styles.headerUser__hollow);
    const headerUser__noti = clsx(styles.headerUser__noti);
    const headerUser__boxUser = clsx(styles.headerUser__boxUser);
    const headerUser__dropdown = clsx(styles.headerUser__dropdown);
    const headerUser__itemMenu = clsx(styles.headerUser__itemMenu);
    return (
        <header className={headerUser}>
            <div className={headerUser__box}>
                <div class={headerUser__btncheck}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div className={headerUser__hollow}></div>
                <div className={headerUser__noti}>
                    {/* <img width="30" height="30" src={`${process.env.PUBLIC_URL}/images/icon-bell.png`} alt="" /> */}
                </div>
                <div className={headerUser__boxUser}>
                    <img className="iconUser" width="20" height="20" src={`${process.env.PUBLIC_URL}/images/user.png`} alt="" />
                    <div className="headerUser__user">
                        Nguyen Hoang Anh
                    </div>
                    <img width="15" height="15" src={`${process.env.PUBLIC_URL}/images/down-arrow.png`} alt="" />
                    <div className={headerUser__dropdown}>
                        <ul>

                            <li className={headerUser__itemMenu}>
                                <i className="icon-user-4"></i>
                                <Link to="/admin" style={{ display: 'block' }}>
                                    Admin
                                </Link>
                            </li>

                            <li className={headerUser__itemMenu}>
                                <i className="icon-user-4"></i>
                                Hồ sơ cá nhân
                            </li>
                            <li className={headerUser__itemMenu}>
                                <i className="icon-lock"></i>
                                Đổi mật khẩu
                            </li>
                            <li className={headerUser__itemMenu}>
                                <i className="icon-logout"></i>
                                Đăng xuất
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;