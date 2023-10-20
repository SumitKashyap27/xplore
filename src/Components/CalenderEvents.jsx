import React, { useState } from 'react';
import Calendar from 'react-calendar';

function MyApp() {
  const [date, setDate] = useState(new Date());
  const [events, setEvents] = useState([]);
  const [showDialog, setShowDialog] = useState(false);

  // Function to fetch astronomical events from the NASA API
  const fetchAstronomicalEvents = async (selectedDate) => {
    const apiKey = 'G6MQhXqXJf4OOBBehEQre3BsHijIV0bsG0gVhTt7';
    const formattedDate = selectedDate.toISOString().split('T')[0];

    try {
      const response = await fetch(
        `https://api.nasa.gov/planetary/apod?date=${formattedDate}&api_key=${apiKey}`
      );

      if (response.ok) {
        const eventData = await response.json();
        setEvents([eventData]);
      } else {
        setEvents([]);
      }
    } catch (error) {
      console.error(error);
      setEvents([]);
    }
  };

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };

  const eventDialogStyle = {
    backgroundColor: '#282c34',
    color: 'white',
    padding: '16px',
    borderRadius: '8px',
    marginTop: '16px',
  };

  const headerStyle = {
    marginBottom: '16px',
  };

  const imgStyle = {
    maxWidth: '100%',
  };

  // Handle date selection
  const handleDateChange = (selectedDate) => {
    setDate(selectedDate);
    fetchAstronomicalEvents(selectedDate);
    setShowDialog(true);
  };

  return (
    <div style={containerStyle} padding="50rem" >
      <Calendar onChange={handleDateChange} value={date} />
      {showDialog && (
        <div style={eventDialogStyle}>
          {events.length > 0 ? (
            events.map((event, index) => (
              <div key={index}>
                <h2 style={headerStyle}>Astronomical Event for {date.toDateString()}</h2>
                <h3>{event.title}</h3>
                <p>{event.explanation}</p>
                <img src={event.url} alt="Astronomical Event" style={imgStyle} />
              </div>
            ))
          ) : (
            <h2>No astronomical event information available for this date.</h2>
          )}
        </div>
      )}
    </div>
  );
}

export default MyApp;
