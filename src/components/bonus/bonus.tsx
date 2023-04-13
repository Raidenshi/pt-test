import React from 'react';
import fire from '../../assets/fire.svg';
import button from '../../assets/button.svg';

import styles from './bonus.module.css';
import Loader from '../loader/loader';

export default function Bonus({
  data,
  error,
}: {
  data: BonusData;
  error: boolean;
}) {
  if (error) {
    return (
      <div className={styles.bonus}>
        <p>Произошла ошибка</p>
      </div>
    );
  }

  if (!data) {
    return (
      <div className={styles.bonus}>
        <Loader />
      </div>
    );
  }

  return (
    <div className={styles.bonus}>
      <p>{data.currentQuantity} бонусов</p>
      <div className={styles.burn}>
        <span>
          {new Date(data.dateBurning).toLocaleDateString('ru-Ru', {
            month: 'numeric',
            day: 'numeric',
          })}
          сгорит
        </span>
        <img src={fire} alt="" />
        <span>{data.forBurningQuantity} бонусов</span>
      </div>
      <button>
        <img src={button} alt="" />
      </button>
    </div>
  );
}
