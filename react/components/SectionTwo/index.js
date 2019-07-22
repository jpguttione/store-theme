import React, { Component } from 'react'

import Fab from '../Fab';
import Stain from '../Stain';
import Anti from '../AntiBall';

import styles from './SectionTwo.css';

export default class SectionTwo extends Component {
  render() {
    return (
      <>
        <div className={styles.sectionTwo}>
          <div className={styles.sectionTwo__infos}>
            <h1 className={styles.sectionTwo__title}>Ciclo</h1>
            <h1 className={`${styles.sectionTwo__title} ${styles.sectionTwo__title}--border `}>Tira Manchas</h1>
            <p className={styles.sectionTwo__text}>
              Ciclo-Tira Manchas alterna as condições ideais de temperatura e agitação para máxima performance de lavagem, removendo mais de 40 tipos de manchas sem danificar os tecidos.
            </p>
            <svg className={styles.sectionTwo__arrowDown} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M443.5 248.5l-7.1-7.1c-4.7-4.7-12.3-4.7-17 0L241 419.9V44c0-6.6-5.4-12-12-12h-10c-6.6 0-12 5.4-12 12v375.9L28.5 241.4c-4.7-4.7-12.3-4.7-17 0l-7.1 7.1c-4.7 4.7-4.7 12.3 0 17l211 211.1c4.7 4.7 12.3 4.7 17 0l211-211.1c4.8-4.8 4.8-12.3.1-17z"/></svg>
          </div>
          <Fab text="Água quente" axisX="11%" axisY="35%" />

        </div>
        <Stain/>
        <Anti/>
      </>
    )
  }
}
