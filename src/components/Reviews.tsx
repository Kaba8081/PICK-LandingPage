
import { styles } from "../style";
import {
    profPic1,
    profPic2,
    profPic3,
    profPic4,
    profPic5,
} from '../assets';
import ReviewCard from "./ReviewCard";

const Reviews = () => (
    <div id="reviews" className="w-full flex flex-col bg-primary-light px-[11.25%] py-8">
        <h2 className={`flex justify-center align-middle pb-7 ${styles.BoldHeader2} text-text-light`}>Sprawdź co mówią <br/>o nas użytkownicy</h2>
        <div className="flex flex-col gap-y-5">
            <div className="flex flex-row justify-between">
                <ReviewCard name="Paweł White" role="Trener osobisty" stars={3} profilePicture={profPic1}>
                    Lorem ipsum dolor sit amet consectetur. Consequat sodales sed .
                </ReviewCard>
                <ReviewCard name="Ella Yılmaz" role="Dziennikarka" stars={5} profilePicture={profPic2}>
                    Lorem ipsum dolor sit amet consectetur. Consequat sodales sed .
                </ReviewCard>
                <ReviewCard name="Jack Ogundipe" role="Programista" stars={4} profilePicture={profPic3}>
                    Lorem ipsum dolor sit amet consectetur. Consequat sodales sed .
                </ReviewCard>
            </div>
            <div className="flex flex-row justify-center gap-x-24">
                <ReviewCard name="Olivia Mäkinen" role="Szef Kuchni" stars={4} profilePicture={profPic4}>
                    Lorem ipsum dolor sit amet consectetur. Consequat sodales sed .
                </ReviewCard>
                <ReviewCard name="Harry Williams" role="Dietetyk" stars={5} profilePicture={profPic5}>
                    Lorem ipsum dolor sit amet consectetur. Consequat sodales sed .
                </ReviewCard>
            </div>
        </div>
    </div>
);

export default Reviews;
