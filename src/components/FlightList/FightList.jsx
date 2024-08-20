// src/components/FlightList/FlightList.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './FlightList.module.css';

const FlightList = () => {
  const navigate = useNavigate();

  // Sample flight data
  const flights = [
    { id: 1, from: 'City A', to: 'City B', date: '2024-08-25', time: '08:00 AM', price: '$250' },
    { id: 2, from: 'City C', to: 'City D', date: '2024-08-26', time: '02:00 PM', price: '$300' },
    // Add more flights as needed
  ];

  const handleSelect = (flight) => {
    navigate('/ticket-details', { state: { flight } });
  };

  return (
    <div id="flights" className={styles.section}>
      <div className={styles.sectionCenter}>
        <div className={styles.container}>
          <h1>Available Flights</h1>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>From</th>
                <th>To</th>
                <th>Date</th>
                <th>Time</th>
                <th>Price</th>
                <th>Select</th>
              </tr>
            </thead>
            <tbody>
              {flights.map((flight) => (
                <tr key={flight.id}>
                  <td>{flight.from}</td>
                  <td>{flight.to}</td>
                  <td>{flight.date}</td>
                  <td>{flight.time}</td>
                  <td>{flight.price}</td>
                  <td>
                    <button className={styles.selectBtn} onClick={() => handleSelect(flight)}>
                      Select
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default FlightList;
