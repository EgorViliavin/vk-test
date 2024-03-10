import { useContext } from 'react';
import uuid from 'react-uuid';
import { SearchContext } from './SearchContext';
import { UserCard } from '../UserCard/UserCard';
import './style.css';

export function SearchResults() {
  const { users } = useContext(SearchContext);

  return (
    <div className='usersList'>
      {users.length <= 0
        ? 'Search not result'
        : users.map((user) => (
            <UserCard
              userImg={user.image}
              userFirstName={user.firstName}
              userLastName={user.lastName}
              userAddress={user.address.address}
              userId={user.id}
              key={uuid()}
            />
          ))}
    </div>
  );
}
