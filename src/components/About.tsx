import {about1, about2, about3} from "../assets";
import { styles } from "../style";

const About = () => (
    <div id="functions" className="w-full flex flex-col self-stretch flex-start gap-y-12 justify-center py-16 px-[32px] md:px-[11.25%]">
        <div className="flex sm:px-24 justify-between items-start">
            <div className="flex flex-col items-start gap-y-8 sm:w-[60%]">
                <div>
                    <h2 className={`${styles.BoldHeader3}`}>Lorem ipsum dolor sit amet</h2>
                    <hr className="border-secondary border-t-4 border-solid border-r-2 w-full"/>
                </div>
                <p className={`${styles.BaseText}`}>Lorem ipsum dolor sit amet consectetur sagittis quis non justo turpis. Dignissim aliquet  dui sapien facilisis enim massa.  Ultricies sagittis quis non ultricies justo turpis.</p>
            </div> 
            <div className="hidden sm:flex flex-col items-center w-[39%]">
                <img src={about1} alt="Smartphone" className="object-fill max-h-[256px] shrink-0"></img>
            </div>
        </div>
        <div className="flex sm:px-24 justify-between items-start">
            <div className="hidden sm:flex flex-col items-center w-[39%]">
                <img src={about2} alt="Smartphone" className="object-fill max-h-[256px] shrink-0"></img>
            </div>
            <div className="flex flex-col items-start gap-y-8 sm:w-[60%]">
                <div>
                    <h2 className={`${styles.BoldHeader3}`}>Arcu cursus et  pellentesque.</h2>
                    <hr className="border-secondary border-t-4 border-solid border-r-2 w-full"/>
                </div>
                <p className={`${styles.BaseText}`}>Lorem ipsum dolor sit amet consectetur sagittis quis non justo turpis. Dignissim aliquet  </p>
            </div> 
        </div>
        <div className="flex sm:px-24 justify-between items-start">
            <div className="flex flex-col items-start gap-y-8 sm:w-[60%]">
                <div>
                    <h2 className={`${styles.BoldHeader3}`}>Eget amet praesent aenean</h2>
                    <hr className="border-secondary border-t-4 border-solid border-r-2 w-full"/>
                </div>
                <p className={`${styles.BaseText}`}>Dignissim aliquet  dui sapien facilisis enim massa.  Ultricies sagittis quis non ultricies justo turpis.</p>
            </div> 
            <div className="hidden sm:flex flex-col items-center w-[39%]">
                <img src={about3} alt="Smartphone" className="object-cover max-h-[256px] shrink-0"></img>
            </div>
        </div>
    </div>
);

export default About;