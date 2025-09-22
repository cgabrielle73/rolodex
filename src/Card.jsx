import React from 'react';

const Card = ({name, email}) => {
    return (
    <>
        <h3> {name} </h3>
        <p> {email} </p>
    </>
)}

export default Card;
