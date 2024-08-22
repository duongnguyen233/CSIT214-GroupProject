import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styles from './SelectSeat.module.css';

const SelectSeat = () => {
  const { state } = useLocation();
  const { flight } = state;
  const navigate = useNavigate();

  // Example seat layout (rows x columns)
  const rows = 10;
  const columns = 6;

  // Manage selected seat
  const [selectedSeat, setSelectedSeat] = useState(null);

  const handleSeatSelect = (row, col) => {
    setSelectedSeat({ row, col });
  };

  const handleConfirm = () => {
    if (selectedSeat) {
      navigate('/ticket-details', { state: { flight, seat: selectedSeat } });
    } else {
      alert('Please select a seat.');
    }
  };

  return (
    <div className={styles.section}>
      <div className={styles.sectionCenter}>
        <h1>Select Your Seat</h1>
        <div className={styles.plane}>
          {Array.from({ length: rows }).map((_, rowIndex) => (
            <div key={rowIndex} className={styles.row}>
              {Array.from({ length: columns }).map((_, colIndex) => (
                <React.Fragment key={colIndex}>
                  {colIndex === 3 && <div className={styles.space} />}
                  <button
                    className={`${styles.seat} ${
                      selectedSeat?.row === rowIndex && selectedSeat?.col === colIndex ? styles.selected : ''
                    }`}
                    onClick={() => handleSeatSelect(rowIndex, colIndex)}
                  >
                    {rowIndex + 1}{String.fromCharCode(65 + colIndex)}
                  </button>
                </React.Fragment>
              ))}
            </div>
          ))}
        </div>
        <button className={styles.confirmBtn} onClick={handleConfirm}>
          Confirm Seat
        </button>
      </div>
    </div>
  );
};

export default SelectSeat;
