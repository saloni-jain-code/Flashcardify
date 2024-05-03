import React from 'react';
import Notecard from './components/notecard';

const App = () => {
  return (
    <div className='text-center'>
      <h1 className='bg-purple-400 text-white w-screen text-4xl font-medium py-4 mx-auto text-center'>
      ✨ Flashcardify ✨
      </h1>
      <form className='grid grid-flow-col rounded-lg shadow-md content-center'>
        <textarea type='text' className='col-span-4 border-2 border-gray-300 ml-20 my-4 p-2' placeholder='Enter a question' />
        <textarea type='text' className='col-span-4 border-2 border-gray-300 mx-4 my-4 p-2' placeholder='Enter an answer' />
        <button className='col-span-1 bg-purple-400 text-white text-bold text-xl w-1/3 my-4 mx-4 rounded-full'> + </button>
      </form>
      <div className='grid grid-cols-4 gap-4 py-2'>
        <Notecard front='What is the capital of France?' back='Paris' />
        <Notecard front='What is the capital of Italy?' back='Rome' />
      </div>
      
    </div>
  );
}

// give me tailwind css for the question textarea, answer textarea, nad button
// give me a form with a question textarea, answer textarea, and a button
// give me a div with a header
// give me a div with a form
export default App;