import React from 'react';


function WhiteBodyContent(Props) {
  return (
    <div
      className="body-content"
      style={{
        marginTop: '-10%',
        width: '45%',
        height: '50%',
        marginLeft: '27.5%',
        marginRight: '20%',
        padding: '3%',
        paddingLeft: '10%',
        paddingTop: '2%',
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

export default WhiteBodyContent;
