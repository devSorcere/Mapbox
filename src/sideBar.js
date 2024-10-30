// Sidebar.js
import React, { useState } from 'react';

function Sidebar({ tutors, onTutorClick }) {
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
                        <li
                            key={tutor.name}
                            onClick={() => onTutorClick(tutor)}
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                margin: '5px 0',
                                cursor: 'pointer'
                            }}
                        >
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
