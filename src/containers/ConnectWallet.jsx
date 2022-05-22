import React, { useState,useRef } from 'react';

import FormInput from '../components/FormInput';
import Formbutton from '../components/Formbutton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import ConnectAlgoSigner from '../components/ConnectAlgoSigner';

function ConnectWallet({ closeConnect }) {
 
  const dispatch = useDispatch();

  const userAccount = useRef()


  return (
    <div className="bg-white backdrop-blur-sm shadow-lg absolute top-0 w-full z-30 flex justify-center h-full">
      <div className="bg-c-black  py-9  border-c-blue border-4 shadow-md w-1/3 my-auto px-9 ">
        <div
          onClick={closeConnect}
          className="flex justify-end cursor-pointer  text-c-white "
        >
          <FontAwesomeIcon icon={faTimes} />
        </div>


       <ConnectAlgoSigner userAccount = {userAccount}/>
       
      </div>
    </div>
  );
}

export default ConnectWallet;
