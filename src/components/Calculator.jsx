import React, { useState } from 'react';
import ReactTooltip from 'react-tooltip';
import Results from './results';
import Tippy from '@tippyjs/react';

const App = () => {
  const [rows, setRows] = useState(0);
  const [table, setTable] = useState('');
  const [cost, setCost] = useState(0);
  const [showResults, setShowResults] = useState(false);

  const enumValues = {
    contentType: 32,
    dataType: 32,
    listingType: 32,
    notificationType: 32,
    parameterType: 32,
    userContacts: 32,
  };

  const calculateCostPerRow = (table) => {
    switch (table) {
      case 'access_token':
        return 32 + 32 + 128 + 16 + 96 + 96 + 96;
      case 'advertisements':
        return 32 + 32 + 16 + 96 + 96 + 96 + 96;
      // Add more cases for each table using the provided calculations
      default:
        return 0;
    }
  };

  const calculateCost = () => {
    const costPerRow = calculateCostPerRow(table);
    setCost(costPerRow * rows);
  };

  function handleFormSubmit(event) {
    event.preventDefault();
    setShowResults(true);
  }

  const styles = {
    backgroundColor: 'white',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const tableStyles = {
    backgroundColor: 'darkblue',
    width: '80%',
    margin: '0 auto',
    borderCollapse: 'collapse',
    border: '1px solid white',
    borderRadius: '8px',
    overflow: 'hidden',
  };

  const thStyles = {
    backgroundColor: 'white',
    color: 'darkblue',
    padding: '1rem',
    textAlign: 'left',
    borderBottom: '1px solid white',
    textTransform: 'uppercase',
    fontSize: '0.8rem',
    fontWeight: 'bold',
  };

  const tdStyles = {
    color: 'white',
    // make text bold
    fontWeight: 'bold',
    padding: '1rem',
    borderBottom: '1px solid white',
    fontSize: '0.9rem',
  };

  const inputStyles = {
    backgroundColor: 'white',
    border: 'none',
    color: 'black',
    width: '100%',
    padding: '0.5rem',
    boxSizing: 'border-box',
    fontSize: '0.9rem',
  };

  const buttonStyles = {
    // button should be at bottom right of the form
    alignItems: 'center',
    backgroundColor: '#bf0202',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    padding: '1rem',
    fontSize: '0.9rem',
    fontWeight: 'bold',
    marginTop: '1rem',
    cursor: 'pointer',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.3)',
    transition: 'all 0.3s ease-in-out',
    width: '100px',
  };

  const resetButtonStyles = {
    ...buttonStyles,
    backgroundColor: '#02b087',
    color: 'white',
  };

  const headerStyle = {
    // bring the header closer to the form
    marginBottom: '-1rem',
    textAlign: 'center',
  };

  const subheaderStyle = {
    marginBottom: '3rem',
    fontSize: '1.5rem',
    fontWeight: 'normal',
    textAlign: 'center',
    color: '#555',
  };

  const tooltipStyle = {
    display: 'inline-block',
    marginLeft: '8px',
    padding: '2px 6px',
    borderRadius: '50%',
    backgroundColor: '#f0f0f0',
    color: '#333',
    fontSize: '12px',
    lineHeight: 1,
    textAlign: 'center',
    cursor: 'help',
  };

  return (
    <div>
      <h1 style={headerStyle}>Database Calculator</h1>
      <h2 style={subheaderStyle}>
        Determine how much the database would cost as per your needs
      </h2>
      <div style={styles}>
        <form onSubmit={(event) => handleFormSubmit(event)}>
          <table style={tableStyles}>
            <thead>
              <tr>
                <th style={thStyles}>Parameter</th>
                <th style={thStyles}>Value</th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  label: 'Number of companies',
                  defaultValue: 200,
                  tooltip: 'Number of companies.',
                },
                {
                  label: 'Number of users per company',
                  defaultValue: 1,
                  tooltip: 'Number of users per company.',
                },
                {
                  label: '% users active (used to calculate the scale)',
                  defaultValue: 80,
                  tooltip: '% of users active.',
                },
                {
                  label: 'Number of listings per user per year',
                  defaultValue: 10,
                  tooltip: 'Number of listings per user per year.',
                },
                {
                  label: 'Number of chats opened per listing',
                  defaultValue: 5,
                  tooltip: 'Number of chats opened per listing.',
                },
                {
                  label: 'Number of messages per chat',
                  defaultValue: 10,
                  tooltip: 'Number of messages per chat.',
                },
                {
                  label: 'Number of categories',
                  defaultValue: 25,
                  tooltip: 'Number of categories.',
                },
                {
                  label: 'Number of Params per category',
                  defaultValue: 10,
                  tooltip: 'Number of parameters per category.',
                },
              ].map(({ label, defaultValue, tooltip }) => (
                <tr key={label}>
                  <td style={tdStyles}>
                    {label}
                    <Tippy content={tooltip} theme="custom-white-box">
                      <span className="tooltip-icon" style={tooltipStyle}>
                        i
                      </span>
                    </Tippy>
                  </td>
                  <td style={tdStyles}>
                    <input
                      type="number"
                      defaultValue={defaultValue}
                      style={inputStyles}
                    />
                  </td>
                </tr>
              ))}
              {/* submit and reset buttons */}
              <tr>
                <td colSpan="2" style={{ textAlign: 'right' }}>
                  <button
                    type="submit"
                    onClick={handleFormSubmit}
                    style={buttonStyles}
                  >
                    Calculate
                  </button>
                  <button
                    type="reset"
                    style={{
                      ...resetButtonStyles,
                      marginLeft: '1rem',
                    }}
                  >
                    Reset
                  </button>
                </td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <td colSpan="2">{showResults ? <Results /> : null}</td>
              </tr>
            </tbody>
          </table>
        </form>
      </div>
    </div>
  );
};

export default App;
