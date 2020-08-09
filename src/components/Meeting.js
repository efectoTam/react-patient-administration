import React from 'react';

const Meeting = ({meeting}) => (
  <div className="cita">
    <p>Mascota: <span>{meeting.pet}</span> </p>
    <p>Dueño: <span>{meeting.owner}</span> </p>
    <p>Fecha: <span>{meeting.date}</span> </p>
    <p>Hora: <span>{meeting.time}</span> </p>
    <p>Síntomas: <span>{meeting.symptoms}</span> </p>
  </div>
);
 
export default Meeting;