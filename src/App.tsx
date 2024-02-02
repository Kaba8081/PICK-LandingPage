import React from 'react'

import {
  Navbar, 
  Hero, 
  Stats, 
  About, 
  Reviews, 
  Offert,
  FAQ,
  Footer
} from './components';
import { 
  separator1, 
  separator2, 
  separator3, 
  separator4, 
  separator5, 
  separator6 
} from './assets';

const App = () => (
  <div className='bg-background w-full overflow-hidden'>
    <Navbar />
    <main>
      <div className='w-[105%] h-28 align-left'>
        <img src={separator1} alt='Separator' className='w-full h-full ml-[-10px] mt-[-1px] object-cover' />
      </div>

      <Hero />

      <div className="w-[105%] h-28 align-left">
            <img src={separator2} alt='Separator' className='w-full h-full ml-[-10px] mb-[-1px] object-cover' />
      </div>
      <Stats />
      <div className="w-[110%] h-16 align-left">
            <img src={separator3} alt='Separator' className='w-full h-full ml-[-10px] mt-[-1px] object-cover' />
        </div>

      <About />

      <div className="w-[105%] h-16 align-left">
            <img src={separator4} alt='Separator' className='w-full h-full ml-[-10px] mb-[-1px] object-cover'></img>
      </div>

      <Reviews />

      <div className="w-[105%] h-16 align-left">
            <img src={separator5} alt='Separator' className='w-full h-full ml-[-10px] mt-[-1px] object-cover'></img>
      </div>

      <Offert/>
      <FAQ />
    </main>

    <div className="w-[106%] h-16">
        <img src={separator6} alt='Separator' className='w-full h-full ml-[-10px] mb-[-1px] object-cover' />
    </div>
    <Footer />
  </div>
);

export default App;