import React from 'react';


function BodyContent(Props) {
  return (
    <div
      className="body-content"
      style={{
        marginTop: '-10%',
        width: '43%',
        height: '50%',
        marginLeft: '25%',
        marginRight: '20%',
        padding: '3%',
        paddingTop: '1%',
        borderRadius: '8px',
        marginBottom: '10%',
        // fontSize: '105%',
        border: '5px solid white',
        boxShadow: '0 10px 14px 10px rgba(0, 0, 0, 0.2)',
        background: 'white',
        ...Props.style,
      }}
      dir="rtl"
    >
      {Props.children}
    </div>
  );
}

// PageHeader.propTypes = {
//   children: propTypes.any.isRequiered,
//   style: propTypes.any,
// };

export default BodyContent;
