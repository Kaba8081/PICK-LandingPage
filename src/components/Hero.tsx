import React from 'react';

import {styles} from '../style';
import { heroBaner } from '../assets';

import Button from './Button';

const Hero = () => (
    <div className='w-full flex flex-row self-stretch items-center justify-center px-[11.25%]'>
        <div className='flex flex-col justify-between gap-y-[64px] py-[25px] 2xl:gap-y-[126px] 2xl:py-[50px] w-[68%]'>
            <h1 className={`${styles.BoldHeader1} shrink-0`}>
                Wirtualny asystent, <br /><span className='text-[#36A877]'>realne</span> rezultaty
            </h1>
            <div className='flex justify-center items-center gap-x-[32px]'>
                <Button variant='secondary'>
                    Jak to dziala?
                </Button>
                <Button variant='primary'>
                    Zapisz się!
                </Button>
            </div>
        </div>
        <div className='flex w-[32%]'>
            <img className="flex flex-auto object-fill" src={ heroBaner } alt='HeroBanner' />
        </div>    
    </div>
);

export default Hero;