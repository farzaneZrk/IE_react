import React from 'react';


function FormRow(Props) {
  return (
    <div className="form-group">
      <label htmlFor={Props.inputId} {...Props.labelProp} style={{ fontSize: '110%' }}>
        <b>{Props.labelText}</b>
        <input
          type={Props.inputType || 'text'}
          id={Props.inputId}
          className="form-control input-box"
          style={{
            width: '100%',
            height: '4vh',
            marginBottom: '3%',
            marginTop: '1%',
            border: '2px solid rgb(4, 179, 179)',
            boxShadow: '0 2px 4px 0 rgba(4, 179, 179, 0.509)',
            borderRadius: '4px',
            ...Props.inputStyle,
          }}
        />
      </label>
    </div>
  );
}

// PageHeader.propTypes = {
//   children: propTypes.any.isRequiered,
//   style: propTypes.any,
// };

export default FormRow;
