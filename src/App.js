import './App.scss';
import Profile from './components/Profile';
import user from './user.json';

function App() {
  return (
    <>
      <h1>Привет </h1>
      <div className="App">
        <Profile
          name={user.name}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
      </div>
    </>
  );
}

export default App;
