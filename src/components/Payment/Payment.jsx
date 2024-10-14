// src/components/Payment/Payment.jsx
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { supabase } from '../../utils/supabaseClient';
import styles from './Payment.module.css';

const Payment = () => {
  const location = useLocation();
  const navigate = useNavigate(); // Initialize useNavigate
  const { flight, seat, totalPrice } = location.state || {};

  // Check if flight, seat, and totalPrice are available
  if (!flight || !seat || !totalPrice) {
    return <div className={styles.error}>Error: Incomplete details</div>;
  }

  // Define seatInfo here so it's accessible in JSX
  const seatInfo = `Row ${seat.row + 1}, Seat ${String.fromCharCode(65 + seat.col)}`;

  const handleConfirmPayment = async () => {
    const { from, to, date, time } = flight;

    // Save to Supabase
    const { data, error } = await supabase
      .from('FlightBooking')
      .insert([
        {
          From: from,
          To: to,
          Date: date,
          Time: time,
          Seat: seatInfo,
          TotalPrice: totalPrice
        }
      ]);

    if (error) {
      console.error('Error saving data to Supabase:', error);
      alert('Failed to save data. Please try again.');
    } else {
      console.log('Data saved successfully:', data);
      alert('Payment confirmed! Your booking has been saved.');
      navigate('/'); // Navigate to the homepage after saving
    }
  };

  return (
    <div className={styles.section}>
      <div className={styles.sectionCenter}>
        <div className={styles.container}>
          <h1>Payment Details</h1>

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
                  <th>Seat</th>
                  <td>{seatInfo}</td> {/* Use the seatInfo variable here */}
                </tr>
                <tr>
                  <th>Total Price</th>
                  <td>${totalPrice}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className={styles.paymentSection}>
            <h2>Payment Information</h2>
            <p>Please enter your payment details below:</p>

            <div className={styles.paymentForm}>
              <label>
                Cardholder Name
                <input type="text" placeholder="Enter your name" />
              </label>

              <label>
                Card Number
                <input type="text" placeholder="XXXX XXXX XXXX XXXX" />
              </label>

              <div className={styles.cardDetails}>
                <label>
                  Expiry Date
                  <input type="text" placeholder="MM/YY" />
                </label>

                <label>
                  CVV
                  <input type="text" placeholder="XXX" />
                </label>
              </div>
            </div>

            <button className={styles.confirmBtn} onClick={handleConfirmPayment}>
              Confirm Payment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
