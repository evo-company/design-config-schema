import React from 'react';


const ErrorListTemplate = ({ errors }) => (
    <ol>
        {errors.map((error, i) => (
            <li className='text-danger' key={i}>{error.stack}</li>
        ))}
    </ol>
);


export { ErrorListTemplate };
