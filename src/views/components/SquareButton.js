import React from 'react';
import './SquareButton.scss';


function SquareButton(Props) {
  return (
    <button
      type="submit"
      title={Props.buttonTitle}
      className={Props.class}
      onClick={Props.onClick}
      value={Props.value}
    >
      {Props.children}
    </button>
  );
}

export default SquareButton;
