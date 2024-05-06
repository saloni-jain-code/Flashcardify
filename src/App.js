import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Notecard from './components/notecard';
import CreateCardArea from './components/createCardArea';
import Navbar from './components/navbar';

const App = () => {
  const [flashcards, setFlashcards] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5001/flashcards')
      .then(res => {
        setFlashcards(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  });

  const updateFlashcard = (id, updatedFront, updatedBack) => {
    axios.patch(`http://localhost:5001/flashcards/${id}`, {
      front: updatedFront,
      back: updatedBack
    })
      .then(res => {
        console.log(res.data);
        const updatedFlashcards = flashcards.map(flashcard => 
          flashcard._id === id ? 
        { front: updatedFront, back: updatedBack } 
        : flashcard
      );
      setFlashcards(updatedFlashcards);
      })
      .catch(err => {
        console.log(err);
      });
  }

  const deleteFlashcard = (id) => {
    axios.delete(`http://localhost:5001/flashcards/${id}`)
      .then(res => {
        console.log(res.data);
        setFlashcards(flashcards.filter(flashcard => flashcard._id !== id));
      })
      .catch(err => {
        console.log(err);
      });
  }

  return (
    <div className='text-center'>
      <Navbar />
      <CreateCardArea 
        onAdd={(newFlashcard) => setFlashcards( (prevCards) => {
          return [...prevCards, newFlashcard]
        })}
      /> 
      <div>
        {
          flashcards && flashcards.map(flashcard => {
            console.log(flashcard.front);
            console.log(flashcard.back);
            return (
              <Notecard 
                key={flashcard._id}
                id={flashcard._id}
                front={flashcard.front}
                back={flashcard.back}
                updateFlashcard={updateFlashcard}
                deleteFlashcard={() => deleteFlashcard(flashcard._id)}
              />
            );
          })
        }
      </div>
    </div>
  );
}

export default App;