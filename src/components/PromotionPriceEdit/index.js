import React from "react";
import clsx from "clsx";
import Button from "../Button";
import styles from "./PromotionPriceEdit.module.scss";

function PromotionPriceEdit() {
    const promotionPriceEdit_ss_1_0_0 = clsx(styles.promotionPriceEdit_ss_1_0_0);
    const promotionPriceEdit_ss_1_0_0__box = clsx(styles.promotionPriceEdit_ss_1_0_0__box);
    const promotionPriceEdit_ss_1_0_0__header = clsx(styles.promotionPriceEdit_ss_1_0_0__header);
    const promotionPriceEdit_ss_1_0_0__title = clsx(styles.promotionPriceEdit_ss_1_0_0__title);
    const promotionPriceEdit_ss_1_0_0__item = clsx(styles.promotionPriceEdit_ss_1_0_0__item);
    const promotionPriceEdit_ss_1_0_0__btn = clsx(styles.promotionPriceEdit_ss_1_0_0__btn);
    return (
        <section className={promotionPriceEdit_ss_1_0_0}>
            <div className={promotionPriceEdit_ss_1_0_0__box}>
                <div className={promotionPriceEdit_ss_1_0_0__header}>
                    <h2 className={promotionPriceEdit_ss_1_0_0__title}>Sửa giá dịch vụ khuyến mãi</h2>
                </div>
                <div className={promotionPriceEdit_ss_1_0_0__item}>
                    <label>Hình ảnh</label>
                    <input type="file" />
                </div>
                <div className={promotionPriceEdit_ss_1_0_0__item}>
                    <label>Tên dịch vụ</label>
                    <input type="text" />
                </div>
                <div className={promotionPriceEdit_ss_1_0_0__item}>
                    <label>Giá khuyến mãi</label>
                    <input type="text" />
                </div>
                <div className={promotionPriceEdit_ss_1_0_0__item}>
                    <label>Thời gian áp dụng</label>
                    <input type="date" />
                </div>
                <div className={promotionPriceEdit_ss_1_0_0__item}>
                    <label>Thời gian kết thúc</label>
                    <input type="date" />
                </div>
                <div className={promotionPriceEdit_ss_1_0_0__btn}>
                    <Button submitAdd>Lưu</Button>
                </div>
            </div>
        </section>
    )
}

export default PromotionPriceEdit;