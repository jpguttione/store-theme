import React, { Component } from 'react'
import Fab from '../Fab';

import styles from './SectionOne.css';

class SectionOne extends Component {
  
  render() {

    return (

      <div className={styles.sectionOne}>
        <img className={styles.sectionOne__Cover} src="/arquivos/Section_OneCover.png" />
        <div className={styles.sectionOne__infos}>
          <h1>Suas roupas nas mãos de quem entende!</h1>
          <h2>Explore a nova linha de lavadoras Brastemp.</h2>
          <button className={styles.sectionOne__play}>
            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="play" className="svg-inline--fa fa-play fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path fill="#F08B1D" d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"></path>
            </svg> 
            <span>Assista ao vídeo</span>
          </button>
        </div>
        <div className={styles.sectionOne__fabs}>
          <Fab 
            text="Painel Multifuncional" 
            axisY="50%"
            axisX="30%"
          />
        </div>
      </div>
    )
  }
}

export default SectionOne