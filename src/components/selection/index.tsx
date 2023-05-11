import { FC, ReactElement } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import List from '@mui/material/List';
import Chip from '@mui/material/Chip';

import { RootState } from '../../redux/store';
import { unselect } from '../../redux/reducers/selection';

const Selection: FC = (): ReactElement => {
  const selectionItems = useSelector(
    (store: RootState) => store.selection.items,
  );
  const dispatch = useDispatch();
  return (
    <List sx={{ width: '100%', maxWidth: 750, bgcolor: 'background.paper' }}>
      {selectionItems.map((item, id) => (
        <Chip
          sx={{ m: 0.2 }}
          label={item}
          key={item + id}
          onDelete={() => dispatch(unselect(id))}
        />
      ))}
    </List>
  );
};

export default Selection;
