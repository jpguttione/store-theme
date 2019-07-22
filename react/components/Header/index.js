import React, { Component } from 'react'

import styles from './Header.css';

export default class Header extends Component {

  render() {

    return (
      <div id="header" className={styles.header}>
        <div className={styles.header__wrapper}>
          <img src="/arquivos/BrastempLogo.png"/>
          <div className={styles.header__actions}>
            <span className={styles.header__anchor}>Design Inovador</span>
            <span className={styles.header__anchor}>Ciclo Tira-Manchas</span>
            <span className={styles.header__anchor}>Ciclo Antibolinhas</span>
            <span className={styles.header__anchor}>Ciclo Edredom</span>
            <span className={styles.header__anchor}>Capacidade</span>
            <span className={styles.header__anchor}>Modelos</span>
          </div>
          <div className={styles.header__close}>
            <i className="fal fa-times"></i>
            Fechar
          </div>
        </div>
      </div>
    )
  }
}
