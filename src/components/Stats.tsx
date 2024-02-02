import React from "react";
import { StatStyle } from "../style";
import Stat from "./StatElement";

const Stats = () => (
    <div className="w-full flex self-strech justify-between bg-primary-dark px-[11.25%]">
        <Stat title="Współpracujące firmy" value="24" className={`${StatStyle}`}/>
        <Stat title="Zadowolonych użytkowników" value="168k" variant="hollow" className={`${StatStyle}`}/>
        <Stat title="Rozszerzeń stworzonych przez społeczność" value="53k" className={`${StatStyle}`}/>
        <Stat title="Lat doświadczenia" value="7" variant="hollow" className={`${StatStyle}`}/>
    </div>
);

export default Stats;