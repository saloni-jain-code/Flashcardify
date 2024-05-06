import React, {useState} from 'react';
import axios from 'axios';

const CreateCardArea = (props) => {
    const [front, setFront] = useState('');
    const [back, setBack] = useState('');

    const addFlashcard = (e) => {
        e.preventDefault();
        console.log(front, back)
        axios.post('http://localhost:5001/flashcards', {
          front: front,
          back: back
        })
          .then(res => {
            console.log(res.data);
            props.onAdd(res.data);
            setFront('');
            setBack('');
          })
          .catch(err => {
            console.log(err);
          });
      }

    
    return (
    <form 
        onSubmit={addFlashcard}
        className='grid grid-flow-col rounded-lg shadow-md content-center'>
        <textarea 
            value={front}
            onChange = {(e) => setFront(e.target.value)}
            type='text' 
            className='col-span-4 border-2 border-gray-300 ml-20 my-4 p-2' 
            placeholder='Front of Notecard' 
        />
        <textarea 
            value={back}
            onChange = {(e) => setBack(e.target.value)}
            type='text'
            className='col-span-4 border-2 border-gray-300 mx-4 my-4 p-2' 
            placeholder='Back of Notecard' 
        />
        <button 
            type='submit'
            className='col-span-1 bg-blue-600 text-white text-bold text-xl mx-auto my-auto p-2 rounded-xl'> 
            Add Card 
        </button>
    </form>
    );
}

export default CreateCardArea;