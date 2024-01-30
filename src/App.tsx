import React from 'react'

import { Navbar, Hero, Stats } from './components';
import { separator1 } from './assets';

const App = () => (
  <div className='bg-background w-full overflow-hidden'>
    <Navbar />
    <main>
      <div className='separator1'>
        <img src={separator1} alt='Separator' className='w-full' />
      </div>
      <Hero />
      <Stats />
    </main>
  </div>
);

export default App