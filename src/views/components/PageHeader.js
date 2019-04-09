import React from 'react';


function PageHeader(Props) {
  return (
    <div
      className="header"
      style={{
        textAlign: 'center',
        marginBottom: '5%',
        backgroundColor: Props.backgroundColor || 'none',
        height: Props.height || 'auto',
      }}
    >
      {Props.children}
    </div>
  );
}

// PageHeader.propTypes = {
//   children: propTypes.any.isRequiered,
//   style: propTypes.any,
// };

export default PageHeader;
