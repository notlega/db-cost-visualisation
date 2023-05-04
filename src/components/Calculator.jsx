import React, { useState } from 'react';
import ReactTooltip from 'react-tooltip';
import Results from './results';
import Tippy from '@tippyjs/react';


const App = () => {
  const [rows, setRows] = useState(0);
  const [table, setTable] = useState('');
  const [cost, setCost] = useState(0);

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
    backgroundColor: 'white',
    color: 'darkblue',
    border: 'none',
    borderRadius: '8px',
    padding: '1rem 2rem',
    fontSize: '0.9rem',
    fontWeight: 'bold',
    marginTop: '1rem',
    cursor: 'pointer',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.3)',
    transition: 'all 0.3s ease-in-out',
  };

  const headerStyle = {
    // bring the header closer to the form
    marginBottom: '-1rem',
    textAlign: 'center'
  }
  const subheaderStyle = {
    marginBottom: '-1rem',
    fontSize: '1.5rem',
    fontWeight: 'normal',
    textAlign: 'center',
    margin: '1rem auto',
    color: '#555'
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
      <h2 style={subheaderStyle}>Determine how much the database would cost as per your needs</h2>
      <div style={styles}>

        <form>
          <table style={tableStyles}>
            <thead>
              <tr>
                <th style={thStyles}>Parameter</th>
                <th style={thStyles}>Value</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={tdStyles}>
                  Number of companies (default 200)
                  <Tippy
                    content="Number of companies."
                    theme="custom-white-box"
                  >
                    <span className="tooltip-icon" style={tooltipStyle}>
                      i
                    </span>
                  </Tippy>
                </td>
                <td style={tdStyles}>
                  <input type="number" defaultValue={200} style={inputStyles} />
                </td>
              </tr>
              <tr>
                <td style={tdStyles} data-tip="Number of users per company.">Number of users per company (default 1)</td>
                <td style={tdStyles}><input type="number" defaultValue={1} style={inputStyles} /></td>
              </tr>
              <tr>
                <td style={tdStyles} data-tip="% of users active."> % users active (used to calculate the scale) (default 80%)</td>
                <td style={tdStyles}><input type="number" defaultValue={80} style={inputStyles} /></td>
              </tr>
              <tr>
                <td style={tdStyles} data-tip="Number of listings per user per year.">Number of listings per user per year (default 10)</td>
                <td style={tdStyles}><input type="number" defaultValue={10} style={inputStyles} /></td>
              </tr>
              <tr>
                <td style={tdStyles} data-tip="Number of chats opened per listing.">Number of chats opened per listing (default 5)</td>
                <td style={tdStyles}><input type="number" defaultValue={5} style={inputStyles} /></td>
              </tr>
              <tr>
                <td style={tdStyles} data-tip="Number of messages per chat.">Number of messages per chat (default 10)</td>
                <td style={tdStyles}><input type="number" defaultValue={10} style={inputStyles} /></td>
              </tr>
              <tr>
                <td style={tdStyles} data-tip="Number of categories.">Number of categories (default 25)</td>
                <td style={tdStyles}><input type="number" defaultValue={25} style={inputStyles} /></td>
              </tr>
              <tr>
                <td style={tdStyles} data-tip="Number of parameters per category.">Number of Params per category (default 10)</td>
                <td style={tdStyles}><input type="number" defaultValue={10} style={inputStyles} /></td>
              </tr>
            </tbody>
            {/* // submit and reset buttons */}
            <button type="submit">Submit</button>
            <button type="reset">Reset</button>


            <tr>

              <td>
                <Results />
              </td>
            </tr>

          </table>


        </form>

      </div>

    </div>


  );

};

export default App;
