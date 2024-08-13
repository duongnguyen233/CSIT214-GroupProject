import React, { useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';
import styles from "./BookingTable.module.css"; // Import the CSS module

const supabaseUrl = 'https://xyjzynotacmgksvotkad.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh5anp5bm90YWNtZ2tzdm90a2FkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjM1NDY5MjAsImV4cCI6MjAzOTEyMjkyMH0.jTlN03ZH3VA1SvjIrSABw6Licn90ZofF7UYQGFhAiPw';
const supabase = createClient(supabaseUrl, supabaseKey);

export const BookingTable = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const { data, error } = await supabase
          .from('Booking')
          .select('*');

        if (error) {
          console.error('Error fetching data:', error);
        } else {
          setBookings(data);
        }
      } catch (err) {
        console.error('Unexpected error:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchBookings();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (bookings.length === 0) {
    return <div>No bookings available.</div>;
  }

  return (
    <table className={styles.bookingTable}>
      <thead>
        <tr>
          <th>Destination From</th>
          <th>Destination To</th>
          <th>Journey Date</th>
          <th>Guests</th>
          <th>Classname</th>
        </tr>
      </thead>
      <tbody>
        {bookings.map((booking) => (
          <tr key={booking.id}>
            <td>{booking.destination1}</td>
            <td>{booking.destination2}</td>
            <td>{booking.date}</td>
            <td>{booking.guestNum}</td>
            <td>{booking.class}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
