import user from './Json/user.json';
import data from './Json/data.json';
import friends from './Json/friends.json';

import { Profile } from './Profile/Profile.jsx';
import { Statistics } from './Statistics/Statistics';
import { Friends } from './Friends/Friends';

export const App = () => {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics data={data} title="Upload stats" />
      <Friends friends={friends} />
    </>
  );
};
