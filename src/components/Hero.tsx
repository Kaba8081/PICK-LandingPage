import React from 'react';

import styles from '../style';
import { heroBaner } from '../assets';

import Button from './Button';

const Hero = () => (
    <div className='w-full flex flex-row self-stretch items-center justify-center px-[162px]'>
        <div className='flex flex-col justify-between gap-y-[126px]'>
            <h1 className={`${styles.BoldHeader1} shrink-0`}>
                Wirtualny asystent, <br /><span className='text-[#36A877]'>realne</span> rezultaty
            </h1>
            <div className='flex justify-center items-center gap-x-[32px]'>
                <Button variant='secondary' size='medium'>
                    Jak to dziala?
                </Button>
                <Button variant='primary' size='medium'>
                    Zapisz się!
                </Button>
            </div>
        </div>
        <div className='flex max-w-[356px] max-h-[361px]'>
            <img src={ heroBaner } alt='HeroBanner' />
        </div>    
    </div>
);

export default Hero;