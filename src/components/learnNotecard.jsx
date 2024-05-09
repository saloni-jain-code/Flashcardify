import React from "react";

const LearnNotecard = (props) => {
    const [isFlipped, setIsFlipped] = useState(false);

    return (
    <div className="border-2 mx-2 px-5 py-2 w-full my-10 bg-blue-100">
            {isFlipped ? (
                <div>
                    <h1 className = 'text-blue-600  flex justify-center items-center py-10 text-xl'>{props.back}</h1>
                </div>
            ) : (
                <div>
                    <h1 className = 'text-blue-600 flex justify-center items-center py-10 text-xl font-bold'>{props.front}</h1>
                </div>
            )}
            <button>
                <h1 className = 'bg-blue-400 text-white justify-center items-center py-2 px-2 rounded-2xl text-xl font-bold'>Flip</h1>
            </button>
    </div>
    );
};

export default LearnNotecard;