import { SetStateAction, useContext, useState } from 'react';
import { SearchContext } from '../SearchResults/SearchContext';
import { useParams } from 'react-router';
import UserPagePop from './UserPagePop';
const UserPageCard = (): JSX.Element => {
  const { id } = useParams<string>();
  const { users } = useContext(SearchContext);
  const [openPop, setOpenPop] = useState(false);

  const userData = users.find(
    (userId): SetStateAction<boolean> => userId.id.toString() === id
  );
  const popOpenHandle = () => {
    setOpenPop(true);
  };

  const handleClosePop = (): any => {
    setOpenPop(false);
  };
  return (
    <div className='user-page__user-card'>
      {userData && (
        <div>
          <img src={userData.image} alt='User avatar' />
          <h2>
            {userData.firstName} {userData.lastName}
          </h2>
        </div>
      )}
      {userData && (
        <div className='user-page__user-info'>
          <span>Birth date - {userData.birthDate}</span>
          <span>Age - {userData.age}</span>
          <span>Gender - {userData.gender}</span>
          <span>Tel: {userData.phone}</span>
          <span>Height - {userData.height}</span>
          <span>Weight - {userData.weight}</span>
          <button onClick={popOpenHandle}>More info</button>
        </div>
      )}

      <UserPagePop
        userData={userData!}
        openPop={openPop}
        closePop={handleClosePop}
      />
    </div>
  );
};

export default UserPageCard;
