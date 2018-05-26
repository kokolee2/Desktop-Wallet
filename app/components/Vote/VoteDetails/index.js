import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './VoteDetails.css';

import { Dropdown, Input, Form, Button } from 'semantic-ui-react';
import buttonStyles from '../../Button.css';

import Secondary from '../../Content/Secondary';
import Header from '../../Header';
import VoteAmountSlider from './VoteAmountSlider';
import { ArrowRightIcon } from '../../Icons';

export default class VoteDetails extends Component {
  state = {
    rep: {
      name: 'FlottPay'
    },
    selectedWallet: {
      tp: 0,
    },
    wallets: [
      { text: 'Personal Wallet', value: 'wallet-id-1', tp: 533682 },
      { text: 'Business Wallet', value: 'wallet-id-2', tp: 266434534 },
      { text: 'New Wallet', value: 'wallet-id-3', tp: 0 }
    ]
  }

  selectWallet = (e, { value }) => {
    let wallet = this.state.wallets.filter((wallet) => wallet.value == value);
    this.setState({ selectedWallet: wallet[0] });
  }

  render() {
    return (
      <Secondary className={styles.container}>
      <div className={styles.headerContainer}>
        <Header headerName="Votes" />
        <div className={styles.headerTP}>{ this.state.selectedWallet.tp.toLocaleString() }<span>TP</span></div>
        <div className={styles.headerText}>Earn More TronPower by freezing Tron</div>
      </div>
      <div className={styles.subContainer}>
        <div className={styles.votingFor}>YOUR ARE VOTING FOR : <span>{ this.state.rep.name }</span></div>
        <div className={styles.dropdown}>
          <ArrowRightIcon />
          <Dropdown onChange={this.selectWallet} placeholder='Choose Wallet' fluid selection options={this.state.wallets} />
        </div>
        <VoteAmountSlider totalTP={ this.state.selectedWallet.tp }/>
        <Form.Button className={`${styles.btn} ${buttonStyles.button} ${buttonStyles.black}`}>Submit Your Vote</Form.Button>
      </div>
      </Secondary>
    );
  }
}
