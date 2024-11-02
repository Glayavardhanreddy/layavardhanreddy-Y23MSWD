import React from 'react';

const TimeTable = () => {
  const timetable = [
    { day: 'Monday', sessions: [{ time: '9:00 AM - 11:00 AM', subject: 'PSQT' }, { time: '11:00 AM - 1:00 PM', subject: 'MSWD' }, { time: '1:00 PM - 3:00 PM', subject: 'Quantom Physics' }, { time: '3:00 PM - 5:00 PM', subject: 'Computer Science' }] },
    { day: 'Tuesday', sessions: [{ time: '9:00 AM - 11:00 AM', subject: 'DBMS' }, { time: '11:00 AM - 1:00 PM', subject: 'LINUX' }, { time: '1:00 PM - 3:00 PM', subject: 'PSQT' }, { time: '3:00 PM - 5:00 PM', subject: 'Quantom Physical' }] },
    { day: 'Wednesday', sessions: [{ time: '9:00 AM - 11:00 AM', subject: 'DBMS' }, { time: '11:00 AM - 1:00 PM', subject: 'DATA SCIENCE' }, { time: '1:00 PM - 3:00 PM', subject: 'Quantom Physics' }, { time: '3:00 PM - 5:00 PM', subject: 'FIS' }] },
    { day: 'Thursday', sessions: [{ time: '9:00 AM - 11:00 AM', subject: 'PSQT' }, { time: '11:00 AM - 1:00 PM', subject: 'DTW' }, { time: '1:00 PM - 3:00 PM', subject: 'DBMS' }, { time: '3:00 PM - 5:00 PM', subject: 'Computer Science' }] },
    { day: 'Friday', sessions: [{ time: '9:00 AM - 11:00 AM', subject: ' Quantom Physics' }, { time: '11:00 AM - 1:00 PM', subject: 'Quantom Physical' }, { time: '1:00 PM - 3:00 PM', subject: 'DBMS' }, { time: '3:00 PM - 5:00 PM', subject: 'PSQT' }] },
  ];

  return (
    <div>
      <h2>TimeTable</h2>
      <p>View your timetable here.</p>
      <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px' }}>
        <thead>
          <tr>
            <th style={{ border: '1px solid #333', padding: '10px' }}>Day</th>
            <th style={{ border: '1px solid #333', padding: '10px' }}>Time</th>
            <th style={{ border: '1px solid #333', padding: '10px' }}>Subject</th>
          </tr>
        </thead>
        <tbody>
          {timetable.map((entry, index) => (
            <React.Fragment key={index}>
              {entry.sessions.map((session, i) => (
                <tr key={i}>
                  {i === 0 && (
                    <td
                      rowSpan={entry.sessions.length}
                      style={{ border: '1px solid #333', padding: '10px', textAlign: 'center', fontWeight: 'bold' }}
                    >
                      {entry.day}
                    </td>
                  )}
                  <td style={{ border: '1px solid #333', padding: '10px', textAlign: 'center' }}>{session.time}</td>
                  <td style={{ border: '1px solid #333', padding: '10px', textAlign: 'center' }}>{session.subject}</td>
                </tr>
              ))}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TimeTable;
