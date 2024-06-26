import CallList from '@/components/CallList';
import React from 'react';

const Home = () => {
  return (
    <section className='flex size-full flex-col gap-10 text-white'>
      <h3 className='text-3xl font-bold'>Upcoming</h3>
      <CallList type='upcoming' />
    </section>
  );
};

export default Home;
