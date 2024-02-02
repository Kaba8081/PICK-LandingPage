import { logoMonochrome } from '../assets';
import { footerLinks } from '../constants';
import { styles } from '../style';
import * as Icon from 'react-bootstrap-icons';

const Footer = () => (
    <footer className="w-full flex px-[11.25%] pb-16 justify-between items-start gap-x-[10px] bg-primary-dark">
        <div className='flex flex-col justify-center items-start gap-y-1'>
            <div className='flex flex-row gap-x-2'>
                <img src={logoMonochrome} alt='LogoIcon'/>
                <p className={`${styles.SemiBoldHeader4} justify-items-center self-center text-text-light`}>WorkFlow<span className='text-accent font-bold'>Ease</span></p>
            </div>
            <p className={`${styles.BaseText} font-semibold text-text-light`}>
                <span className='text-accent pr-1'>@2024</span> 
                All rights reserved.
            </p>
        </div>
    {footerLinks.map(({title, links}) => (
        <div className='flex flex-col items-start gap-y-4'>
            <div className=''>
                <h3 className={`${styles.SemiBoldHeader3} text-text-light`}>{title}</h3>
            </div>
            <ul className='flex flex-col gap-y-3'>
                {links.map(({id, label}) => (
                    <li className=''>
                        <a 
                            className={`${styles.BaseText} text-text-light opacity-80 hover:opacity-100`}
                            href={`/${id}`}
                        >
                            {label}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    ))}
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