import { useState } from 'react';

// 'https://jsonplaceholder.typicode.com/users'
function UserLists() {
  // eslint-disable-next-line no-unused-vars
  const [data, setData] = useState([
    {
      id: 1,
      name: 'user-name',
    },
  ]);

  return (
    <main style={{ maxWidth: 1200, marginInline: 'auto', padding: 20 }}>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr 1fr',
          gap: 20,
        }}
      >
        {data.map(({ id, name }) => (
          <div key={id} style={{ border: '1px solid #ccc', textAlign: 'center' }}>
            <img
              src={`https://robohash.org/1?set=set2&size=180x180`}
              alt={name}
              style={{ height: 180, width: 180 }}
            />
            <h3>{name}</h3>
          </div>
        ))}
      </div>
    </main>
  );
}

export default UserLists;
