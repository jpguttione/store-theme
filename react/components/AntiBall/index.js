import React, { Component } from 'react'

import styles from './AntiBall.css'

class Anti extends Component {
  render() {
    return (
      <div className={styles.anti}>
        <h1 className={styles.anti__title}>Ciclo anti bolinhas</h1>
        <p className={styles.anti__description}>Ciclo com lavagem especial que previne a formação de bolinhas na roupa durante o processo de lavagem
 mantendo-as com aparência de novas por mais tempo.</p>
        <div className={styles.anti__grid}>
          <div className={styles.anti__image}>
            <img src="/arquivos/AntiBall.png" />
            <span className={styles.anti__text}>10 lavagens com ciclo anti bolinha</span>
          </div>
          <div className={styles.anti__image}>
            <img src="/arquivos/AntiBall.png" />
            <span className={styles.anti__text}>10 lavagens com ciclo comum</span>
          </div>
        </div>
      </div>
    )
  }
}

export default Anti