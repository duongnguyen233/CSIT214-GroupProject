// src/components/TicketDetails/TicketDetails.jsx
import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styles from './TicketDetails.module.css';

const TicketDetails = () => {
  const location = useLocation();
  const navigate = useNavigate(); // Using useNavigate for navigation
  const flight = location.state?.flight;
  const seat = location.state?.seat;
  const initialPrice = location.state?.totalPrice || flight.price;

  const [foodOption, setFoodOption] = useState('None');
  const [drinkOption, setDrinkOption] = useState('None');
  const [packageOption, setPackageOption] = useState('None');
  const [totalPrice, setTotalPrice] = useState(initialPrice);

  const foodPrices = { 'Food 1': 15, 'Food 2': 20, 'None': 0 };
  const drinkPrices = { 'Drink 1': 5, 'Drink 2': 7, 'None': 0 };
  const packagePrices = { 'Package 1': 25, 'Package 2': 35, 'None': 0 };

  const calculateTotalPrice = () => {
    const newPrice =
      initialPrice +
      foodPrices[foodOption] +
      drinkPrices[drinkOption] +
      packagePrices[packageOption];

    setTotalPrice(newPrice);
  };

  useEffect(() => {
    calculateTotalPrice(); // Update total price whenever options change
  }, [foodOption, drinkOption, packageOption]);

  const handleConfirm = () => {
    // Navigate to PaymentPage with flight, seat, and total price data
    navigate('/payment', { state: { flight, seat, totalPrice } });
  };

  if (!flight || !seat) {
    return <div>No flight or seat selected</div>;
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
                  <th>Seat</th>
                  <td>Row {seat.row + 1}, Seat {String.fromCharCode(65 + seat.col)}</td>
                </tr>
                <tr>
                  <th>Price</th>
                  <td>${totalPrice}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className={styles.services}>
            <h2>In-Flight Services</h2>
            <div className={styles.service}>
              <h3>Food</h3>
              <select
                value={foodOption}
                onChange={(e) => setFoodOption(e.target.value)}
              >
                <option value="None">No Food</option>
                <option value="Food 1">Meal with rice (+$15)</option>
                <option value="Food 2">Meal with noodle (+$20)</option>
              </select>
            </div>

            <div className={styles.service}>
              <h3>Drink</h3>
              <select
                value={drinkOption}
                onChange={(e) => setDrinkOption(e.target.value)}
              >
                <option value="None">No Drink</option>
                <option value="Drink 1">Soft drink (+$5)</option>
                <option value="Drink 2">Soft drink + snack (+$7)</option>
              </select>
            </div>

            <div className={styles.service}>
              <h3>Extra Package</h3>
              <select
                value={packageOption}
                onChange={(e) => setPackageOption(e.target.value)}
              >
                <option value="None">No Package</option>
                <option value="Package 1">Extra 20kg (+$25)</option>
                <option value="Package 2">Extra 40kg (+$35)</option>
              </select>
            </div>
          </div>

          {/* Confirm Ticket Button */}
          <button className={styles.confirmBtn} onClick={handleConfirm}>
            Confirm Ticket
          </button>
        </div>
      </div>
    </div>
  );
};

export default TicketDetails;
