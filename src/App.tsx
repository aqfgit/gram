import React, {useEffect, useState} from 'react';

interface UserUI {
  id: string;
  username: string;
  name: string;
  email: string;
}

function App() {
  const [welcomeMessage, setWelcomeMessage] = useState('');

  const [usersList, setUsersList] = useState<UserUI[]>([]);

  const fetchMessage = async () => {
    const message = await fetch('/api').then((res) => res.text());

    setWelcomeMessage(message);
  };

  useEffect(() => {
    fetchMessage();
  }, []);

  const fetchUsers = async () => {
    const users = await fetch('/users/all').then((res) => res.json());

    setUsersList(users);
  };

  return (
    <div className="app">
      <header className="app-header">
        <p>{welcomeMessage}</p>

        <button onClick={fetchUsers}>Fetch users</button>

        {usersList.length > 0 && (
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Username</th>
                <th>Name</th>
                <th>Email</th>
              </tr>
            </thead>

            <tbody>
              {usersList.map((user: UserUI) => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.username}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </header>
    </div>
  );
}

export default App;
