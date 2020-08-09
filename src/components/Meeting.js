import React from 'react';
import PropTypes from 'prop-types';

const Meeting = ({ meeting, deleteMeeting }) => (
  <div className="cita">
    <p>Mascota: <span>{meeting.pet}</span></p>
    <p>Dueño: <span>{meeting.owner}</span></p>
    <p>Fecha: <span>{meeting.date}</span></p>
    <p>Hora: <span>{meeting.time}</span></p>
    <p>Síntomas: <span>{meeting.symptoms}</span></p>
    <button
      className="button eliminar u-full-width"
      onClick={() => deleteMeeting(meeting.id)}
    >
      Eliminar &times;
    </button>
  </div>
);

Meeting.propTypes = {
  meeting: PropTypes.object.isRequired,
  deleteMeeting: PropTypes.func.isRequired
}
 
export default Meeting;