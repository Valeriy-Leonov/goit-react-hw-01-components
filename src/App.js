import './App.scss';
import Profile from './components/Profile/';
import Statistics from './components/Statistics/';
import FriendList from './components/FriendList';
import user from './user.json';
import stats from './statistical-data.json';
import friends from './friends.json';
console.log(friends);
function App() {
  return (
    <>
      <div className="App">
        <h1>Привет</h1>
        <Profile
          name={user.name}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
        <Statistics title={'Upload stats'} stats={stats} />
        <FriendList friends={friends} />
      </div>
    </>
  );
}

export default App;
