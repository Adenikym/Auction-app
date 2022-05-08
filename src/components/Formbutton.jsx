import React from 'react';

function Button({ buttonTitle }) {
  return (
    <button
      style={{ background: '#735BDC', color: '#fff' }}
      class=" ... bg-white px-10 py-2 mx-auto mt-5 rounded-full text-white text-xl"
    >
      {buttonTitle}
    </button>
  );
}

export default Button;
