import { FriendListItem } from 'components/FriendListItem/FriendListItem';

import css from './FriendList.module.css';

export const FriendList = props => {
  return (
    <ul className={css['friend-list']}>
      {props.friends.map(friend => (
        <FriendListItem
          key={friend.id}
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
        />
      ))}
    </ul>
  );
};
