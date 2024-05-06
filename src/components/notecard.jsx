import React, { useState } from "react";

// create horizontal line between front and back of notecard, need tobe visible
const Notecard = (props) => {
    const [editMode, setEditMode] = useState(false);
    const [updatedFront, setUpdatedFront] = useState(props.front);
    const [updatedBack, setUpdatedBack] = useState(props.back);

    const handleUpdate = () => {
        props.updateFlashcard(props.id, updatedFront, updatedBack);
        setEditMode(false);
        // update the flashcard
    };

    return (
        <div>
            {
                editMode ? (
                    <div className="grid grid-flow-col rounded-lg shadow-md content-center bg-blue-100 mx-20 my-2">
                        <textarea
                            type="text"
                            className="col-span-4 border-2 bg-blue-100 border-blue-600  text-xl ml-20 my-4 p-2"
                            value={updatedFront}
                            onChange={(e) => setUpdatedFront(e.target.value)}
                        />
                        <textarea
                            type="text"
                            className="col-span-4 border-2 bg-blue-100 border-blue-600 text-xl mx-4 my-4 p-2"
                            value={updatedBack}
                            onChange={(e) => setUpdatedBack(e.target.value)}
                        />
                        <button
                            className="col-span-1 bg-blue-600 text-white text-bold text-xl mx-auto my-auto p-2 rounded-xl"
                            onClick={handleUpdate}
                        >
                            Update Card
                        </button>
                    </div>
                ) : (
                    <div className="grid grid-flow-col rounded-lg shadow-md bg-blue-100 mx-20 my-2">
                        <h1 className = 'col-span-4 text-blue-400 border-r-2 border-blue-200 py-10 text-xl font-bold'>{props.front}</h1>
                        <h1 className = 'col-span-4 text-blue-400 py-10 text-xl mx-20'>{props.back}</h1>
                        <div>
                            <button 
                                onClick={()=> setEditMode(true)} 
                                className='py-1 my-8 px-3 bg-blue-400 text-xl text-white rounded-lg mx-2'>
                                Edit
                            </button>
                            <button 
                                onClick={() => props.deleteFlashcard(props.id)}
                                className='py-1 my-2 px-3 bg-blue-400 text-xl text-white rounded-lg mx-2'>
                                Delete
                            </button>
                        </div>
                    </div>
                )
                
            }
            
        </div>
    );
};

export default Notecard;
