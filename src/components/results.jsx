import React from 'react';

const Results = () => {
    const boxStyle = {
        backgroundColor: '#02b087',
        padding: '2rem',
        marginTop: '2rem',
        color: 'white',
        fontWeight: 'bold',
        borderRadius: '0.5rem',
        boxShadow: '0px 0px 10px 1px rgba(0,0,0,0.2)'
    };

    const textStyle = {
        fontSize: '1.2rem',
        marginBottom: '1rem'
    };

    return (
        <div style={boxStyle}>
            <p style={textStyle}>The results are in, based on your needs:</p>
            <p>Total cost: $1000</p>
        </div>
    );
};

export default Results;
