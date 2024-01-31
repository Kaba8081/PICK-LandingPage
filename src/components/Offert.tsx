import OffertCard from './OffertCard';
import {styles} from '../style';

const Offert = () => (
    <div id="offert" className="w-full flex flex-col px-[11.25%] py-16 gap-y-16">
        <div className="flex flex-row justify-between"> 
            <h2 className={`${styles.BoldHeader2}`}>Nasza Oferta</h2>
            <p 
                className={`${styles.BoldBase} text-[#2A5388]`}
            >
                Wybierz pakiet, który najbardziej <br/>odpowiada twojemu zapotrzebowaniu
            </p>
        </div>
        <div className="flex flex-row justify-between items-center">
            <OffertCard title="Pakiet Podstawowy" price='19'>
                <ul className='list-disc px-4'>
                    <li>Lorem Ipsum</li>
                    <li>Repellat tempora est nulla quis</li>
                    <li>Dolorem rerum beatae aad</li>
                    <li>Autem qui et ut rerum sed enim delectus</li>
                </ul>
            </OffertCard>
            <OffertCard title="Pakiet Wspierającego" price='50' variant='primary'>
                <ul className='list-disc px-4'>
                    <li>Lorem Ipsum</li>
                    <li>Repellat tempora est nulla quis</li>
                    <li>Dolorem rerum beatae aad</li>
                    <li>Qui numquam beatae cum corporis</li>
                    <li>Autem qui et ut rerum sed enim delectus</li>
                    <li>dolor sit amet</li>
                    <li>Dolorem rerum beatae aad</li>
                </ul>
            </OffertCard>
            <OffertCard title="Pakiet Rozszerzony" price='30'>
                <ul className='list-disc px-4'>
                    <li>Lorem Ipsum</li>
                    <li>Repellat tempora est nulla quis</li>
                    <li>Dolorem rerum beatae aad</li>
                    <li>Autem qui et ut rerum sed enim delectus</li>
                </ul>
            </OffertCard>
        </div>
    </div>
);

export default Offert;