import React from 'react';


function Toplightblueline(Props) {
  return (
    <div
      className="body-content"
      style={{
        marginTop: Props.marginTop || '-5%',
        padding: Props.padding || '6%',
        marginBottom: '15px',
        backgroundColor: 'lightblue',
        position: 'relative',
        width: '100%',
        marginLeft: '0',
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

export default Toplightblueline;
