import { createContext, Dispatch, SetStateAction } from 'react';

import { IFetchUsers } from '../../type';

type SearchContextProps = {
  users: IFetchUsers[];
  searchValue: string;
  setSearchValue: Dispatch<SetStateAction<string>>;
};

const defaultValue: SearchContextProps = {
  users: [],
  searchValue: '',
  setSearchValue: () => {},
};

export const SearchContext = createContext<SearchContextProps>(defaultValue);
