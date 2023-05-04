import React from 'react';

const Results = () => {
    const boxStyle = {
        backgroundColor: 'green',
        padding: '1rem',
        marginTop: '2rem',
        color: 'white',
        fontWeight: 'bold',
        borderRadius: '0.5rem'
    };

    return (
        <div style={boxStyle}>
            <p>Your results:</p>
            <p>Total cost: $1000</p>
        </div>
    );
};

export default Results;
