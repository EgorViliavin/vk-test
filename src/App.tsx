import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { SearchContext } from './components/SearchResults/SearchContext';
import { IFetchUsers, AppRoute } from './type';
import HomePage from './pages/HomePage/HomePage';
import UserPage from './pages/UserPage/UserPage';

export default function App() {
  const [users, setUsers] = useState<IFetchUsers[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState('');
  const [searchValue, setSearchValue] = useState<string>('');

  useEffect(() => {
    setIsLoading(true);
    setError('');

    fetch(`https://dummyjson.com/users/search?q=${searchValue}`)
      .then((res) => {
        if (!res.ok) {
          setIsLoading(false);
          throw new Error(res.status.toString());
        }
        return res.json();
      })
      .then((dataUser) => {
        setUsers(dataUser.users || []);
        setIsLoading(false);
      })
      .catch((er) => {
        setIsLoading(false);
        console.error(er);
        setError(` ${er}`);
      });
  }, [searchValue]);

  return (
    <SearchContext.Provider value={{ users, searchValue, setSearchValue }}>
      <BrowserRouter>
        <Routes>
          <Route
            path={AppRoute.Home}
            element={<HomePage isLoading={isLoading} error={error!} />}
          />
          <Route path={AppRoute.UserPage} element={<UserPage />} />
        </Routes>
      </BrowserRouter>
    </SearchContext.Provider>
  );
}
