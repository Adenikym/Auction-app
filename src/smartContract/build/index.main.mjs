// Automatically generated with Reach 0.1.10 (84dc282c)
/* eslint-disable */
export const _version = '0.1.10';
export const _versionHash = '0.1.10 (84dc282c)';
export const _backendVersion = 15;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Bool;
  const ctc4 = stdlib.T_Tuple([ctc2, ctc2, ctc3]);
  const ctc5 = stdlib.T_Array(ctc4, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  
  return {
    infos: {
      },
    views: {
      1: [ctc0, ctc1, ctc2, ctc2, ctc5],
      5: [ctc0, ctc1, ctc2, ctc2, ctc0, ctc3, ctc2]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Tuple([]);
  return {
    mapDataTy: ctc0
    };
  };
export async function _Bidder_bid5(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Bidder_bid5 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Bidder_bid5 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Bool;
  const ctc4 = stdlib.T_Tuple([ctc2]);
  const ctc5 = stdlib.T_Tuple([ctc0, ctc2]);
  const ctc6 = stdlib.T_Null;
  
  
  const [v204, v206, v208, v234, v235, v236, v259] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'), [ctc0, ctc1, ctc2, ctc2, ctc0, ctc3, ctc2]);
  const v263 = stdlib.protect(ctc4, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:45:7:application call to [unknown function] (defined at: ./index.rsh:45:7:function exp)', 'at ./index.rsh:45:7:application call to [unknown function] (defined at: ./index.rsh:45:7:function exp)'],
    msg: 'in',
    who: 'Bidder_bid'
    });
  const v264 = v263[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v267 = stdlib.gt(v264, v234);
  stdlib.assert(v267, {
    at: './index.rsh:47:15:application',
    fs: ['at ./index.rsh:45:7:application call to [unknown function] (defined at: ./index.rsh:45:16:function exp)', 'at ./index.rsh:45:7:application call to [unknown function] (defined at: ./index.rsh:45:7:function exp)', 'at ./index.rsh:45:7:application call to [unknown function] (defined at: ./index.rsh:45:7:function exp)'],
    msg: 'bid is too low',
    who: 'Bidder_bid'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v204, v206, v208, v234, v235, v236, v259, v263],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc4],
    pay: [v264, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v271], secs: v273, time: v272, didSend: v97, from: v270 } = txn1;
      
      sim_r.txns.push({
        kind: 'api',
        who: "Bidder_bid"
        });
      const v275 = v271[stdlib.checkedBigNumberify('./index.rsh:44:9:spread', stdlib.UInt_max, '0')];
      sim_r.txns.push({
        amt: v275,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      if (v236) {
        const v294 = [v270, v275];
        const v295 = await txn1.getOutput('Bidder_bid', 'v294', ctc5, v294);
        
        const v489 = v275;
        const v490 = v270;
        const v491 = false;
        const v495 = stdlib.add(v273, v208);
        sim_r.isHalt = false;
        }
      else {
        sim_r.txns.push({
          amt: v234,
          kind: 'from',
          to: v235,
          tok: undefined /* Nothing */
          });
        const v284 = [v270, v275];
        const v285 = await txn1.getOutput('Bidder_bid', 'v284', ctc5, v284);
        
        const v496 = v275;
        const v497 = v270;
        const v498 = false;
        const v502 = stdlib.add(v273, v208);
        sim_r.isHalt = false;
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc1, ctc2, ctc2, ctc0, ctc3, ctc2, ctc4],
    waitIfNotPresent: false
    }));
  const {data: [v271], secs: v273, time: v272, didSend: v97, from: v270 } = txn1;
  undefined /* setApiDetails */;
  const v275 = v271[stdlib.checkedBigNumberify('./index.rsh:44:9:spread', stdlib.UInt_max, '0')];
  ;
  if (v236) {
    const v294 = [v270, v275];
    const v295 = await txn1.getOutput('Bidder_bid', 'v294', ctc5, v294);
    if (v97) {
      stdlib.protect(ctc6, await interact.out(v271, v295), {
        at: './index.rsh:44:10:application',
        fs: ['at ./index.rsh:44:10:application call to [unknown function] (defined at: ./index.rsh:44:10:function exp)', 'at ./index.rsh:55:22:application call to "setResponse" (defined at: ./index.rsh:51:7:function exp)', 'at ./index.rsh:51:7:application call to [unknown function] (defined at: ./index.rsh:51:7:function exp)'],
        msg: 'out',
        who: 'Bidder_bid'
        });
      }
    else {
      }
    
    const v489 = v275;
    const v490 = v270;
    const v491 = false;
    const v495 = stdlib.add(v273, v208);
    return;
    }
  else {
    ;
    const v284 = [v270, v275];
    const v285 = await txn1.getOutput('Bidder_bid', 'v284', ctc5, v284);
    if (v97) {
      stdlib.protect(ctc6, await interact.out(v271, v285), {
        at: './index.rsh:44:10:application',
        fs: ['at ./index.rsh:44:10:application call to [unknown function] (defined at: ./index.rsh:44:10:function exp)', 'at ./index.rsh:55:22:application call to "setResponse" (defined at: ./index.rsh:51:7:function exp)', 'at ./index.rsh:51:7:application call to [unknown function] (defined at: ./index.rsh:51:7:function exp)'],
        msg: 'out',
        who: 'Bidder_bid'
        });
      }
    else {
      }
    
    const v496 = v275;
    const v497 = v270;
    const v498 = false;
    const v502 = stdlib.add(v273, v208);
    return;
    }
  
  
  };
export async function Creator(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Creator expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Creator expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '32'));
  const ctc2 = stdlib.T_Token;
  const ctc3 = stdlib.T_Object({
    biddingFloor: ctc0,
    deadline: ctc0,
    name: ctc1,
    nftId: ctc2
    });
  const ctc4 = stdlib.T_Tuple([ctc0]);
  const ctc5 = stdlib.T_Address;
  const ctc6 = stdlib.T_Tuple([ctc5, ctc0]);
  const ctc7 = stdlib.T_Bool;
  const ctc8 = stdlib.T_Tuple([ctc0, ctc0, ctc7]);
  const ctc9 = stdlib.T_Array(ctc8, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  
  
  const v188 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), false];
  const v189 = [v188];
  const v193 = stdlib.protect(ctc3, interact.details, 'for Creator\'s interact field details');
  const v194 = v193.biddingFloor;
  const v195 = v193.deadline;
  const v196 = v193.name;
  const v197 = v193.nftId;
  
  const txn1 = await (ctc.sendrecv({
    args: [v196, v197, v194, v195],
    evt_cnt: 4,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:29:11:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc1, ctc2, ctc0, ctc0],
    pay: [stdlib.checkedBigNumberify('./index.rsh:29:11:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v205, v206, v207, v208], secs: v210, time: v209, didSend: v38, from: v204 } = txn1;
      
      const v211 = v189[stdlib.checkedBigNumberify('./index.rsh:29:11:dot', stdlib.UInt_max, '0')];
      const v213 = v211[stdlib.checkedBigNumberify('./index.rsh:29:11:dot', stdlib.UInt_max, '1')];
      const v214 = v211[stdlib.checkedBigNumberify('./index.rsh:29:11:dot', stdlib.UInt_max, '2')];
      const v215 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v213, v214];
      const v216 = stdlib.Array_set(v189, stdlib.checkedBigNumberify('./index.rsh:29:11:dot', stdlib.UInt_max, '0'), v215);
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v206
        });
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc1, ctc2, ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v205, v206, v207, v208], secs: v210, time: v209, didSend: v38, from: v204 } = txn1;
  const v211 = v189[stdlib.checkedBigNumberify('./index.rsh:29:11:dot', stdlib.UInt_max, '0')];
  const v213 = v211[stdlib.checkedBigNumberify('./index.rsh:29:11:dot', stdlib.UInt_max, '1')];
  const v214 = v211[stdlib.checkedBigNumberify('./index.rsh:29:11:dot', stdlib.UInt_max, '2')];
  const v215 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v213, v214];
  const v216 = stdlib.Array_set(v189, stdlib.checkedBigNumberify('./index.rsh:29:11:dot', stdlib.UInt_max, '0'), v215);
  ;
  ;
  const txn2 = await (ctc.sendrecv({
    args: [v204, v206, v207, v208, v216],
    evt_cnt: 0,
    funcNum: 1,
    lct: v209,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:37:11:dot', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:36:15:decimal', stdlib.UInt_max, '1'), v206]]],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v220, time: v219, didSend: v45, from: v218 } = txn2;
      
      ;
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('./index.rsh:36:15:decimal', stdlib.UInt_max, '1'),
        kind: 'to',
        tok: v206
        });
      const v234 = v207;
      const v235 = v218;
      const v236 = true;
      const v237 = true;
      const v238 = v219;
      const v241 = v220;
      
      if (await (async () => {
        
        return v237;})()) {
        const v259 = stdlib.add(v241, v208);
        sim_r.isHalt = false;
        }
      else {
        sim_r.txns.push({
          amt: stdlib.checkedBigNumberify('./index.rsh:36:15:decimal', stdlib.UInt_max, '1'),
          kind: 'from',
          to: v235,
          tok: v206
          });
        if (v236) {
          sim_r.txns.push({
            kind: 'halt',
            tok: v206
            })
          sim_r.txns.push({
            kind: 'halt',
            tok: undefined /* Nothing */
            })
          sim_r.isHalt = true;
          }
        else {
          sim_r.txns.push({
            amt: v234,
            kind: 'from',
            to: v204,
            tok: undefined /* Nothing */
            });
          sim_r.txns.push({
            kind: 'halt',
            tok: v206
            })
          sim_r.txns.push({
            kind: 'halt',
            tok: undefined /* Nothing */
            })
          sim_r.isHalt = true;
          }}
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc5, ctc2, ctc0, ctc0, ctc9],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v220, time: v219, didSend: v45, from: v218 } = txn2;
  ;
  const v221 = v216[stdlib.checkedBigNumberify('./index.rsh:37:11:dot', stdlib.UInt_max, '0')];
  const v222 = v221[stdlib.checkedBigNumberify('./index.rsh:37:11:dot', stdlib.UInt_max, '0')];
  const v223 = stdlib.add(v222, stdlib.checkedBigNumberify('./index.rsh:36:15:decimal', stdlib.UInt_max, '1'));
  const v226 = v221[stdlib.checkedBigNumberify('./index.rsh:37:11:dot', stdlib.UInt_max, '1')];
  const v227 = v221[stdlib.checkedBigNumberify('./index.rsh:37:11:dot', stdlib.UInt_max, '2')];
  const v228 = [v223, v226, v227];
  const v229 = stdlib.Array_set(v216, stdlib.checkedBigNumberify('./index.rsh:37:11:dot', stdlib.UInt_max, '0'), v228);
  ;
  const v230 = stdlib.addressEq(v204, v218);
  stdlib.assert(v230, {
    at: './index.rsh:37:11:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Creator'
    });
  const v231 = v229[stdlib.checkedBigNumberify('./index.rsh:38:16:application', stdlib.UInt_max, '0')];
  const v232 = v231[stdlib.checkedBigNumberify('./index.rsh:38:16:application', stdlib.UInt_max, '0')];
  const v233 = stdlib.eq(v232, stdlib.checkedBigNumberify('./index.rsh:36:15:decimal', stdlib.UInt_max, '1'));
  stdlib.assert(v233, {
    at: './index.rsh:38:8:application',
    fs: [],
    msg: 'balance of NFT is wrong',
    who: 'Creator'
    });
  let v234 = v207;
  let v235 = v218;
  let v236 = true;
  let v237 = true;
  let v238 = v219;
  let v241 = v220;
  
  while (await (async () => {
    
    return v237;})()) {
    const v259 = stdlib.add(v241, v208);
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 3,
      out_tys: [ctc4],
      timeoutAt: ['secs', v259],
      waitIfNotPresent: false
      }));
    if (txn3.didTimeout) {
      const txn4 = await (ctc.sendrecv({
        args: [v204, v206, v208, v234, v235, v236, v259],
        evt_cnt: 0,
        funcNum: 4,
        lct: v238,
        onlyIf: true,
        out_tys: [],
        pay: [stdlib.checkedBigNumberify('./index.rsh:63:16:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn4) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          
          const {data: [], secs: v306, time: v305, didSend: v134, from: v304 } = txn4;
          
          ;
          const cv234 = v234;
          const cv235 = v235;
          const cv236 = v236;
          const cv237 = false;
          const cv238 = v305;
          const cv241 = v306;
          
          await (async () => {
            const v234 = cv234;
            const v235 = cv235;
            const v236 = cv236;
            const v237 = cv237;
            const v238 = cv238;
            const v241 = cv241;
            
            if (await (async () => {
              
              return v237;})()) {
              const v259 = stdlib.add(v241, v208);
              sim_r.isHalt = false;
              }
            else {
              sim_r.txns.push({
                amt: stdlib.checkedBigNumberify('./index.rsh:36:15:decimal', stdlib.UInt_max, '1'),
                kind: 'from',
                to: v235,
                tok: v206
                });
              if (v236) {
                sim_r.txns.push({
                  kind: 'halt',
                  tok: v206
                  })
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined /* Nothing */
                  })
                sim_r.isHalt = true;
                }
              else {
                sim_r.txns.push({
                  amt: v234,
                  kind: 'from',
                  to: v204,
                  tok: undefined /* Nothing */
                  });
                sim_r.txns.push({
                  kind: 'halt',
                  tok: v206
                  })
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined /* Nothing */
                  })
                sim_r.isHalt = true;
                }}})();
          return sim_r;
          }),
        soloSend: true,
        timeoutAt: undefined /* mto */,
        tys: [ctc5, ctc2, ctc0, ctc0, ctc5, ctc7, ctc0],
        waitIfNotPresent: false
        }));
      const {data: [], secs: v306, time: v305, didSend: v134, from: v304 } = txn4;
      ;
      const v307 = stdlib.addressEq(v204, v304);
      stdlib.assert(v307, {
        at: './index.rsh:63:16:dot',
        fs: ['at ./index.rsh:62:42:application call to [unknown function] (defined at: ./index.rsh:62:42:function exp)'],
        msg: 'sender correct',
        who: 'Creator'
        });
      const cv234 = v234;
      const cv235 = v235;
      const cv236 = v236;
      const cv237 = false;
      const cv238 = v305;
      const cv241 = v306;
      
      v234 = cv234;
      v235 = cv235;
      v236 = cv236;
      v237 = cv237;
      v238 = cv238;
      v241 = cv241;
      
      continue;
      }
    else {
      const {data: [v271], secs: v273, time: v272, didSend: v97, from: v270 } = txn3;
      undefined /* setApiDetails */;
      const v275 = v271[stdlib.checkedBigNumberify('./index.rsh:44:9:spread', stdlib.UInt_max, '0')];
      ;
      if (v236) {
        const v294 = [v270, v275];
        await txn3.getOutput('Bidder_bid', 'v294', ctc6, v294);
        const cv234 = v275;
        const cv235 = v270;
        const cv236 = false;
        const cv237 = true;
        const cv238 = v272;
        const cv241 = v273;
        
        v234 = cv234;
        v235 = cv235;
        v236 = cv236;
        v237 = cv237;
        v238 = cv238;
        v241 = cv241;
        
        continue;}
      else {
        ;
        const v284 = [v270, v275];
        await txn3.getOutput('Bidder_bid', 'v284', ctc6, v284);
        const cv234 = v275;
        const cv235 = v270;
        const cv236 = false;
        const cv237 = true;
        const cv238 = v272;
        const cv241 = v273;
        
        v234 = cv234;
        v235 = cv235;
        v236 = cv236;
        v237 = cv237;
        v238 = cv238;
        v241 = cv241;
        
        continue;}}
    
    }
  ;
  if (v236) {
    return;
    }
  else {
    ;
    return;
    }
  
  
  
  };
export async function Bidder_bid(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Bidder_bid expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Bidder_bid expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  stdlib.assert(step == 5, 'API called in the wrong state. Currently in state: ' + step + ', expected:  [5]');
  if (step == 5) {return _Bidder_bid5(ctcTop, interact);}
  };
const _ALGO = {
  ABI: {
    impure: [`Bidder_bid(uint64)(address,uint64)`],
    pure: [],
    sigs: [`Bidder_bid(uint64)(address,uint64)`]
    },
  appApproval: `BiAKAAEEBSAoMAhZoI0GJgIBAAAiNQAxGEEDaylkSSJbNQEhB1s1AjYaABdJQQAUIjUEIzUGgaCbvIEBEkQ2GgFCAHI2GgIXNQQ2GgM2GgEXSYEDDEABH0kkDEAAVyQSRCU0ARJENARJIhJMNAISEUQoZEk1A1cAIDX/gASRJzTzsDIHNAMhCFsPRDT/MQASRDT/NAMhBFs0AyEFWzQDIQZbNANXOCA0A1dYARciMgYyB0IB20glNAESRDQESSISTDQCEhFEKGRJNQNJSVcAIDX/IQRbNf4hBVs1/Uk1BTX8gATXkLTdNPxQsDIHNAMhCFsMRDT8FzX7NPuIApI0A1dYARdBAC2ACAAAAAAAAAEmMQA0+xZQULAxADT7FlA1BzT/NP40/TT7MQAiIzIGMgdCAVyxIrIBNAMhBluyCCOyEDQDVzggsgezgAgAAAAAAAABHDEANPsWUFCwMQA0+xZQNQc0/zT+NP00+zEAIiMyBjIHQgEZSSMMQAB3IxJEIzQBEkQ0BEkiEkw0AhIRRChkSTUDSUlXACA1/yEEWzX+VzgRNf2ABJqLkXSwNP1XABE1/CM0/ogB7jT/MQASRDT8IlsjCBY0/FcICFA0/FcQAVBXABEiWyMSRDT/NP40AyEGWzQDIQVbMQAjIzIGMgdCAJxIIjQBEkQ0BEkiEkw0AhIRREk1BUlKVwAgNf8hBFs1/iEFWzX9IQZbNfyABPU1i7Q0/1A0/hZQNP0WUDT8FlCwIQmIAVeBEa9JNftXABE1+iEHrzT6VwgIUDT6VxABUDX5IQmIATaxIrIBIrISJLIQMgqyFDT+shGzMQA0/hZQNP0WUDT8FlA0+VAoSwFXAElnSCM1ATIGNQJCAMM1/zX+Nf01/DX7Nfo1+TX4Nfc0/UEANTT/NPkINfY09zT4FlA0+RZQNPoWUDT7UDT8FlEHCFA09hZQKEsBVwBhZ0glNQEyBjUCQgB3sSKyASOyEiSyEDT7shQ0+LIRszT8QQAasSKyASKyEiSyEDIJshUyCrIUNPiyEbNCACqxIrIBNPqyCCOyEDT3sgezsSKyASKyEiSyEDIJshUyCrIUNPiyEbNCAAAxGSUSRLEisgEisggjshAyCbIJMgqyB7NCAAUxGSISRCk0ARY0AhZQZzQGQQAKgAQVH3x1NAdQsDQASSMIMgQSRDEWEkQjQzEZIhJEQv/fIjUBIjUCQv/DNABJSiMINQA4BzIKEkQ4ECMSRDgIEkSJNABJSkkjCDUAOBQyChJEOBAkEkQ4EU8CEkQ4EhJEiQ==`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 1,
  stateSize: 97,
  unsupported: [],
  version: 10,
  warnings: []
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "bytes32",
                    "name": "elem0",
                    "type": "bytes32"
                  }
                ],
                "internalType": "struct T3",
                "name": "v205",
                "type": "tuple"
              },
              {
                "internalType": "address payable",
                "name": "v206",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v207",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v208",
                "type": "uint256"
              }
            ],
            "internalType": "struct T4",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T5",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "bytes32",
                    "name": "elem0",
                    "type": "bytes32"
                  }
                ],
                "internalType": "struct T3",
                "name": "v205",
                "type": "tuple"
              },
              {
                "internalType": "address payable",
                "name": "v206",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v207",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v208",
                "type": "uint256"
              }
            ],
            "internalType": "struct T4",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T5",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T10",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e1",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "uint256",
                    "name": "elem0",
                    "type": "uint256"
                  }
                ],
                "internalType": "struct T13",
                "name": "v271",
                "type": "tuple"
              }
            ],
            "internalType": "struct T14",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T15",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e3",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T10",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e4",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "address payable",
            "name": "elem0",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "elem1",
            "type": "uint256"
          }
        ],
        "indexed": false,
        "internalType": "struct T12",
        "name": "v0",
        "type": "tuple"
      }
    ],
    "name": "_reach_oe_v284",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "address payable",
            "name": "elem0",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "elem1",
            "type": "uint256"
          }
        ],
        "indexed": false,
        "internalType": "struct T12",
        "name": "v0",
        "type": "tuple"
      }
    ],
    "name": "_reach_oe_v294",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_a0",
        "type": "uint256"
      }
    ],
    "name": "Bidder_bid",
    "outputs": [
      {
        "components": [
          {
            "internalType": "address payable",
            "name": "elem0",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "elem1",
            "type": "uint256"
          }
        ],
        "internalType": "struct T12",
        "name": "",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCreationTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T10",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m1",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "uint256",
                    "name": "elem0",
                    "type": "uint256"
                  }
                ],
                "internalType": "struct T13",
                "name": "v271",
                "type": "tuple"
              }
            ],
            "internalType": "struct T14",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T15",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m3",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T10",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m4",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x608060405260405162001baa38038062001baa833981016040819052620000269162000488565b60008055436003556200003862000252565b6040805133815283516020808301919091528085015180515183850152908101516001600160a01b0316606080840191909152818401516080840152015160a082015290517f50c3e22045dded345906b9a2a5ac78ed9b955e5b8498551ee02621dc01b417bd9181900360c00190a180516000908190528151602090810182905282516040908101839052835182850180519190915281850180518590528151518401518151909401939093528051518201518351901515920191909152519051620001059290620001a5565b6060820152620001183415600762000228565b62000122620002b9565b338152602080840180518201516001600160a01b0316828401528051604090810151818501529051606090810151818501528401516080840152600160008190554390555162000175918391016200054b565b604051602081830303815290604052600290805190602001906200019b929190620002fc565b5050505062000632565b620001af6200038b565b60005b60018110156200020557848160018110620001d157620001d162000535565b6020020151828260018110620001eb57620001eb62000535565b602002015280620001fc81620005cb565b915050620001b2565b50818184600181106200021c576200021c62000535565b60200201529392505050565b816200024e5760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b6040805160e0810190915260006080820181815260a0830182905260c0830191909152815260208101620002856200038b565b81526040805160608101825260008082526020828101829052928201529101908152602001620002b46200038b565b905290565b6040518060a0016040528060006001600160a01b0316815260200160006001600160a01b031681526020016000815260200160008152602001620002b46200038b565b8280546200030a90620005f5565b90600052602060002090601f0160209004810192826200032e576000855562000379565b82601f106200034957805160ff191683800117855562000379565b8280016001018555821562000379579182015b82811115620003795782518255916020019190600101906200035c565b5062000387929150620003d8565b5090565b60405180602001604052806001905b620003c1604051806060016040528060008152602001600081526020016000151581525090565b8152602001906001900390816200039a5790505090565b5b80821115620003875760008155600101620003d9565b604080519081016001600160401b03811182821017156200042057634e487b7160e01b600052604160045260246000fd5b60405290565b604051608081016001600160401b03811182821017156200042057634e487b7160e01b600052604160045260246000fd5b604051602081016001600160401b03811182821017156200042057634e487b7160e01b600052604160045260246000fd5b600081830360a08112156200049c57600080fd5b620004a6620003ef565b83518152601f19820191506080821215620004c057600080fd5b620004ca62000426565b6020831215620004d957600080fd5b620004e362000457565b602086015181528152604085015192506001600160a01b03831683146200050957600080fd5b826020820152606085015160408201526080850151606082015280602083015250809250505092915050565b634e487b7160e01b600052603260045260246000fd5b81516001600160a01b03908116825260208084015190911681830152604080840151818401526060808501518185015260808086015160e08601949291860160005b6001811015620005bf57825180518352858101518684015286015115158683015291840191908301906001016200058d565b50505050505092915050565b6000600019821415620005ee57634e487b7160e01b600052601160045260246000fd5b5060010190565b600181811c908216806200060a57607f821691505b602082108114156200062c57634e487b7160e01b600052602260045260246000fd5b50919050565b61156880620006426000396000f3fe60806040526004361061006e5760003560e01c8063832307571161004b57806383230757146100c1578063a7661d54146100d6578063ab53f2c6146100e9578063b62792241461010c57005b80631e93b0f1146100775780632772eddc1461009b5780632c10a159146100ae57005b3661007557005b005b34801561008357600080fd5b506003545b6040519081526020015b60405180910390f35b6100756100a93660046110f5565b610143565b6100756100bc3660046110f5565b610179565b3480156100cd57600080fd5b50600154610088565b6100756100e43660046110f5565b6101ab565b3480156100f557600080fd5b506100fe6101dd565b60405161009292919061113d565b61011f61011a366004611177565b61027a565b6040805182516001600160a01b031681526020928301519281019290925201610092565b604080516060810182526000602082018181529282015290815261017561016f36849003840184611238565b826102df565b5050565b60408051606081018252600060208201818152928201529081526101756101a53684900384018461129d565b82610630565b60408051606081018252600060208201818152928201529081526101756101d73684900384018461129d565b82610883565b6000606060005460028080546101f2906112d5565b80601f016020809104026020016040519081016040528092919081815260200182805461021e906112d5565b801561026b5780601f106102405761010080835404028352916020019161026b565b820191906000526020600020905b81548152906001019060200180831161024e57829003601f168201915b50505050509050915091509091565b60408051808201909152600080825260208201526102ae604080516060810182526000602082018181529282015290815290565b6102b6610ef7565b60408051808201909152602080820186815282528201526102d781836102df565b505192915050565b6102ef600560005414600f610a54565b815161030a90158061030357508251600154145b6010610a54565b60008080556002805461031c906112d5565b80601f0160208091040260200160405190810160405280929190818152602001828054610348906112d5565b80156103955780601f1061036a57610100808354040283529160200191610395565b820191906000526020600020905b81548152906001019060200180831161037857829003601f168201915b50505050508060200190518101906103ad9190611326565b90506103b7610f24565b6103c88260c0015142106011610a54565b60408051338152855160208083019190915286015151518183015290517f7d66d73ff83563156ca4ecd3b15e845da66b8d82f7da365588d378ce806c89ae9181900360600190a160208401515151610423903414600e610a54565b8160a001511561050f57602081810180513390528582015151518151830152516040805182516001600160a01b0316815291830151928201929092527f3186f591d4915209b4d386ec90f4528f8293336a9fc2131f261689aeba747209910160405180910390a160208101518352610499610f60565b825181516001600160a01b039182169052602080850151835192169181019190915260408085015183518201528682015151518284018051919091528051339301929092528151600091015280516001606090910152805143608090910152514260a09091015261050981610a7a565b5061062a565b81608001516001600160a01b03166108fc83606001519081150290604051600060405180830381858888f19350505050158015610550573d6000803e3d6000fd5b5080513390526020848101515151825182015281516040805182516001600160a01b0316815291830151928201929092527fa40277e678709a4813013ce6263da45d7d5d51ce8fad9cbe5454affbeb7cb28b910160405180910390a1805183526105b8610f60565b825181516001600160a01b039182169052602080850151835192169181019190915260408085015183518201528682015151518284018051919091528051339301929092528151600091015280516001606090910152805143608090910152514260a09091015261062881610a7a565b505b50505050565b610640600160005414600c610a54565b815161065b90158061065457508251600154145b600d610a54565b60008080556002805461066d906112d5565b80601f0160208091040260200160405190810160405280929190818152602001828054610699906112d5565b80156106e65780601f106106bb576101008083540402835291602001916106e6565b820191906000526020600020905b8154815290600101906020018083116106c957829003601f168201915b50505050508060200190518101906106fe91906113c5565b905061072760408051608081018252600060208201818152928201819052606082015290815290565b60408051338152855160208083019190915286015115158183015290517f400d21ea4e4a5e28b4ae5f0f476c201fc8036473fcf7c8cd252f38698020b4f19181900360600190a161077a34156008610a54565b6080820151515161078d906001906114c6565b81515260808201805151602090810151835182015290515160409081015183519015159101528201516107ce906107c79033906001610c67565b6009610a54565b81516107e6906001600160a01b03163314600a610a54565b61080960016107ff846080015160008560000151610c7f565b515114600b610a54565b610811610f60565b825181516001600160a01b0391821690526020808501518351921691810191909152606080850151835160409081019190915280860151838501805191909152805133940193909352825160019101819052825190910152805143608090910152514260a09091015261062881610a7a565b6108936005600054146014610a54565b81516108ae9015806108a757508251600154145b6015610a54565b6000808055600280546108c0906112d5565b80601f01602080910402602001604051908101604052809291908181526020018280546108ec906112d5565b80156109395780601f1061090e57610100808354040283529160200191610939565b820191906000526020600020905b81548152906001019060200180831161091c57829003601f168201915b50505050508060200190518101906109519190611326565b90506109658160c001514210156016610a54565b60408051338152845160208083019190915285015115158183015290517faa99e317c364fb804a6b7e67b51beee98735c62eb3df9d8182015e63bb1907229181900360600190a16109b834156012610a54565b80516109d0906001600160a01b031633146013610a54565b6109d8610f60565b815181516001600160a01b039182169052602080840151835190831690820152604080850151845182015260608086015183860180519190915260808088015182519616959094019490945260a08087015185519015159301929092528351600091015282514392019190915290514291015261062a81610a7a565b816101755760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b60408051602081019091526000815281602001516060015115610bd157815160400151602083015160a00151610ab091906114c6565b81526040805160e081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c08101919091528251516001600160a01b03908116825283516020908101518216818401528451604090810151818501528186018051516060860152805183015190931660808501529151820151151560a0840152835160c08401526005600055436001559051610bad9183910181516001600160a01b03908116825260208084015182169083015260408084015190830152606080840151908301526080808401519091169082015260a08281015115159082015260c0918201519181019190915260e00190565b6040516020818303038152906040526002908051906020019061062a929190610fbc565b610bed8260000151602001518360200151602001516001610cf3565b81602001516040015115610c11576000808055600181905561017590600290611040565b8151516020830151516040516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015610c50573d6000803e3d6000fd5b506000808055600181905561017590600290611040565b6000610c7583853085610d0c565b90505b9392505050565b610c8761107d565b60005b6001811015610cd357848160018110610ca557610ca561149a565b6020020151828260018110610cbc57610cbc61149a565b602002015280610ccb816114de565b915050610c8a565b5081818460018110610ce757610ce761149a565b60200201529392505050565b610cfe838383610de6565b610d0757600080fd5b505050565b604080516001600160a01b0385811660248301528481166044830152606480830185905283518084039091018152608490920183526020820180516001600160e01b03166323b872dd60e01b179052915160009283928392918916918391610d73916114f9565b60006040518083038185875af1925050503d8060008114610db0576040519150601f19603f3d011682016040523d82523d6000602084013e610db5565b606091505b5091509150610dc682826001610eb7565b5080806020019051810190610ddb9190611515565b979650505050505050565b604080516001600160a01b038481166024830152604480830185905283518084039091018152606490920183526020820180516001600160e01b031663a9059cbb60e01b179052915160009283928392918816918391610e45916114f9565b60006040518083038185875af1925050503d8060008114610e82576040519150601f19603f3d011682016040523d82523d6000602084013e610e87565b606091505b5091509150610e9882826002610eb7565b5080806020019051810190610ead9190611515565b9695505050505050565b60608315610ec6575081610c78565b825115610ed65782518084602001fd5b60405163100960cb60e01b815260048101839052602401610a71565b905290565b604051806040016040528060008152602001610ef260408051808201909152600060208201908152815290565b60408051608081018252600091810182815260608201929092529081908152602001610ef2604080518082019091526000808252602082015290565b6040805160a081018252600091810182815260608201839052608082019290925290819081526040805160c08101825260008082526020828101829052928201819052606082018190526080820181905260a082015291015290565b828054610fc8906112d5565b90600052602060002090601f016020900481019282610fea5760008555611030565b82601f1061100357805160ff1916838001178555611030565b82800160010185558215611030579182015b82811115611030578251825591602001919060010190611015565b5061103c9291506110c8565b5090565b50805461104c906112d5565b6000825580601f1061105c575050565b601f01602090049060005260206000209081019061107a91906110c8565b50565b60405180602001604052806001905b6110b2604051806060016040528060008152602001600081526020016000151581525090565b81526020019060019003908161108c5790505090565b5b8082111561103c57600081556001016110c9565b6000604082840312156110ef57600080fd5b50919050565b60006040828403121561110757600080fd5b610c7883836110dd565b60005b8381101561112c578181015183820152602001611114565b8381111561062a5750506000910152565b8281526040602082015260008251806040840152611162816060850160208701611111565b601f01601f1916919091016060019392505050565b60006020828403121561118957600080fd5b5035919050565b634e487b7160e01b600052604160045260246000fd5b6040805190810167ffffffffffffffff811182821017156111c9576111c9611190565b60405290565b6040516020810167ffffffffffffffff811182821017156111c9576111c9611190565b60405160a0810167ffffffffffffffff811182821017156111c9576111c9611190565b6040516060810167ffffffffffffffff811182821017156111c9576111c9611190565b6000818303604081121561124b57600080fd5b6112536111a6565b833581526020601f198301121561126957600080fd5b6112716111cf565b915061127b6111cf565b602094850135815282529283015250919050565b801515811461107a57600080fd5b6000604082840312156112af57600080fd5b6112b76111a6565b8235815260208301356112c98161128f565b60208201529392505050565b600181811c908216806112e957607f821691505b602082108114156110ef57634e487b7160e01b600052602260045260246000fd5b80516001600160a01b038116811461132157600080fd5b919050565b600060e0828403121561133857600080fd5b60405160e0810181811067ffffffffffffffff8211171561135b5761135b611190565b6040526113678361130a565b81526113756020840161130a565b6020820152604083015160408201526060830151606082015261139a6080840161130a565b608082015260a08301516113ad8161128f565b60a082015260c0928301519281019290925250919050565b600060e082840312156113d757600080fd5b6113df6111f2565b6113e88361130a565b815260206113f781850161130a565b81830152604080850151818401526060808601518185015286609f87011261141e57600080fd5b6114266111cf565b8060e088018981111561143857600080fd5b608089015b818110156114875784818c0312156114555760008081fd5b61145d611215565b815181528782015188820152868201516114768161128f565b81880152845292860192840161143d565b5050608086015250929695505050505050565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b600082198211156114d9576114d96114b0565b500190565b60006000198214156114f2576114f26114b0565b5060010190565b6000825161150b818460208701611111565b9190910192915050565b60006020828403121561152757600080fd5b8151610c788161128f56fea26469706673582212203ee30d53423694ccb74ec854fe11cebbc863b689e4106d8104e29b695974647964736f6c634300080c0033`,
  BytecodeLen: 7082,
  Which: `oD`,
  version: 7,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:31:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:69:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:69:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './index.rsh:41:17:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Bidder_bid": Bidder_bid,
  "Creator": Creator
  };
export const _APIs = {
  Bidder: {
    bid: Bidder_bid
    }
  };
