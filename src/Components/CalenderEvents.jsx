import * as React from 'react';
import dayjs from 'dayjs';
import Badge from '@mui/material/Badge';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { PickersDay } from '@mui/x-date-pickers/PickersDay';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { DayCalendarSkeleton } from '@mui/x-date-pickers/DayCalendarSkeleton';
import { Box, CssBaseline } from '@mui/material';

const initialValue = dayjs('2022-04-17');

// Function to fetch astronomical events from NASA API
async function fetchAstronomicalEvents(date) {
  const formattedDate = date.format('YYYY-MM-DD');
  const apiKey = 'G6MQhXqXJf4OOBBehEQre3BsHijIV0bsG0gVhTt7'; // Replace with your NASA API key
  const apiUrl = `https://api.nasa.gov/planetary/apod?date=${formattedDate}&api_key=${apiKey}`;

  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error('Failed to fetch data from NASA API');
    }

    const eventData = await response.json();
    return eventData;
  } catch (error) {
    console.error(error);
    return null;
  }
}

function ServerDay(props) {
  const { day, outsideCurrentMonth, ...other } = props;
  const [eventData, setEventData] = React.useState(null);

  const loadEventData = async () => {
    const eventData = await fetchAstronomicalEvents(day);
    setEventData(eventData);
  };

  const isSelected = !outsideCurrentMonth;

  return (
    <Badge
      key={day.toString()}
      overlap="circular"
      badgeContent={isSelected ? '🌚' : undefined}
      onClick={loadEventData}
    >
      <PickersDay {...other} outsideCurrentMonth={outsideCurrentMonth} day={day} />
    </Badge>
  );
}

export default function DateCalendarAstronomicalEvents() {
  return (
    <>
      <CssBaseline />
      <div style={{ backgroundColor: 'ThreeDDarkShadow', minHeight: '100vh', paddingTop: '5px', color:'white' }}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DateCalendar
            defaultValue={initialValue}
            renderLoading={() => <DayCalendarSkeleton />}
            slots={{
              day: ServerDay,
            }}
          />
        </LocalizationProvider>
      </div>
    </>
  );
}
