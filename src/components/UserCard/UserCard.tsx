import { Link } from 'react-router-dom';
import './style.css';

type UserCardProps = {
  userImg: string;
  userFirstName: string;
  userLastName: string;
  userAddress: string;
  userId: number;
};

export function UserCard({
  userImg,
  userFirstName,
  userLastName,
  userAddress,
  userId,
}: UserCardProps) {
  return (
    <Link to={`/user/${userId}`}>
      <div className='userCard'>
        <img className='userPic' src={userImg} />
        <div className='userInfo'>
          <div>{`${userFirstName} ${userLastName}`}</div>
          <div>{userAddress}</div>
        </div>
      </div>
    </Link>
  );
}
