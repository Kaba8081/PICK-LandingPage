import React from "react";
import clsx from "clsx";
import classNames from "classnames";
import { styles } from "../style";
import Button from "./Button";

type OffertCardVariant = "primary" | "secondary";

interface OffertCardProps {
    children: React.ReactNode;
    price: string;
    title: string;
    variant?: OffertCardVariant;
};

const offertCardVariantClasses: Record<OffertCardVariant, string> = {
    primary: "bg-primary-light text-text-light marker:text-light",
    secondary: "bg-secondary bg-opacity-20 text-text marker:text",
};

const OffertCard: React.FC<OffertCardProps> = ({
    children,
    price,
    title,
    variant = "secondary",
}) => {
    const button_variant = variant === "primary" ? "accent" : "hollow";
    return(
        <div className={classNames("flex flex-col p-8 gap-y-3 rounded-[25px] max-w-[30%]", clsx(offertCardVariantClasses[variant]))}>
            <h3 className={`${styles.SemiBoldHeader2} leading-3`}>{title}</h3>
            <hr className="border-t-2 text-secondary"/>
            <div className="flex flex-col w-full items-start content-start gap-y-2">
                <div className="flex flex-row items-end">
                    <p className={`text-accent-dark ${styles.BoldHeader3}`}>${price}</p>
                    <p className={`opacity-80 ${styles.SemiBoldHeader4}`}>/miesiąc</p>
                </div>
                <div className={`${styles.BaseText}`}>{children}</div>
            </div>
            <div className="flex flex-row w-full justify-center pt-6">
                <Button variant={button_variant}>Zapisz się!</Button>
            </div>
        </div>
)};

export default OffertCard