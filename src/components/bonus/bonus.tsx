import React from 'react';
import fire from '../../assets/fire.svg';
import button from '../../assets/button.svg';

import styles from './bonus.module.css';
import Loader from '../loader/loader';

export default function Bonus({ data }: { data: BonusData }) {
  return (
    <div className={styles.bonus}>
      {data ? (
        <>
          <p>{data.currentQuantity} бонусов</p>
          <div className={styles.burn}>
            <span>
              {new Date(data.dateBurning).toLocaleDateString('ru-Ru', {
                month: 'numeric',
                day: 'numeric',
              })}{' '}
              сгорит
            </span>
            <img src={fire} alt="" />
            <span>{data.forBurningQuantity} бонусов</span>
          </div>
          <button>
            <img src={button} alt="" />
          </button>
        </>
      ) : (
        <Loader />
      )}
    </div>
  );
}
