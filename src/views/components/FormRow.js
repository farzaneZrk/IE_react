import React from 'react';


function FormRow(Props) {
  return (
    <div className="form-group">
      <label htmlFor={Props.inputId} {...Props.labelProp} style={{ fontSize: '110%' }}>
        <b>{Props.labelText}</b>
        <input
          onBlur={Props.onBlur}
          onChange={Props.onChange || ''}
          dir="ltr"
          placeholder={Props.placeHolder || ''}
          pattern={Props.pattern || '.*'}
          title={Props.title || ''}
          size="64"
          type={Props.inputType || 'text'}
          id={Props.inputId}
          className="form-control input-box"
          style={{
            position: 'relative',
            width: '37vw',
            height: '4vh',
            // marginBottom: '1%',
            marginTop: '1%',
            marginRight: '2%',
            border: '2px solid rgb(4, 179, 179)',
            boxShadow: '0 2px 4px 0 rgba(4, 179, 179, 0.509)',
            borderRadius: '4px',
            textAlign: 'right',
            ...Props.inputStyle,
          }}
          required
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
