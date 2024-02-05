import React from "react";

import {styles} from '../style';
import {starFull, starEmpty} from '../assets';

interface ReviewCardProps {
    children: React.ReactNode;
    name: string;
    role: string;
    profilePicture: string;
    stars?: number; // 1-5
};

const ReviewCard: React.FC<ReviewCardProps> = ({
    children,
    name,
    role,
    profilePicture,
    stars = 5,
}) => {
    const starsArray = [];
    for (let i = 0; i < stars; i++) {
        starsArray.push(<img key={i} src={starFull} alt="Star" />);
    }
    for (let i = 0; i < 5 - stars; i++) {
        starsArray.push(<img key={i + stars} src={starEmpty} alt="Star" />);
    }

    return (
    <div className="flex flex-col items-start justify-center gap-y-3 p-8 bg-secondary/30 rounded-[25px] md:max-w-[30%]">
        <div className="flex justify-center items-center gap-x-4">
            <img src={profilePicture} alt="Avatar" />
            <div className="flex flex-col gap-y-2 justify-center items-start">
                <h3 className={`${styles.BoldBase} text-text-light`}>{name}</h3>
            <h4 className={`${styles.BaseText} text-text-light opacity-80`}>{role}</h4>
            </div>
        </div>
        <div className="h-[24px] flex flex-row items-center">
            {starsArray}
        </div>
        <div className={`${styles.BaseText} text-text-light`}>
            {children}
        </div>
    </div>
)};

export default ReviewCard;