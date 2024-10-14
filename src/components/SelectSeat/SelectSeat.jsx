// src/components/SelectSeat/SelectSeat.jsx
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

  // Seat prices (for example, front rows are more expensive)
  const seatPrices = Array.from({ length: rows }).map((_, rowIndex) =>
    Array.from({ length: columns }).map((_, colIndex) => rowIndex < 3 ? 15 : 0)
  );

  // Manage selected seat and total price
  const [selectedSeat, setSelectedSeat] = useState(null);
  const [seatPrice, setSeatPrice] = useState(null);
  const [totalPrice, setTotalPrice] = useState(flight.price); // Start with flight base price

  const handleSeatSelect = (row, col) => {
    const price = seatPrices[row][col];
    setSelectedSeat({ row, col });
    setSeatPrice(price);
    setTotalPrice(flight.price + price); // Update total price
  };

  const handleConfirm = () => {
    if (selectedSeat) {
      navigate('/ticket-details', { state: { flight, seat: selectedSeat, totalPrice } });
    } else {
      alert('Please select a seat.');
    }
  };

  return (
    <div className={styles.section}>
      <div className={styles.sectionCenter}>
        <h1>Select Your Seat</h1>
        {selectedSeat && (
          <div className={styles.selectedInfo}>
            <p>
              Selected Seat: Row {selectedSeat.row + 1} Seat {String.fromCharCode(65 + selectedSeat.col)} - Seat Price: ${seatPrice}
            </p>
            <p>Total Price: ${totalPrice}</p>
          </div>
        )}
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
