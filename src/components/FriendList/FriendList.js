import PropTypes from 'prop-types';
import './FriendList.scss';
import FriendListItem from './FriendListItem';

const FriendList = ({ friends }) => {
  console.log('test', friends);
  return (
    <ul className="friends-list">
      {friends.map(friend => (
        <FriendListItem
          key={friend.id}
          name={friend.name}
          avatar={friend.avatar}
          isOnline={friend.isOnline}
        />
      ))}
    </ul>
  );
};

PropTypes.FriendList = {
  friends: PropTypes.array,
};

export default FriendList;
