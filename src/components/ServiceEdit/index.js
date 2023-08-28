import React from "react";
import clsx from "clsx";
import Button from "../Button";
import styles from "./ServiceEdit.module.scss";

function ServiceEdit() {
    const editService_ss_1_0_0 = clsx(styles.editService_ss_1_0_0);
    const editService_ss_1_0_0__box = clsx(styles.editService_ss_1_0_0__box);
    const editService_ss_1_0_0__header = clsx(styles.editService_ss_1_0_0__header);
    const editService_ss_1_0_0__title = clsx(styles.editService_ss_1_0_0__title);
    const editService_ss_1_0_0__item = clsx(styles.editService_ss_1_0_0__item);
    const editService_ss_1_0_0__btn = clsx(styles.editService_ss_1_0_0__btn);
    return (
        <section className={editService_ss_1_0_0}>
            <div className={editService_ss_1_0_0__box}>
                <div className={editService_ss_1_0_0__header}>
                    <h2 className={editService_ss_1_0_0__title}>Sửa dịch vụ</h2>
                </div>
                <div className={editService_ss_1_0_0__item}>
                    <label>Hình ảnh</label>
                    <input type="file" />
                </div>
                <div className={editService_ss_1_0_0__item}>
                    <label>Tên dịch vụ</label>
                    <input type="text" />
                </div>
                <div className={editService_ss_1_0_0__item}>
                    <label>Giá niêm yết</label>
                    <input type="text" />
                </div>
                <div className={editService_ss_1_0_0__item}>
                    <label>Giá khuyến mãi</label>
                    <input type="text" />
                </div>
                <div className={editService_ss_1_0_0__btn}>
                    <Button submitAdd>Lưu</Button>
                </div>
            </div>
        </section>
    )
}

export default ServiceEdit;