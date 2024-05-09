import React, {useState} from "react";
import axios from 'axios';

// create large flashcard with flip button
// next button
// should only have front showing 
// previous button

const Practice = (props) => {
    const [flashcardIndex, setFlashcardIndex] = useState(0);
    const [isFlipped, setIsFlipped] = useState(false);
    const [correct, setCorrect] = useState(0);
    const [incorrect, setIncorrect] = useState(0);
    const [score, setScore] = useState(correct / (props.flashcards.length) * 100);
    
    function flipCard() {
        setIsFlipped(!isFlipped);
    }

    function nextCard() {
        // go to the next 
        if (flashcardIndex < props.flashcards.length - 1) {
            setFlashcardIndex(flashcardIndex + 1);
        } else { // if we are at the end of the flashcards, go back to the beginning
            setFlashcardIndex(0);
        }
        setIsFlipped(false);
    }

    function previousCard(){
        // go to the previous
        if (flashcardIndex > 0) {
            setFlashcardIndex(flashcardIndex - 1);
        } else { // if we are at the beginning of the flashcards, go to the end
            setFlashcardIndex(props.flashcards.length - 1);
        }
        setIsFlipped(false);
    }

    function increaseCorrect() {
        setCorrect(correct + 1);
        setScore(correct / (props.flashcards.length) * 100);
    }

    function increaseIncorrect() {
        setIncorrect(incorrect + 1);
        setScore(correct / (props.flashcards.length) * 100);
    }
    // console.log(props.flashcards);
    // console.log(props.flashcards[flashcardIndex]);

    const currentFlashcard = props.flashcards[flashcardIndex];
    if (!currentFlashcard) {
        return (
        <div>
            <h1 className="text-4xl font-bold text-blue-600 py-3">Practice Mode</h1>
            <h1 className="text-4xl py-5">Add some flashcards to practice!</h1>
        </div>
        );
    }

    return (
        <div>
            <h1 className="text-4xl font-bold text-blue-600 py-3">Practice Mode</h1>
            <h1 className="text-2xl font-bold text-black-600 py-3">{flashcardIndex+1} / {props.flashcards.length}</h1>
            <div className="grid grid-cols-2">
                <h1 className="text-2xl font-bold text-green-600 py-3">Correct: {correct}</h1>
                <h1 className="text-2xl font-bold text-red-600 py-3">Incorrect: {incorrect}</h1>
            </div>
            <div className="rounded-lg shadow-md bg-blue-100 mx-40 my-2 py-40">
                <h1 className = 'text-blue-600 border-r-2 border-blue-200 text-2xl'>
                    {isFlipped ? props.flashcards[flashcardIndex].back : props.flashcards[flashcardIndex].front}
                </h1>
            </div>
            <button 
                onClick={flipCard}
                className='py-1 my-8 px-3 bg-blue-400 text-xl text-white rounded-lg mx-2'>
                Flip
            </button>
            <button 
                onClick={nextCard}
                className='py-1 my-2 px-3 bg-blue-400 text-xl text-white rounded-lg mx-2'>
                Next
            </button>
            <button 
                onClick={previousCard}
                className='py-1 my-2 px-3 bg-blue-400 text-xl text-white rounded-lg mx-2'>
                Previous
            </button>
            <button 
                onClick={increaseCorrect}
                className='py-1 my-2 px-3 bg-green-600 text-xl text-white rounded-lg mx-2'>
                Correct
            </button>
            <button 
                onClick={increaseIncorrect}
                className='py-1 my-2 px-3 bg-red-600 text-xl text-white rounded-lg mx-2'>
                Wrong
            </button>
        </div>
    );
}

export default Practice;