import React from "react";
import {styles} from '../style';
import { StatStyle } from "../style";
import Stat from "./StatElement";
import { separator2, separator3 } from '../assets';

const Stats = () => (
    <div className="w-full">
        <div className="separator1">
            <img src={separator2} alt='Separator' className='w-full' />
        </div>
        <div className="flex self-strech justify-between bg-primary-dark px-[11.25%]">
            <Stat title="Współpracujące firmy" value="24" className={`${StatStyle}`}/>
            <Stat title="Zadowolonych użytkowników" value="168k" variant="hollow" className={`${StatStyle}`}/>
            <Stat title="Rozszerzeń stworzonych przez społeczność" value="53k" className={`${StatStyle}`}/>
            <Stat title="Lat doświadczenia" value="7" variant="hollow" className={`${StatStyle}`}/>
        </div>
        <div className="separator2">
            <img src={separator3} alt='Separator' className='w-full' />
        </div>
    </div>
);

export default Stats;