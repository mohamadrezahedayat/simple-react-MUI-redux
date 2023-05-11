import { FC, ReactElement, Fragment, useState, useEffect } from 'react';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';

import User from './user';
import { getUsers } from '../../api';
import { IUser } from '../../types/user';
import { useGetItems } from '../../hooks/useGetItems';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { SearchTypes } from '../../types/search';

const Users: FC = (): ReactElement => {
  const { items, error, isLoading } = useGetItems<IUser[]>(getUsers);
  const [filteredItems, filterItems] = useState(items);
  const searchInput = useSelector(
    (store: RootState) => store.selection.searchInput,
  );

  useEffect(() => {
    if (!items) return;
    filterItems(items);
  }, [items]);

  useEffect(() => {
    if (searchInput.searchType !== SearchTypes.USERS) return;

    if (!searchInput.term) {
      filterItems(items);
      return;
    }

    filterItems(
      items?.filter((item) =>
        item.email?.toLowerCase().includes(searchInput.term.toLowerCase()),
      ),
    );
  }, [searchInput]);

  if (isLoading) return <div>loading</div>;
  if (error || !items) return <div>{error}</div>;
  return (
    <List sx={{ width: '100%', maxWidth: 750, bgcolor: 'background.paper' }}>
      {Array.isArray(filteredItems) &&
        filteredItems.map((item) => (
          <Fragment key={item.id}>
            <User user={item} />
            <Divider variant="inset" component="li" />
          </Fragment>
        ))}
    </List>
  );
};

export default Users;
