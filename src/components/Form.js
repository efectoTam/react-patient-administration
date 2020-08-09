import React, { Fragment, useState } from 'react';
import uuid from 'uuid/dist/v4';
import PropTypes from 'prop-types';

const Form = ({ createMeeting }) => {
  // Create state to meetings
  const [meeting, updateMeeting] = useState({
    pet: '',
    owner: '',
    date: '',
    time: '',
    symptoms: ''
  });

  const [error, updateError] = useState(false)

  // Function when the user white inside the inputs
  const handleState = e => {
    updateMeeting({
      ...meeting,
      [e.target.name]: e.target.value
    })
  }

  // Take the values
  const { pet, owner, date, time, symptoms } = meeting;

  // When the user press the button
  const meetingSubmit = e => {
    e.preventDefault();
      
    // Validate
    if(pet.trim() === '' || owner.trim() === '' || date.trim() === '' || time.trim() === '' || symptoms.trim() === '') {
      updateError(true);
      return;
    }

    // Delete validation message
    updateError(false);
    
    // Id assignation
    meeting.id = uuid();

    // Create meeting
    createMeeting(meeting);

    // Form restart
    updateMeeting({
      pet: '',
      owner: '',
      date: '',
      time: '',
      symptoms: ''
    })
  }

  return (
    <Fragment>
      <h2>Crear cita</h2>
      {error
        ? <p className="alerta-error">Todos los campos son obligatorios</p>
        : null
      }
      <form
        onSubmit={meetingSubmit}
      >
        <label>Nombre mascota</label>
        <input
          type="text"
          name="pet"
          className="u-full-width"
          placeholder="Nombre mascota"
          onChange={handleState}
          value={pet}
        />
        <label>Nombre dueño</label>
        <input
          type="text"
          name="owner"
          className="u-full-width"
          placeholder="Nombre dueño de la mascota"
          onChange={handleState}
          value={owner}
        />
        <label>Fecha</label>
        <input
          type="date"
          name="date"
          className="u-full-width"
          onChange={handleState}
          value={date}
        />
        <label>Hora</label>
        <input
          type="time"
          name="time"
          className="u-full-width"
          onChange={handleState}
          value={time}
        />
        <label>Síntomas</label>
        <textarea
          name="symptoms"
          className="u-full-width"
          onChange={handleState}
          value={symptoms}
        >
        </textarea>
        <button
          type="submit"
          className="u-full-width button-primary"
        >
          Agregar cita        
        </button>
      </form>
    </Fragment>
  );
}

Form.propTypes = {
  createMeeting: PropTypes.func.isRequired
}

export default Form;