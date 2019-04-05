import React from 'react';


function DangerButton(Props) {
  return (
    <button style={Props.styles} type="button">
      {Props.msg}
    </button>
  );
}

// interface Props {
//   msg: String;
//   styles: any;
// }

export default DangerButton;
