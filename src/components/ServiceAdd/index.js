import React from "react";
import clsx from "clsx";
import Button from "../Button";
import styles from "./ServiceAdd.module.scss";

function ServiceAdd() {
    const addService_ss_1_0_0 = clsx(styles.addService_ss_1_0_0);
    const addService_ss_1_0_0__box = clsx(styles.addService_ss_1_0_0__box);
    const addService_ss_1_0_0__header = clsx(styles.addService_ss_1_0_0__header);
    const addService_ss_1_0_0__title = clsx(styles.addService_ss_1_0_0__title);
    const addService_ss_1_0_0__item = clsx(styles.addService_ss_1_0_0__item);
    const addService_ss_1_0_0__btn = clsx(styles.addService_ss_1_0_0__btn);
    return (
        <section className={addService_ss_1_0_0}>
            <div className={addService_ss_1_0_0__box}>
                <div className={addService_ss_1_0_0__header}>
                    <h2 className={addService_ss_1_0_0__title}>Thêm dịch vụ</h2>
                </div>
                <div className={addService_ss_1_0_0__item}>
                    <label>Hình ảnh</label>
                    <input type="file" />
                </div>
                <div className={addService_ss_1_0_0__item}>
                    <label>Tên dịch vụ</label>
                    <input type="text" />
                </div>
                <div className={addService_ss_1_0_0__item}>
                    <label>Giá niêm yết</label>
                    <input type="text" />
                </div>
                <div className={addService_ss_1_0_0__item}>
                    <label>Giá khuyến mãi</label>
                    <input type="text" />
                </div>
                <div className={addService_ss_1_0_0__btn}>
                    <Button submitAdd>Thêm</Button>
                </div>
            </div>
        </section>
    )
}

export default ServiceAdd;