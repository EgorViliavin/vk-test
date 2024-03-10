import { IFetchUsers } from '../../type';

type UserPagePopProps = {
  userData: IFetchUsers;
  openPop: boolean;
  closePop: (e: boolean) => {};
};

const UserPagePop = ({
  userData,
  openPop,
  closePop,
}: UserPagePopProps): JSX.Element => {
  const closePopHandler = () => {
    closePop(false);
  };

  return (
    <div className={`${!openPop ? '' : 'container-pop'}`}>
      {userData && (
        <div
          className={`${
            !openPop ? 'user-page__pop' : 'user-page__pop--active'
          }`}
        >
          <span>{userData.address.city}</span>
          <span> {userData.address.address}</span>
          <span>{userData.address.postalCode}</span>
          <span>{userData.address.state}</span>
          <span>{userData.crypto.coin}</span>
          <span>{userData.crypto.wallet}</span>
          <span>{userData.crypto.network}</span>
          <span>{userData.ein}</span>
          <button onClick={closePopHandler}>close</button>
        </div>
      )}
    </div>
  );
};

export default UserPagePop;
