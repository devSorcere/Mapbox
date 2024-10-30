// Sidebar.js
import React, { useState } from 'react';

const tutors = [
  { name: 'Oliver Smith', color: 'red' },
  { name: 'Sophia Brown', color: 'teal' },
  { name: 'Mia Davis', color: 'yellow' }
];

function Sidebar() {
  const [search, setSearch] = useState('');

  return (
    <div style={{ width: '200px', padding: '10px', borderRight: '1px solid #ccc' }}>
      <h3>Tutors</h3>
      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ width: '100%', padding: '5px', marginBottom: '10px' }}
      />
      <ul>
        {tutors
          .filter((tutor) => tutor.name.toLowerCase().includes(search.toLowerCase()))
          .map((tutor) => (
            <li key={tutor.name} style={{ display: 'flex', alignItems: 'center', margin: '5px 0' }}>
              <span
                style={{
                  backgroundColor: tutor.color,
                  width: '15px',
                  height: '15px',
                  borderRadius: '50%',
                  display: 'inline-block',
                  marginRight: '10px'
                }}
              ></span>
              {tutor.name}
            </li>
          ))}
      </ul>
    </div>
  );
}

export default Sidebar;
