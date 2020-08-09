import React, { Fragment, useState } from 'react';
import Form from './components/Form';
import Meeting from './components/Meeting';

function App() {

  // Meetings array
  const [meetings, saveMeetings] = useState([]);

  // Function to add new meetings
  const createMeeting = meeting => {
    saveMeetings([...meetings, meeting]);
  }

  return (
    <Fragment>
      <h1>Administrador de pacientes</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Form
              createMeeting={createMeeting}
            />
          </div>
          <div className="one-half column">
            <h2>Administra tus citas</h2>
            {meetings.map(meeting => (
              <Meeting
                key={meeting.id}
                meeting={meeting}
              />
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
