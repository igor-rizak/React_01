import user from './Json/user.json';
import { Profile } from './Profile/Profile.jsx';

export const App = () => {
  return (
    <>
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        Юлька ВРЄДІНКА!!! ДУУУУУУУУУУУУУУЖЕ ВЕЛИКА
      </div>

      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
    </>
  );
};