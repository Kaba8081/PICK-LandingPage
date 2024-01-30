import React from 'react'

import { Navbar, Hero, Stats, About, Reviews } from './components';
import { separator1 } from './assets';

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
    </main>
  </div>
);

export default App