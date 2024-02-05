import React, {useState} from 'react';
import {styles} from '../style';
import {close, menu} from '../assets';
import { logoDefault } from '../assets';
import { navLinks } from '../constants';

const Navbar = () => {
    const [toggle, setToggle] = useState(false);
    return(
    <nav className='flex justify-between items-middle bg-primary-dark px-[32px] md:px-[11.25%] pt-14 py-[16px]'>
        <div className='flex max-h-[44px] gap-x-2'>
            <img src={logoDefault} alt='LogoIcon' className='width-[44px] height-[44px]'/>
            <p className={`${styles.SemiBoldHeader3} justify-items-center self-center text-text-light`}>WorkFlow<span className='text-accent font-bold'>Ease</span></p>
        </div>

        <ul className='sm:flex hidden items-start gap-x-8 justify-items-center self-center text-text-light'>
            {navLinks.map((nav, index) => (
                <li
                    key={nav.id}
                    className={`${styles.SemiBoldHeader4} transition duration-250 hover:opacity-75`}
                >
                    <a href={`#${nav.id}`}>
                        {nav.label}
                    </a>
                </li>
            ))}
        </ul>

        <div className='sm:hidden flex justify-end items-center align-middle'>
            <img 
            src= {toggle ? close : menu}
            alt = 'menuIcon'
            className='w-[28px] h-[28px] object-contain'
            onClick = {() => setToggle((prev) => !prev)}/>

            <div className={`${!toggle ? 'hidden' : 'flex'} p-4 absolute top-20 right-0 mx-4 my-4 min-w-[140px] sidebar bg-nav-gradient rounded-xl`}>
                <ul className='list-none flex flex-col flex-1 gap-y-2 justify-end items-start cursor-pointer'>
                    {navLinks.map((nav, index) => (
                        <li 
                        key={nav.id}
                        className={`${styles.BaseText} cursor-pointer text-text-light`}>
                            <a href={`#${nav.id}`}>{nav.label}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    </nav>
)};

export default Navbar;