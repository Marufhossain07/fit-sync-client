import React from 'react';

const Button = ({text}) => {
    return (
        <button className='border px-4 py-3 rounded-lg hover:opacity-50 bg-black border-red-600 text-white text-lg font-medium'>
            {text}
        </button>
    );
};

export default Button;