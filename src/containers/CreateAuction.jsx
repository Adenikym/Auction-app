import React, { useState } from 'react';
import FormInput from '../components/FormInput';
import Button from '../components/Formbutton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import DateTimePicker from 'react-datetime-picker';
function CreateAuction({ closemodal }) {
  const [value, onChange] = useState(new Date());
  return (
    <div className=" bg-white backdrop-blur-sm shadow-lg absolute top-0 w-full z-30 flex justify-center h-full">
      <div className="bg-c-black  py-9  border-c-blue border-4 shadow-md w-1/3 my-auto px-9 ">
        <div
          onClick={closemodal}
          className="flex justify-end cursor-pointer  text-c-white "
        >
          <FontAwesomeIcon icon={faTimes} />
        </div>
        <p
          style={{ color: '#fff' }}
          className="mt-5 mb-5 text-white text-center text-xl"
        >
          Create your auction!
        </p>

        <FormInput className="mt-6" placeholder="Enter auction title" />

        <FormInput className="mt-6" placeholder="What's your floor price?" />
        <FormInput className="mt-6" placeholder="Auction Item" />
        <p className="text-c-white mt-5">Start time</p>
        <DateTimePicker
          className="mt-2 bg-c-white h-10 w-full"
          onChange={onChange}
          value={value}
        />

        <Button buttonTitle={'Launch Auction'} />
      </div>
    </div>
  );
}

export default CreateAuction;
