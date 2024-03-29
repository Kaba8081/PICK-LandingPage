import React from "react";
import {styles} from "../style";
import clsx from "clsx";
import classNames from "classnames";

type StatVariant = "fill" | "hollow";

interface StatProps {
    variant?: StatVariant;
    title: string;
    value: string;
    className?: string;
};

const StatVariantClasses: Record<StatVariant, string> = {
    fill: "text-accent",
    hollow: "strokeStat"
};

const Stat: React.FC<StatProps> = ({
    variant = "fill",
    title,
    value,
    className
}) => (
    <div className={className}>
        <h2 className={classNames(clsx(StatVariantClasses[variant]), `flex flex-col align-center shrink-0 ${styles.BoldHeader2}`)}>{value}</h2>
        <h3 className={`opacity-70 text-text-light font-semibold ${styles.SemiBoldHeader3} sm:text-base 2xl:text-xl`}>{title}</h3>
    </div>
)

export default Stat;