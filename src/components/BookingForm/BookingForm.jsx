import React from 'react';
import styles from './BookingForm.module.css';

export const BookingForm = () => {
  return (
    <div id="booking" className={styles.section}>
      <div className={styles.sectionCenter}>
        <div className={styles.container}>
          <div className={styles.row}>
            <div className={styles.colMd4}>
              <div className={styles.bookingCta}>
                <h1>Book your flight today</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate laboriosam numquam at</p>
              </div>
            </div>
            <div className={`${styles.colMd7} ${styles.colMdOffset1}`}>
              <div className={styles.bookingForm}>
                <form>
                  <div className={styles.formGroup}>
                    <div className={styles.formCheckbox}>
                      <label htmlFor="roundtrip">
                        <input type="radio" id="roundtrip" name="flight-type" />
                        <span></span>Roundtrip
                      </label>
                      <label htmlFor="one-way">
                        <input type="radio" id="one-way" name="flight-type" />
                        <span></span>One way
                      </label>
                      <label htmlFor="multi-city">
                        <input type="radio" id="multi-city" name="flight-type" />
                        <span></span>Multi-City
                      </label>
                    </div>
                  </div>
                  <div className={styles.row}>
                    <div className={styles.colMd6}>
                      <div className={styles.formGroup}>
                        <span className={styles.formLabel}>Flying from</span>
                        <input className={styles.formControl} type="text" placeholder="City or airport" />
                      </div>
                    </div>
                    <div className={styles.colMd6}>
                      <div className={styles.formGroup}>
                        <span className={styles.formLabel}>Flying to</span>
                        <input className={styles.formControl} type="text" placeholder="City or airport" />
                      </div>
                    </div>
                  </div>
                  <div className={styles.row}>
                    <div className={styles.colMd6}>
                      <div className={styles.formGroup}>
                        <span className={styles.formLabel}>Departing</span>
                        <input className={styles.formControl} type="date" required />
                      </div>
                    </div>
                    <div className={styles.colMd6}>
                      <div className={styles.formGroup}>
                        <span className={styles.formLabel}>Returning</span>
                        <input className={styles.formControl} type="date" required />
                      </div>
                    </div>
                  </div>
                  <div className={styles.row}>
                    <div className={styles.colMd4}>
                      <div className={styles.formGroup}>
                        <span className={styles.formLabel}>Adults (18+)</span>
                        <select className={styles.formControl}>
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                        </select>
                        <span className={styles.selectArrow}></span>
                      </div>
                    </div>
                    <div className={styles.colMd4}>
                      <div className={styles.formGroup}>
                        <span className={styles.formLabel}>Children (0-17)</span>
                        <select className={styles.formControl}>
                          <option>0</option>
                          <option>1</option>
                          <option>2</option>
                        </select>
                        <span className={styles.selectArrow}></span>
                      </div>
                    </div>
                    <div className={styles.colMd4}>
                      <div className={styles.formGroup}>
                        <span className={styles.formLabel}>Travel class</span>
                        <select className={styles.formControl}>
                          <option>Economy class</option>
                          <option>Business class</option>
                          <option>First class</option>
                        </select>
                        <span className={styles.selectArrow}></span>
                      </div>
                    </div>
                  </div>
                  <div className={styles.formBtn}>
                    <button className={styles.submitBtn}>Show flights</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
