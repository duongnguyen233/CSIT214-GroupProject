// src/components/TicketDetails/TicketDetails.jsx
import React from 'react';
import { useLocation } from 'react-router-dom';
import styles from './TicketDetails.module.css';

const TicketDetails = () => {
  const location = useLocation();
  const flight = location.state?.flight;

  if (!flight) {
    return <div>No flight selected</div>;
  }

  return (
    <div className={styles.section}>
    <div className={styles.sectionCenter}>
    <div className={styles.container}>
      <h1>Flight Details</h1>
      <div className={styles.flightInfo}>
        <h2>Flight Information</h2>
        <table className={styles.table}>
          <tbody>
            <tr>
              <th>From</th>
              <td>{flight.from}</td>
            </tr>
            <tr>
              <th>To</th>
              <td>{flight.to}</td>
            </tr>
            <tr>
              <th>Date</th>
              <td>{flight.date}</td>
            </tr>
            <tr>
              <th>Time</th>
              <td>{flight.time}</td>
            </tr>
            <tr>
              <th>Price</th>
              <td>{flight.price}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className={styles.services}>
        <h2>In-Flight Services</h2>
        <div className={styles.service}>
          <h3>Food</h3>
          <p>Select your meal preference.</p>
        </div>
        <div className={styles.service}>
          <h3>Drink</h3>
          <p>Choose your drink options.</p>
        </div>
        <div className={styles.service}>
          <h3>Extra Package</h3>
          <p>Additional packages for comfort and convenience.</p>
        </div>
      </div>
    </div>
    </div>
    </div>
  );
};

export default TicketDetails;
