import React, { Fragment, useState, useEffect } from 'react';
import Form from './components/Form';
import Meeting from './components/Meeting';

function App() {
  // Meetings in localStorage
  let initialMeetings = JSON.parse(localStorage.getItem('meetings'));
  if(!initialMeetings) {
    initialMeetings = [];
  }

  // Meetings array
  const [meetings, saveMeetings] = useState(initialMeetings);

  // Use effect when the state change
  useEffect( () => {
    let initialMeetings = JSON.parse(localStorage.getItem('meetings'));

    if(initialMeetings) {
      localStorage.setItem('meetings', JSON.stringify(meetings))
    } else {
      localStorage.setItem('meetings', JSON.stringify([]));
    }
  }, [meetings] );

  // Function to add new meetings
  const createMeeting = meeting => {
    saveMeetings([...meetings, meeting]);
  }

  // Function to remove a meeting by its id
  const deleteMeeting = id => {
    const newMeetings = meetings.filter(meeting => meeting.id !== id);
    saveMeetings(newMeetings)
  }

  // Conditional message
  const title = meetings.length === 0
  ? 'No hay citas'
  : 'Administra tus citas'

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
            <h2>{title}</h2>
            {meetings.map(meeting => (
              <Meeting
                key={meeting.id}
                meeting={meeting}
                deleteMeeting={deleteMeeting}
              />
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
