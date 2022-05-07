import React from 'react';
import FormInput from '../components/FormInput';
import Button from '../components/Formbutton';

function Form() {
  return (
    <div className="  py-4 border border-white shadow h-3/4 w-1/3 my-auto ">
      <p className="mt-5 mb-5 text-white">Get started with auctions!</p>
      <FormInput
        className="mt-4"
        placeholder="enter your full name"
        label="Email"
      />
      
      <FormInput
        className="mt-4"
        placeholder="enter your email address"
        label="Email"
      />
      
      <FormInput />
     
      <FormInput />
      <br />
      <Button />
    </div>
  );
}

export default Form;
