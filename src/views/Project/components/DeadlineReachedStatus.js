import React from 'react';


function DeadlineReachedStatus() {
  return (
    <div
      className="deadline-reached-status"
      style={{
        marginTop: '3%',
        marginRight: '3%',
        fontSize: '1.3vw',
        color: 'red',
      }}
    >
      <h4>
        <span className="flaticon-danger" />
        مهلت ارسال پیشنهاد برای این پروژه به پایان رسیده است!
      </h4>
    </div>
  );
}

export default DeadlineReachedStatus;
