import { separator2, } from '../assets';
import { logoMonochrome } from '../assets';
import { footerLinks } from '../constants';
import { styles } from '../style';
import * as Icon from 'react-bootstrap-icons';

const Footer = () => (
    <footer className="w-full flex px-[11.25%] pb-16 justify-between items-start gap-x-[10px] bg-primary-dark">
        <div className='flex flex-col justify-center items-start gap-y-1'>
            <div className='flex flex-row'>
                <img src={logoMonochrome} alt='LogoIcon' />
                <p className={`${styles.SemiBoldHeader3} pl-1 justify-items-center self-center text-text-light`}>WorkFlow<span className='text-accent font-bold'>Ease</span></p>
            </div>
            <p className={`${styles.BaseText} font-semibold text-text-light`}>
                <span className='text-accent pr-1'>@2023</span> 
                All rights reserved.
            </p>
        </div>

        <div className='flex flex-col justify-center items-start gap-y-1'>

        </div>
        <div className='flex flex-col justify-center items-center gap-y-4 text-text-light'>
            <h3 className={`${styles.SemiBoldHeader3}`}>Znajdź nas również na:</h3>
            <div className='flex flex-row gap-x-3'>
                <Icon.Twitter color="white" size={32}/>
                <Icon.Youtube color="white" size={32}/>
                <Icon.Google color="white" size={32}/>
            </div>
        </div>
    </footer>
);

export default Footer;