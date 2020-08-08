import React, {Fragment} from 'react';

const Form = () => {
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
        />
        <label>Nombre dueño</label>
        <input
          type="text"
          name="owner"
          className="u-full-width"
          placeholder="Nombre dueño de la mascota"
        />
        <label>Fecha</label>
        <input
          type="date"
          name="date"
          className="u-full-width"
        />
        <label>Hora</label>
        <input
          type="time"
          name="time"
          className="u-full-width"
        />
        <label>Síntomas</label>
        <textarea
          name="symptom"
          className="u-full-width"
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