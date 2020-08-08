import React, { Fragment, useState } from 'react';

const Form = () => {
  // Create state to meetings
  const [meeting, updateMeeting] = useState({
    pet: '',
    owner: '',
    date: '',
    time: '',
    symptoms: ''
  });

  // Function when the user white inside the inputs
  const handleState = () => {
    console.log('Escribiendo...')
  }

  return (
    <Fragment>
      <h2>Crear cita</h2>
      <form>
        <label>Nombre mascota</label>
        <input
          type="text"
          name="pet"
          className="u-full-width"
          placeholder="Nombre mascota"
          onChange={handleState}
        />
        <label>Nombre dueño</label>
        <input
          type="text"
          name="owner"
          className="u-full-width"
          placeholder="Nombre dueño de la mascota"
          onChange={handleState}
        />
        <label>Fecha</label>
        <input
          type="date"
          name="date"
          className="u-full-width"
          onChange={handleState}
        />
        <label>Hora</label>
        <input
          type="time"
          name="time"
          className="u-full-width"
          onChange={handleState}
        />
        <label>Síntomas</label>
        <textarea
          name="symptoms"
          className="u-full-width"
          onChange={handleState}
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
 
export default Form;