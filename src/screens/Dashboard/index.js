import React from "react";
import { Outlet } from 'react-router-dom';
import clsx from "clsx";
import styles from "./Dashboard.module.scss";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";

function Dashboard() {
    const main__box = clsx(styles.main__box)
    return (
        <div>
            <Header />
            <div className={main__box}>
                <Sidebar />
                <Outlet />
            </div>
        </div>
    )
}

export default Dashboard;