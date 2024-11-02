import React from 'react';

function Faculty() {
    const facultyList = [
        { name: 'Dr. Sai Mounish', subject: 'PSQT' },
        { name: 'Prof. Dinesh Reddy', subject: 'MSWD' },
        { name: 'Dr. Mahendhar Reddy', subject: 'Quantum Physics' },
        { name: 'Prof. Layavardhan Reddy', subject: 'Computer Science' },
        { name: 'Dr. Lokesh', subject: 'DBMS' },
        { name: 'Dr. Sandeep Reddy Vanga', subject: 'Biology' },
        { name: 'Dr. Arjun Reddy', subject: 'Data Science' },
        { name: 'Prof. Vikram', subject: 'FIS' },
        { name: 'Prof. Harshad', subject: 'DTW' },
        { name: 'Dr. Joney', subject: 'Quantum Physical' }
    ];

    return (
        <div>
            <h2>Faculty</h2>
            <p>Meet our esteemed faculty members.</p>
            <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', marginTop: '20px' }}>
                {facultyList.map((faculty, index) => (
                    <div key={index} style={{ padding: '10px', border: '1px solid #333', borderRadius: '5px', minWidth: '150px', textAlign: 'center' }}>
                        <strong>{faculty.name}</strong>
                        <p>{faculty.subject}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Faculty;
