import React, {useState} from 'react';

import styles from '../style';
import { logoDefault } from '../assets';
import { navLinks } from '../constants';

const Navbar = () => {
    const [active, setActive] = useState("hero");
    return(
    <nav className='flex justify-between items-start bg-primary-dark px-[162px] py-[16px]'>
        <div className='flex max-h-[44px] gap-x-2'>
            <img src={logoDefault} alt='LogoIcon' />
            <p className={`${styles.SemiBoldHeader3} justify-items-center self-center text-text-light`}>WorkFlow<span className='text-accent font-bold'>Ease</span></p>
        </div>
        <ul className='flex items-start gap-x-8 justify-items-center self-center text-text-light'>
        {navLinks.map((nav, index) => (
            <li
                key={nav.id}
                className={`${styles.SemiBoldHeader4} transition duration-250 hover:opacity-75`}
                onClick={() => setActive(nav.id)}
            >
                <a href={`#${nav.id}`}>
                    {nav.label}
                </a>
            </li>
        ))}
        </ul>
    </nav>
)};

export default Navbar;