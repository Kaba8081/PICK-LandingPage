import {styles} from '../style';
import * as Icon from 'react-bootstrap-icons';

const FAQ = () => (
    <div id="faq" className="flex flex-col md:flex-row justify-between items-center px-[32px] md:px-[11.25%] py-16">
        <div className="flex flex-col md:w-[40%] gap-y-4 pb-6 md:pb-0">
            <h2 className={`${styles.BoldHeader2}`}>
                Najczęściej zadawane pytania
            </h2>
            <h3 className={`text-text ${styles.BoldBase} opacity-70`}>
                Jeśli masz więcej pytań 
                <br className='md:hidden'/>
                napisz do nas
                <a href="./contact/" className="text-secondary-light hover:text-secondary"> tutaj</a>!
            </h3>
        </div>
        <div className="flex flex-col gap-y-4 md:gap-y-8 md:w-[55%]">
            <div className='flex flex-row items-center gap-x-5'>
                <Icon.CheckLg color="cyan-500" size={64}/>
                <div className='flex flex-col items-start p-[25px] rounded-[25px] bg-secondary bg-opacity-20 gap-y-2'>
                    <h3 className={`${styles.SemiBoldHeader3}`}>Czy informacje są zweryfikowane?</h3>
                    <p className={`${styles.BaseText} opacity-70`}>
                    Lorem ipsum dolor sit amet consectetur. 
                    Lacus aliquam volutpat elit eu rutrum non pharetra imperdiet.
                    </p>
                </div> 
            </div>
            <div className='flex flex-row items-center gap-x-5'>
                <Icon.PeopleFill color="cyan-500" size={64}/>
                <div className='flex flex-col items-start p-[25px] rounded-[25px] bg-secondary bg-opacity-20 gap-y-2'>
                    <h3 className={`${styles.SemiBoldHeader3}`}>Gdzie znajdę rozszerzenia?</h3>
                    <p className={`${styles.BaseText} opacity-70`}>
                    Lorem ipsum dolor sit amet consectetur. 
                    Lacus aliquam volutpat elit eu rutrum non pharetra imperdiet.
                    </p>
                </div> 
            </div>
            <div className='flex flex-row items-center gap-x-5'>
                <Icon.ShieldLockFill color="cyan-500" size={64}/>
                <div className='flex flex-col items-start p-[25px] rounded-[25px] bg-secondary bg-opacity-20 gap-y-2'>
                    <h3 className={`${styles.SemiBoldHeader3}`}>Czy moje dane są bezpieczne?</h3>
                    <p className={`${styles.BaseText} opacity-70`}>
                    Lorem ipsum dolor sit amet consectetur. 
                    Lacus aliquam volutpat elit eu rutrum non pharetra imperdiet.
                    </p>
                </div> 
            </div>
        </div>
    </div>
);

export default FAQ;