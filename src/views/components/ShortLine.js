import React from 'react';


function ShortLine(Props) {
  return (
    <div
      className="body-content"
      style={{
        position: 'absolute',
        left: Props.left || '41%',
        bottom: '0px',
        width: Props.width || '25%',
        minWidth: '10vw',
        height: '20%',
        display: 'block',
        borderLeft: '20px solid transparent',
        borderTop: 'none',
        borderRight: 'none',
        borderBottom: '32px solid rgba(146, 193, 209, 0.74)',
        backgroundColor: 'rgba(255, 166, 0, 0)',
        zIndex: '2',
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

export default ShortLine;
