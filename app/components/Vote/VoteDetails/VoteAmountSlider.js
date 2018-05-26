import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './VoteAmountSlider.css';

import { Input, Progress } from 'semantic-ui-react';
import buttonStyles from '../../Button.css';

import Secondary from '../../Content/Secondary';
import Header from '../../Header';
import { MoreIcon, CalendarIcon, VoteIcon } from '../../Icons';

export default class VoteDetails extends Component {
  state = {
    current: 1,
  }

  handleChange = (e, { value }) => this.setState({ current: value });

  get sliderWidthCalc() {
    if (this.state.current == 0 || this.props.totalTP == 0) {
      console.log('test')
      return 0
    }
    console.log('redraw')
    return Math.round((this.state.current / this.props.totalTP) * 100);
  }

  render() {
    return (
      <div className={styles.container}>
        <div className={styles.amount}>{ parseInt(this.state.current).toLocaleString() } TP</div>
        <div className={styles.sliderContainer}>
          <Input
            className={ styles.slider }
            min={1}
            max={this.props.totalTP}
            onChange={this.handleChange}
            type="range"
            value={this.state.current}
          />
          <div className={styles.progress} style={{width: this.sliderWidthCalc + '%'}}></div>
          <div className={styles.sliderBG}></div>
        </div>
        <div className={styles.sliderRange}>
          <span>0 TP</span>
          <span>{ this.props.totalTP.toLocaleString() } TP</span>
        </div>
      </div>
    );
  }
}
