import React from 'react';
import fire from '../../assets/fire.svg';
import button from '../../assets/button.svg';

import styles from './bonus.module.css';

export default function Bonus() {
  return (
    <div className={styles.bonus}>
      <p>300 бонусов</p>
      <div className={styles.burn}>
        <span>29.03 сгорит</span>
        <img src={fire} alt="" />
        <span>250 бонусов</span>
      </div>
      <button>
        <img src={button} alt="" />
      </button>
    </div>
  );
}
