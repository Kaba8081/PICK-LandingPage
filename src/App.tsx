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
import { separator1, separator2 } from './assets';

const App = () => (
  <div className='bg-background w-full overflow-hidden'>
    <Navbar />
    <main>
      <div className='separator1 flex'>
        <img src={separator1} alt='Separator' className='w-full mt-[-1px]' />
      </div>
      <Hero />
      <Stats />
      <About />
      <Reviews />
      <Offert/>
      <FAQ />
    </main>
    <div className="separator1">
            <img src={separator2} alt='Separator' className='w-full mb-[-1px]' />
    </div>
    <Footer />
  </div>
);

export default App;