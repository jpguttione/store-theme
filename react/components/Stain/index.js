import React, { Component } from 'react'

import styles from './Stain.css';

export default class Stain extends Component {
  render() {
    return (
      <div className={styles.stain}>
        <h2 className={styles.stain__title}>Inclusive aquelas manchas mais dificeis...</h2>
        <div className={styles.stain__grid}>
          <div className={styles.stain__image}>
            <img src="/arquivos/ManchasPlaceHolder.png" />
            <span className={styles.stain__text}>Canetinha</span>
          </div>
          <div className={styles.stain__image}>
            <img src="/arquivos/ManchasPlaceHolder.png" />
            <span className={styles.stain__text}>Canetinha</span>
          </div>
          <div className={styles.stain__image}>
            <img src="/arquivos/ManchasPlaceHolder.png" />
            <span className={styles.stain__text}>Canetinha</span>
          </div>
        </div>
        <button className={styles.stain__more}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M376 232H216V72c0-4.42-3.58-8-8-8h-32c-4.42 0-8 3.58-8 8v160H8c-4.42 0-8 3.58-8 8v32c0 4.42 3.58 8 8 8h160v160c0 4.42 3.58 8 8 8h32c4.42 0 8-3.58 8-8V280h160c4.42 0 8-3.58 8-8v-32c0-4.42-3.58-8-8-8z"/></svg>
          Saiba mais
        </button>
      </div>
    )
  }
}
