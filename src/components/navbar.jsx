import React from "react";

// navbar should have flashcardify on the left, and then "my study sets" and "study" on the right
const Navbar = (props) => {
    return (
        <div className="flex justify-between items-center bg-blue-600 p-5">
            <div>
                <h1 className = 'text-white text-2xl font-bold'>✨ Flashcardify ✨</h1>
            </div>
            <div>
                <button
                    onClick={() => props.setPracticeMode(false)}
                >
                    <h1 className = 'bg-blue-100 text-blue-600 justify-center items-center mx-4 py-2 px-2 rounded-2xl text-xl font-bold'>My Study Sets</h1>
                </button>
                <button
                    onClick={() => props.setPracticeMode(true)}
                >
                    <h1 className = 'bg-blue-100 text-blue-600 justify-center items-center py-2 px-2 rounded-2xl text-xl font-bold'>Practice</h1>
                </button>
            </div>
        </div>
    ); 
}

export default Navbar;