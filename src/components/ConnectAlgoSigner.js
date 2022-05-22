
/*global AlgoSigner*/

import React from "react";
import Button from "./Formbutton";


const ConnectAlgoSigner = ({userAccount}) => {

    const connectAlgoSigner = async () =>{
        let resp = await AlgoSigner.connect()
        console.log(resp)
        getUserAccount()
      }
  
      const getUserAccount = async () =>{
         userAccount.current =  await AlgoSigner.accounts({
              ledger: 'TestNet'
            })
      // console.log(userAccount.current[0]['address'])
      console.log(userAccount.current)
      console.log(userAccount)
  
      }
      return(
        <div>
          <Button buttonTitle={'Connect Algosigner'} backgroundColor='blue' handleClick={connectAlgoSigner}>
        
          </Button>
        </div>
        
      )
}

export default ConnectAlgoSigner