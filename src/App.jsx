import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BookingForm from './components/BookingForm/BookingForm';
import FlightList from './components/FlightList/FightList';
import TicketDetails from './components/TicketDetails/TicketDetails';
import SelectSeat from './components/SelectSeat/SelectSeat';
import Payment from './components/Payment/Payment';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BookingForm />} />
        <Route path="/flights" element={<FlightList />} />
        <Route path="/ticket-details" element={<TicketDetails />} />
        <Route path="/select-seat" element={<SelectSeat />} />
        <Route path="/payment" element={<Payment />} />
      </Routes>
    </Router>
  );
}

export default App;