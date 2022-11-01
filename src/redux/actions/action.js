import * as backend from '../../smartContract/build/index.main.mjs';
import {
  SET_ACCOUNT,
  SET_BALANCE,
  SET_NETWORK,
  SET_CONTRACT,
  STORE_USER,
  SET_USER_BALANCE,
} from '../Types/types';
import { loadStdlib } from '@reach-sh/stdlib';
import axios from 'axios';
// const stdlib = loadStdlib()
const reach = loadStdlib('ALGO');
reach.setProviderByName('TestNet');

export const setAccount = acc => {
  return {
    type: SET_ACCOUNT,
    payload: acc,
  };
};

export const setBalance = bal => {
  return dispatch => {
    dispatch({
      type: SET_BALANCE,
      payload: bal,
    });
  };
};

export const setNetwork = net => {
  return dispatch => {
    dispatch({
      type: SET_NETWORK,
      payload: net,
    });
  };
};

export const setContract = ctc => {
  return {
    type: SET_CONTRACT,
    payload: ctc,
  };
};

export const disconnect = () => {
  return dispatch => {
    dispatch({ type: STORE_USER, payload: null });
  };
};

export const storeWallet = payload => {
  return async dispatch => {
    let user;
    if (typeof window.AlgoSigner !== 'undefined') {
      // connects to the browser AlgoSigner instance
      window.AlgoSigner.connect()
        // finds the TestNet accounts currently in AlgoSigner
        .then(() =>
          window.AlgoSigner.accounts({
            ledger: 'TestNet',
          }),
        )
        .then(accountData => {
          // the accountData object should contain the Algorand addresses from TestNet that AlgoSigner currently knows about
          console.log('ahajakl', accountData);
          user = accountData;
          localStorage.setItem('address', user);
          dispatch({ type: STORE_USER, payload: accountData });
        })
        .catch(e => {
          // handle errors and perform error cleanup here
          console.error(e);
        });
    } else {
      alert('Please install AlgoSigner');
    }
  };
};

export const handleImportAccount = mnemonic => {
  return async dispatch => {
    try {
      const acc = await reach.newAccountFromMnemonic(mnemonic.trim());
      console.log('acc', acc);

      // check balance of account before funding
      let balanceOfAcc = await reach.balanceOf(acc);
      console.log('Checking the balance of our imported account');
      console.log(reach.formatCurrency(balanceOfAcc, 6));
      const balance = reach.formatCurrency(balanceOfAcc, 6);
      if (balance < 4) {
        alert('You do not have enough balance to make use of this platform');
        dispatch(disconnect());
      }
      dispatch({ type: STORE_USER, payload: acc });
      dispatch({ type: SET_USER_BALANCE, payload: balance });
    } catch (err) {
      console.log(err);
      alert('Something went wrong. Please try again later');
    }
  };
};

export const connectToContract = payload => {
  return async () => {
    const { name, biddingFloor, deadline, nftId } = payload;

    const details = {
      name,
      biddingFloor,
      deadline,
      nftId,
    };
    console.log(details);

    const acc = JSON.parse(localStorage.getItem('acc'));

    //save nft details to db
    //get image url

    // const acc2= acc.current[0]['address']

    console.log(acc.current[0]['address']);

    const newacc = await reach.connectAccount({
      addr: acc.current[0]['address'],
    });
    const fmt = x => reach.formatCurrency(x, 4);
    const balance = fmt(await reach.balanceOf(newacc));
    console.log(balance);
    console.log(newacc);

    const available = await reach.balanceOf(newacc, 91354576);
    const nftBalance = reach.formatWithDecimals(available, 0);
    console.log(nftBalance);
    console.log(available);
    if (available >= 1) {
      //deploy contract if user wallet contains nft
      const ctc = newacc.contract(backend);

      axios.post('https://auction-list.herokuapp.com/auction/', {
        name,
        top_bid: biddingFloor,
        top_bidder: null,
        auction_info: 'info',
        floor_price: biddingFloor,
      });

      const runContract = await ctc.getInfo;
      console.log('info', runContract);

      // await ctc.getInfo().then(info => {
      //       console.log(`The contract is deployed as = ${JSON.stringify(info)}`);
      //       axios.post('https://auction-list.herokuapp.com/auction/',{
      //         name,
      //         "top_bid": biddingFloor,
      //         "top_bidder": null,
      //         "auction_info": info,
      //         "floor_price": biddingFloor
      //       })
      //     });

      const interact = {};

      interact.details = details;
    } else {
      alert('you do not have the nft you want to bid');
    }
  };
};

export const makeBid = payload => {
  return async () => {
    const { bid } = payload;

    const acc = JSON.parse(localStorage.getItem('acc'));

    //get bidders account

    const newacc = await reach.connectAccount({
      addr: acc.current[0]['address'],
    });

    const fmt = x => reach.formatCurrency(x, 4);

    const balance = fmt(await reach.balanceOf(newacc));

    if (balance >= bid) {
      const ctc = newacc.contract(backend);

      ctc.apis.Bidder.bid(bid);
    } else {
      alert('You do not have sufficient funds to bid for this Nft.');
    }
  };
};

export const getAuctions = () => {
  axios.get('https://auction-list.herokuapp.com/auction/').then(auctions => {
    console.log(auctions);
  });
};
