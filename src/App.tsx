import React from 'react'

import { Navbar, Hero } from './components';
import { separator1 } from './assets';

const App = () => (
  <div className='bg-background w-full overflow-hidden'>
    <Navbar />
    <main>
      <img src={separator1} alt='Separator' className='w-full' />
      <Hero />
    </main>
  </div>
);

export default App