import { FC, ReactElement } from 'react';
import { useDispatch } from 'react-redux';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import ListItemButton from '@mui/material/ListItemButton';

import { IUser } from '../../types/user';
import { select } from '../../redux/reducers/selection';

type Props = { user: IUser };
const User: FC<Props> = ({
  user: { email, name, username, phone, id },
}): ReactElement => {
  const dispatch = useDispatch();
  return (
    <ListItem alignItems="flex-start" disablePadding>
      <ListItemButton
        role={undefined}
        onClick={() => {
          dispatch(select(username || id.toString()));
        }}
        dense
      >
        <ListItemAvatar>
          <Avatar
            alt={name?.firstname + ' ' + name?.lastname || 'avatar'}
            src={`https://robohash.org/${id}`}
          />
        </ListItemAvatar>
        <ListItemText
          primary={email}
          secondary={
            <>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                {phone}
              </Typography>
              {`    @${username}`}
            </>
          }
        />
      </ListItemButton>
    </ListItem>
  );
};

export default User;
