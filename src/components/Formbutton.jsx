import React from 'react';

import { Dots } from 'react-activity';
import 'react-activity/dist/library.css';

function Button({ buttonTitle, handleClick, buttonLoading }) {
  return (
    <button
      style={{ background: '#735BDC', color: '#fff' }}
      className=" ... bg-white px-10 py-2 mx-auto mt-5 rounded-full text-white text-xl"
      onClick={handleClick}
    >
      <>{buttonLoading ? <Dots color="white" /> : buttonTitle}</>
    </button>
  );
}

export default Button;
